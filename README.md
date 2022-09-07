# Design System

A place to develop React components in a sandboxed environment.

## Docs

- [Core concepts](./docs/CORE-CONCEPTS.md)
- [System Props](./docs/SYSTEM-PROPS.md)
- [FAQ](./docs/FAQ.md)

## Getting Started

- Install [Volta](https://volta.sh/)
- Install all dependencies with `npm ci`
- Run Storybook with `npm start`, it will open automatically in your browser.

## Fonts

You need to include the new fonts from `@qualifyze/mui-theme`:

```
import "@qualifyze/mui-theme/fonts/everett/index.css"
import "@qualifyze/mui-theme/fonts/tobias/index.css"
```

## Dependencies

The design system has a dependency on globalThis so if you are using the design system you need to either install a npm package like [globalthis](https://www.npmjs.com/package/globalthis). Or if you have access to core-js in your project you can solve the dependency like this:

```js
import 'core-js/features/global-this'
```

In your app entry where you would normally apply other polyfills.

## Z-Indices

This project includes several components that have to work even when they are layered on top of each other. To not mess up the order in which they should appear on screen, let's collect all relevant values for `z-index` here.

| Component                    | `z-index` |
| ---------------------------- | --------- |
| Header (in `website`)        | 50        |
| Cookie Banner (in `website`) | 900       |
| Notification                 | ???       |
| Modal                        | 500       |

## Limitations and known issues

### Stack, Inline, Tiles and Columns components with large `space` prop values

Child components of `Stack`, `Inline`, `Tiles` and `Columns` might "leak" into other components if values above 4 are given to it in the `space` prop, blocking interaction with other UI elements like buttons or text.

Workaround is to wrap the component that "leaks" and the one "leaked into" in `Box` or `Flex` components and provide `z-index` for both.
For example, with a `Stack` component:

```jsx
import Box from '@qualifyze/design-system'

function App() {
  return (
    <Box>
      <Box sx={{ zIndex: 2 }}>
        <Button>You can't click Me!</Button>
      </Box>
      <Box sx={{ zIndex: 1 }}>
        <Stack space={5}>
          <Button>Just a regular button</Button>
        </Stack>
      </Box>
    </Box>
  )
}
```

For examples of how these components can leak, check their stories in storybook under "leaking example". So far, `Stack` is the only one who has actually given trouble and the only example taken from the platform.

Fixing this requires a major version release because we still need to support [Internet Explorer](https://death-to-ie11.com/).
