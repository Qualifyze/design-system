---
'@qualifyze/design-system': patch
---

Use grey instead of pink as the secondary color

Also removes the color `grey[50]` which was [accidentally
introduced](https://github.com/Qualifyze/design-system/pull/332/files#diff-bfec1adb785179eff20a9a075d532f32059c2a9de10caacf6e7e20f396423143R48)
one day earlier. We can be quite sure that nobody is using this color so
far, so no need for a major release.
