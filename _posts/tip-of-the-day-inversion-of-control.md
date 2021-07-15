---
title: 'TIP of the Day: inversion of control!'
excerpt: 'You can use inversion of control here instead of useMemo to transform data'
coverImage: '/assets/blog/dynamic-routing/links.jpeg'
date: '2021-07-15T05:58:07.322Z'
author:
  name: Ivica Batinić
  picture: '/assets/blog/authors/isbatak.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/links.jpeg'
---

# TIP of the Day: inversion of control! ✨

## Problem ⚡️

```tsx
const countryOptions = useMemo(() => {
  return countries.map((country) => {
    return {
      label: country.name,
      value: country.country_id.toString(),
    };
  });
});

return <ReactSelect options={countryOptions} />
```

## Solution ✅

You can use [inversion of control](https://kentcdodds.com/blog/inversion-of-control) instead of this useMemo.

ReactSelect has that feature built in.

You can pass raw data and provide methods that will select value and label from that data array. This pattern is called inversion of control, and it's not React specific pattern, that's why Kent C Dodds explains it in a plain JS.

```tsx
<ReactSelect
  options={countries}
  getValue={(country) => country.country_id.toString()}
  getLabel={(country) => country.name}
/>
```

It could be roughly translated to this:
```tsx
{countries.map((country) => {
  const value = getValue(country);
  const label = getLabel(country);
  return <Item value={value} label={label} />;
})}
```

## Reasons 🌈

This is more optimal because you don't have a double map, one in the your component and the other one in ReactSelect source code.
- `useMemo` is not for data transformation.
- `useMemo` is for expensive calculations like grouping and aggregating data, if you need to generate data based on some input, like Fibonacci Sequence.
