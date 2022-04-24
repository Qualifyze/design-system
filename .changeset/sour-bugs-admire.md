---
'@qualifyze/design-system': major
---

New `Tooltip` implementation using Radix UI.

Example usage before:

```jsx
<Box sx={{ p: 3, m: 4 }}>
  <Tooltip dataTooltip="I'm a tooltip!" indicator="chevronUp" variant="default">
    Hover over me to see tooltip
  </Tooltip>
</Box>
```

Example usage after:

```jsx
<Box sx={{ p: 3, m: 4 }}>
  <Tooltip>
    <Tooltip.Trigger asChild>
      <Text>Hover over me to see tooltip</Text>
    </Tooltip.Trigger>
    <Tooltip.Content sideOffset={5}>
      I'm a tooltip!
      <Tooltip.Arrow offset={10} />
    </Tooltip.Content>
  </Tooltip>
</Box>
```
