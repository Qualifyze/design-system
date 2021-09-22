# Design System v2

The v2 of our design system splits our **design tokens** from the **React components**, which is why we have two packages in this repo.

## Tokens

### Open questions

- [ ] Should tokens be arranged on a scale like `XS, S, M, L, XL` (or `1, 2, 3, 4`) or named by their values (`4, 8, 16, 24`)? Former might be nice to use, but latter is easier to extend in the future.
- [ ] How do we achieve consistent naming for all tokens? E.g., `spacing` vs `space`, `space4` etc.
- [x] Should tokens be nested beyond one level? e.g., `tokens.space32` vs. `tokens.space.32` vs. `tokens.layout.space.32`

### Guidelines

1. Do not nest tokens. They should all be at the top level:

```jsx
import tokens from '@qualifyze/design-tokens'

// tokens.space32 refers to 32px
// tokens.fontSize14 refers to 14px
// tokens.fontStackPrimary refers to Source Sans Pro etc....
// tokens.colorBrand12 refers to a specific branc color
```

### Token groups

- `color`
- `border-radius`
- `box-shadow`
- `space`/`spacing`
- `font-stack`
- `font-weight`
- `font-size`
- `letter-spacing`
- `line-height`

Separating the design tokens from the React implementation means we can use them independently from the components.

The API we're chasing with this might look something like this:

```jsx
import tokens from '@qualifyze/design-tokens'

// Plain React
<div
  style={
    marginBottom: tokens.space32,
    fontSize: tokens.fontSize16,
  }
/>

// Using emotion
<div
  className={css({
    marginBottom: tokens.space32,
    fontSize: tokens.fontSize16,
  })}
/>

// Using our own React components and Stitches
<Box
  css={{ mb: $32, fs: $16 }}
/>
```

## React components
