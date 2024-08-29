---
title: 'Multipart Namespace Components: Addressing RSC and Dot Notation Issues'
excerpt: 'In React development, organising components well is crucial for maintainability and performance. One approach is using namespaced components, also known as dot notation, where related parts are grouped together.'
coverImage: '/assets/blog/multipart-namespace-components-addressing-rsc-and-dot-notation-issues/cover.jpg'
date: '2024-08-17T05:35:07.322Z'
author:
  name: Ivica Batinić
  picture: '/assets/blog/authors/isbatak.jpg'
ogImage:
  url: '/assets/blog/multipart-namespace-components-addressing-rsc-and-dot-notation-issues/cover.jpg'
---

> **Note (Updated 24.08.2024):**
> After further investigation and prototyping, I discovered some important limitations regarding the tree-shaking capabilities of bundlers like Webpack when using dot-notation (namespace) syntax. I have detailed these findings in the latter part of this post. If you're primarily interested in this aspect, I recommend jumping to the update section [here](#update-insights-on-bundler-limitations-with-dot-notation).

## Introduction

In React development, organising components well is crucial for maintainability and performance. One approach is using namespaced components, also known as dot notation, where related parts are grouped together. Recently, a significant issue with React Server Components (RSC) has been raised, especially in the discussions ["Dot notation client component breaks consuming RSC"](https://github.com/vercel/next.js/issues/51593) and ["Issue #58776: Challenges with Namespaced Components in RSC”](https://github.com/vercel/next.js/issues/58776).

This blog post will show how we can solve this problem effectively using a `Card` component with parts like `Card.Header`, `Card.Body`, and `Card.Footer`. We’ll look at some old methods, their problems, and a modern solution.

## Understanding Old Patterns and Their Downsides

### The Function Assignment Pattern
One old method is the function assignment pattern.

Here’s how it looks:

```jsx
function Card() {}

Card.Header = function Header() {}
Card.Body = function Body() {}
Card.Footer = function Footer() {}

export default Card;
```

**Downsides:**

- **Serialisation Issues:** This pattern isn’t compatible with React Server Components (RSC) because it can’t be serialised.
- **tree shaking Issues:** All parts get included in the bundle, which is inefficient.



> **Tree shaking** is a form of dead code elimination that removes unused code from the bundle. For tree shaking to work effectively:
>
> 1. **Static Analysis**: The optimiser must be able to statically analyse the code. This usually works well when modules are ES modules(using `import`/`export`).
> 2. **Side Effects**: The code being removed must not have side effects that the optimiser can't safely remove.

This example is a bit tricky for tree-shaking because `Card.Header` and `Card.Footer` are properties assigned directly to a function, not independent imports. Some optimisers might struggle to identify these as unused, particularly if they are part of the same file or are bundled together without clear module boundaries.

### The Object.assign Pattern
Another method is using `Object.assign`:

```jsx
export default Object.assign(Card, {
  Header,
  Body,
  Footer,
});
```

**Downsides:**

- **Same Serialization Issue:** This method also doesn’t work well with RSC.
- **Same tree shaking Issue:** It still pulls in all parts when you might only need one.

This example can still have similar tree-shaking issues as the first one.

Tree shaking works best when the code is structured in a way that allows the optimiser to statically analyse which parts of the code are unused. When we use `Object.assign`, we're dynamically attaching properties (`Header`, `Body`, and `Footer`) to the `Card` function. This makes it harder for many tree-shaking algorithms to determine that `Header` and `Footer` are unused because:

1. **Dynamic Property Assignment**: `Object.assign` dynamically assigns properties to `Card`. Most tree-shaking tools rely on static analysis, and they might not "see through" the dynamic nature of this assignment.
2. **Module Boundaries**: Tree shaking works more effectively when each function or component is imported separately. By bundling these components together using `Object.assign`, you're reducing the optimiser's ability to detect unused parts.

## Modern Solution to Namespaced Components

### Introduction to the Modern Approach

I found this pattern in the [Chakra UI v3 source](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/card) code. The solution is both smart and modern. It addresses serialisation and code-splitting problems associated with the dot notation pattern and utilises ESM modules.

### Implementing the Solution
Here’s the step-by-step breakdown:

1. **Named Exports for Each Part:**

```jsx
// card.tsx
export function CardRoot() {}
export function CardHeader() {}
export function CardBody() {}
export function CardFooter() {}
```
Using named exports for each component (`CardRoot`, `CardHeader`, `CardBody`, `CardFooter`) enables tree-shaking at the module level. Each component is now its own export, making it easier for the bundler to detect and eliminate unused components.

2. **Create a Namespace Module:**

```jsx
// namespaces.ts
export {
    CardBody as Body,
    CardRoot as Root,
    CardFooter as Footer,
    CardHeader as Header,
} from "./card";
```

This step allows you to create a "namespace" while still leveraging the named exports. By re-exporting the components with aliases (e.g., `CardRoot` as `Root`), you maintain the desired naming convention in your API without sacrificing tree-shaking capabilities.

3. **Collect and Expose the Parts:**

```jsx
// index.tsx
export * as Card from "./namespace";
```

This line gathers all the named exports under a `Card` namespace, which you can then import and use as a single module:

```jsx
import { Card } from './src/ui/card';

export function App() {
  return (
    <Card.Root>
      <Card.Header></Card.Header>
      <Card.Body></Card.Body>
      <Card.Footer></Card.Footer>
    </Card.Root>
  );
}
```

**Advantages of the Modern Approach:**

- **No Runtime Evaluations:** Everything is static, making it easy to analyse.
- **Better Serialisation:** Works well with RSC.
- **Improved Tree Shaking:** Only the parts you import get included in the bundle.

### Why This Helps with Tree Shaking

1. **Static Analysis**: The use of named exports allows bundlers like Webpack, Rollup, or tools like SWC to perform static analysis more effectively. The bundler can now see exactly which parts of the `Card` module are being used.
2. **Module Isolation**: Since each component (`Root`, `Body`, `Header`, `Footer`) is exported separately, the optimiser can eliminate unused components more easily, even when they are imported through a namespace.
3. **Avoiding Dynamic Properties**: By avoiding the use of `Object.assign` or similar dynamic property assignment methods, you ensure that the properties of `Card` are statically analysable, which is crucial for effective tree shaking.

## A Trade-off for Better Optimisation

When it comes to the `Root` component, the new syntax might initially feel like a step down:

```jsx
// Previous Syntax
<Card>
  <Card.Header>Header</Card.Header>
  <Card.Body>Body</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>

// New Syntax
<Card.Root>
  <Card.Header>Header</Card.Header>
  <Card.Body>Body</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card.Root>
```

While the new approach may seem less elegant, it offers significant advantages. By avoiding the use of `Object.assign`, function assignments, and runtime evaluations, this method ensures that all components are statically analysable and fully tree-shakeable. The result is more efficient code that is easier for bundlers to optimise, leading to smaller and faster-loading bundles.

## Libraries Using Old vs. New Patterns

Here’s a brief overview of some popular libraries that exemplify these approaches:

**Old Pattern:**

1. Headless UI: [https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/components/dialog/dialog.tsx#L588](https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/components/dialog/dialog.tsx#L588)
2. Ant Design: [https://github.com/ant-design/ant-design/blob/master/components/menu/index.tsx#L62](https://github.com/ant-design/ant-design/blob/master/components/menu/index.tsx#L62)
3. Mantine: [https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/components/Modal/Modal.tsx#L105](https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/components/Modal/Modal.tsx#L105)
4. React-Bootstrap: [https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Modal.tsx#L512](https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Modal.tsx#L512)
5. Evergreen: [https://github.com/segmentio/evergreen/blob/master/src/menu/src/Menu.js#L109](https://github.com/segmentio/evergreen/blob/master/src/menu/src/Menu.js#L109)

**New Pattern:**

1. Chakra UI v3: [https://github.com/chakra-ui/chakrui/tree/main/packages/react/src/components/dialog](https://github.com/chakra-ui/chakra-ui/tree/main/packages/react/src/components/dialog)
2. Radix UI: [https://github.com/radix-ui/primitives/tree/main/packages/react/dialog/src](https://github.com/radix-ui/primitives/tree/main/packages/react/dialog/src)

## Conclusion

Switching to this modern approach for namespaced components makes your React code more efficient and maintainable. By avoiding old patterns' issues, you can take full advantage of React’s capabilities, especially with server components and tree shaking. Try this method in your projects to see the benefits firsthand.

<h2 id="update-insights-on-bundler-limitations-with-dot-notation">Update: Insights on Bundler Limitations with Dot Notation</h2>
After further investigation and prototyping with the help of my colleague [@BulicJakov](https://x.com/bulicjakov), it turns out that bundlers aren't as smart as I initially thought. Unfortunately, it seems that Webpack, as used in Next.js, cannot tree-shake components when using dot notation (namespace) syntax. This is quite disappointing, given my expectations for more efficient bundling.

![page](/assets/blog/multipart-namespace-components-addressing-rsc-and-dot-notation-issues/page.png)

![bundle](/assets/blog/multipart-namespace-components-addressing-rsc-and-dot-notation-issues/bundle.png)

This limitation is a significant downside of using dot-notation. If you aim to import just a single part of a component, I highly recommend directly importing `CardBody` instead. This approach is one reason why libraries like Chakra UI v3 offer individual exports for each component part. In most practical scenarios, you'll likely end up using around 80% of the parts of a component, so this limitation might not be as problematic as it seems at first.

```jsx
import {
  CardRoot,
  CardBody,
} from "@/components/ui/card";

export function App() {
  return (
    <CardRoot>
      <CardBody>BODY</CardBody>
    </CardRoot>
  );
}
```

**However, it still raises an important question:** why can't bundlers fully support tree-shaking with dot-notation, especially since it's based on ES Modules (ESM)? I was really hoping that modern bundlers would be smart enough to optimize this. But, it seems we're not quite there yet, despite the popularity of dot-notation.