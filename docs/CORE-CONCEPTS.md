# Core Concepts

This document aims to discuss some of the core concepts of building with the qualifyze design system.

> Note: Some parts of this documentation have been directly adapted from the [GitHub Primer Docs](https://primer.style/components).

## Responsive props

It's really easy to set different values for most of our component props based on screen size! We take advantage of [styled-system](https://github.com/styled-system/styled-system)'s responsive props API in our components.

```jsx
<Button display={['flex', 'flex', 'none']}/>

or

<Text fontSize={[1,1,1,4]}/>
```

## Breakpoints

We have several globally-defined breakpoints: `['576px', '768px', '992px', '1200px']`. These are included in [both themes](./THEMES.md) we use and can be used as described above. In addition to those global breakpoints, you might want to use more breakpoints for especially complex components. In that case, you can wrap the component with another `ThemeProvider` and extend or override the `breakpoints` property in the theme:

```jsx
const ComplexComponent = () => {
  // Component-specific breakpoints to override the global ones from theme.*.js
  const breakpoints = ['38em', '56em', '69em', '72em', '79em']
  const localTheme = (theme) => ({
    ...theme,
    breakpoints,
    disableStyledSystemCache: true,
  })

  return <ThemeProvider theme={localTheme}>[...]</ThemeProvider>
}
```

> Note: If you do this, you _have_ to add `disableStyledSystemCache` to the provided theme. Otherwise, the breakpoints will be cached and might break in some edge cases.

### Breakpoint aliases

To simplify communication between design and development, we defined aliases for our breakpoints:

| Alias            | Value    |
| ---------------- | -------- |
| `breakpoints.sm` | `576px`  |
| `breakpoints.md` | `768px`  |
| `breakpoints.lg` | `992px`  |
| `breakpoints.xl` | `1200px` |

You can use them within `styled-components` like this:

```jsx
const Example = styled.div`
  background: papayawhip;

  @media (min-width: ${themeGet('breakpoints.md')}) {
    background: pink;
  }
`
```

If you want to use the style props from `styled-system` on components like `Flex` or `Box` you can do this:

```jsx
const Example = () => <Flex bg={{ _: 'papayawhip', md: 'pink' }}>...</Flex>
```

## Types of components

We categorize our components into 3 general types. Building block components, pattern components, and helper components. Understanding how these types of components interact with each other can help you better understand how to get the most out of our design system.

- **Building Blocks**

  Building block components are components that are basic in their functions and can be used together with other components to build just about any UI. Some examples of building block components are `Button` or `Icon`.

- **Pattern Components**

  Pattern components are components that are made up of several building block components to represent a commonly used pattern in our UI. One example of pattern components are `Hero` and the FAQ `NavBar`. We plan on expanding our offering of pattern components in the near future.

- **Helper Components**

  Helper components are components that help the user achieve common CSS patterns while maintaining some control over values used. Some examples of helper components are `Flex`, `Box` and `Text`.
