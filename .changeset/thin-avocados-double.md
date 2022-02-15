---
'@qualifyze/design-system': patch
---

Fix CSS stacking context for several layout components

The following components were "leaking" (layout-wise speaking) into adjacent components. We use negative margins for all of them, which resulted in adjacent interactive components (e.g., buttons) not being clickable because these components were overlapping with the buttons. This release fixes that by making sure all layout components use `position: static` to avoid creating a new CSS stacking context for them.

The affected components are: `Stack`, `Inline`, `Column(s)`, and `Tiles`.
