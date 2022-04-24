---
'@qualifyze/design-system': major
---

Drop IE11 support in layout components in favor of using flexbox's `gap` property. The affected layout components are:

- `Stack`
- `Inline`
- `Tiles`
- `Columns`

These will probably just not have any whitespace between their child components in IE11.
