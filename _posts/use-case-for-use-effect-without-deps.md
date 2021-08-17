---
title: 'A real use-case for useEffect without dependency array'
excerpt: 'You should never colocate Next.js Link inside actionable components, instead you should wrap it in the parent component.'
coverImage: '/assets/blog/no-deps-array.png'
date: '2021-08-17T18:28:55.468Z'
author:
  name: Ivica Batinić
  picture: '/assets/blog/authors/isbatak.jpg'
ogImage:
  url: '/assets/blog/no-deps-array.png'
---

I finally Found a real use-case for useEffect without deps array.  
With this approach you don’t have to wrap callback function in `useCallback`.  
And you don’t have to violate rules of hooks by excluding callback dependency in the second `useEffect`.

To overcome this limitation developers usually do this:

```jsx
export default function useInterval(callback, delay) {
  useEffect(() => {
    if (!delay) {
      return () => {};
    }

    const interval = setInterval(() => {
      callback();
    }, delay);
    return () => clearInterval(interval);
  
  // Ignore the rule of hook by excluding callback dependency
  }, [delay]);
}
```

But this is problematic because now callback is inside the closure of useEffect and will never be updated during the lifecycle.

So something like this will never work:

```jsx
useInterval(() => {
  if (isAlmostDone) {
    console.warn('Almost done!');
  } else {
    console.warn('So close!');
  }
}, 1000);
```

If `isAlmostDone` state is flipped it will never be detected by the `useInterval`.

<iframe src="https://codesandbox.io/embed/react-hooks-interfal-closure-kzobd?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-hooks-interfal-closure"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Assigning `ref` synchronously might be a good solution for now, but it will cause some hard to detect bugs in Concurrent mode.

```jsx
export default function useInterval(callback, delay) {
  const callbacRef = useRef();

  // In concurrent mode React may decide to stop executing this block of code and continue it later on (high/low priority).
  // Because of this you might end up with a wrong reference.
  callbacRef.current = callback;

  useEffect(() => {
    if (!delay) {
      return () => {};
    }

    const interval = setInterval(() => {
      callbacRef.current && callbacRef.current();
    }, delay);
    return () => clearInterval(interval);
  
  }, [delay]);
}
```

So the safest solution is to wrap `ref` assignment in the useEffect.
Callback ref will be assigned on every render, but only at the end of [mount/update cycle](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png), and React will assure that `useEffect`s are executed in the correct order.

```jsx
function useInterval(callback, delay) {
  const callbacRef = useRef();

  useEffect(() => {
    callbacRef.current = callback;
  });

  useEffect(() => {
    if (!delay) {
      return () => {};
    }

    const interval = setInterval(() => {
      callbacRef.current && callbacRef.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
}
```