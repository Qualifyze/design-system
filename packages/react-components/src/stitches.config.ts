// @ts-nocheck
// FIXME: Not sure what's happening here, but `const { styled } = createStitches(...)` is throwing a TS error...
import { createStitches } from '@stitches/react';
import {
  brand,
  gray,
  red,
  green,
  yellow,
  sky,
  fontStack,
  fontSizes,
  fontWeights,
  borderRadius,
  sizes,
  space,
} from '@qualifyze/design-tokens-v2';

export const {
  styled,
  css,
  theme,
  getCssText,
  globalCss,
  keyframes,
  config,
} = createStitches({
  theme: {
    colors: {
      ...brand,
      ...gray,
      ...red,
      ...green,
      ...yellow,
      ...sky,
    },
    space: {
      ...space,
    },
    fontSizes: {
      ...fontSizes,
    },
    fonts: {
      ...fontStack,
    },
    fontWeights: {
      ...fontWeights,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: { ...sizes },
    borderWidths: {},
    borderStyles: {},
    radii: {
      ...borderRadius,
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
  },
});
