import { Theme, ThemeProvider, ThemeUICSSObject } from '@theme-ui/core';

/**
 * BREAKPOINTS
 *
 * These values are taken directly from Tailwind CSS.
 * See: https://tailwindcss.com/docs/breakpoints
 */
const breakpoints = [`640px`, `768px`, `1024px`, `1280px`, `1536px`];

/**
 * SPACING
 *
 * Status: 🚧 under construction
 *
 * Space is used for margins, paddings and grid gaps.
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

/**
 * FONT FAMILY
 *
 * Status: ✅ finalized
 */
const fonts = {
  body: `"Source Sans Pro", system-ui, sans-serif`,
};

/**
 * FONT WEIGHTS
 *
 * Status: 🚧 under construction
 */
const fontWeights = {
  regular: 400,
  medium: 600,
  strong: 700,
};

/**
 * TODO: This is a default theme. We need to port our current colors to match
 * Theme UI's `colors` structure
 */
const colors = {
  positive: `#138a08`,
  caution: `#ffc600`,
  critical: `#d0011b`,
};

/**
 * Typographic scale
 */
const fontSizes = [
  12, // 0
  15, // 1
  18, // 2
  24, // 3
  28, // 4
  35, // 5
  44, // 6
  55, // 7
];

const lineHeights = [1, 1.125, 1.25, 1.5];

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
};

/**
 * Border-radius
 */
const radii = [0, 2, 4, 8, 16];

const shadows = [
  'none',
  '0 0 0 1px rgba(0, 0, 0, 0.05)',
  '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '0 0px 20px -3px rgba(0,0,0,1)',
];
// shadows.focusRing = '0 0 0 4px #2491eb'

const sizes = {
  narrow: '500px',
  medium: '700px',
  wide: '1100px',
  page: '1400px',
};

/**
 * GLOBAL STYLES
 */
const styles = {
  root: {
    fontFamily: "'Source Sans Pro', system-ui, sans-serif",
  },
};

const theme: Theme = {
  breakpoints,
  fonts,
  colors,
  space,
  fontSizes,
  radii,
  letterSpacings,
  fontWeights,
  lineHeights,
  sizes,
  shadows,
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary.600',
      '&:hover': {
        bg: 'primary.500',
      },
      borderRadius: `3px`,
    },
    primaryLarge: {
      p: 3,
      color: 'white',
      bg: 'primary.600',
      '&:hover': {
        bg: 'primary.500',
      },
      borderRadius: `6px`,
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
  styles,
};

export const variant = <K extends string>(
  variants: Record<K, ThemeUICSSObject>
) => variants;

export { ThemeProvider, theme };
