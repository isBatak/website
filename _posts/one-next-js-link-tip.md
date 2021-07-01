---
title: 'One Next.js Link tip ✨'
excerpt: 'You should never colocate Next.js Link inside actionable components, instead you should wrap it in the parent component.'
coverImage: '/assets/blog/dynamic-routing/links.jpeg'
date: '2021-04-26T05:35:07.322Z'
author:
  name: Ivica Batinić
  picture: '/assets/blog/authors/isbatak.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/links.jpeg'
---

# One Next.js Link tip ✨

You should never colocate Next.js Link inside actionable components, instead you should wrap it in the parent component.

## So, instead of this ⚡️

```tsx
const SomeSpecificFeatureButton = ({feature}) => {
  return (
    <NextLink href="" passHref>
      <Button as="a">
        <Flex>
          <Image src={feature.src} />
          <Text>{feature.name}</Text>
        </Flex>
      </Button>
    </NextLink>
  );
};
```

## It should look like this ✅

```jsx
import NextLink from 'next/link';

<NextLink href="/example-link" passHref>
  <SomeSpecificFeatureButton as="a" feature={feature} />
</NextLink>
```

## Reasons 🌈

- Next.js Link is utility component which doesn't render any HTMl element, instead it just clones the children and prepends some additional props (ref, onClick, href)
- If you colocate Next.js Link inside `SomeSpecificFeatureButton` you are mixing two concerns (presentational and behavioral) and you can't opt-out form behavioral one if you need to reuse this component in some different context, for example attach `onClick` handler to `SomeSpecificFeatureButton` and open a delete action modal.
