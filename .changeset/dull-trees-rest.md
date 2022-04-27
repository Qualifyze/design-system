---
'@qualifyze/design-system': patch
---

Modal should allow for more flexible markup

We noticed that having a `form` in a modal breaks the parent-child
relationship needed to make the flexbox layout work. This patch should(tm)
fix the false assumption that `Modal.Body` is always a direct descendant
of `Modal`.
