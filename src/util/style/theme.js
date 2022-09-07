/* eslint-disable prefer-destructuring */
/**
 * This is our custom theme where we define global styles taken from our corporate identitfy.
 * It should serve as a guideline for styling, but not all styles *have* to be taken from here.
 */
const breakpoints = ['576px', '768px', '992px']

// Aliases
breakpoints.small = breakpoints[0]
breakpoints.medium = breakpoints[1]
breakpoints.large = breakpoints[2]

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Secondary: Colors to use for informational items, such as labels, text, etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  pageBackground: 'hsl(228, 33%, 97%)',
  white: 'hsl(0, 0%, 100%)',
  background: {
    0: 'hsl(0, 0%, 100%)',
    100: 'hsl(228, 33%, 97%)',
  },
  primary: {
    100: 'hsl(240, 100%, 95%)',
    200: 'hsl(240, 100%, 90%)',
    300: 'hsl(240, 90%, 74%)',
    400: 'hsl(240, 65%, 64%)',
    500: 'hsl(240, 50%, 54%)',
    600: 'hsl(240, 45%, 44%)',
    700: 'hsl(240, 45%, 34%)',
    800: 'hsl(240, 40%, 24%)',
    900: 'hsl(240, 35%, 14%)',
  },
  secondary: {
    100: 'hsl(300, 100%, 94%)',
    200: 'hsl(300, 100%, 87%)',
    300: 'hsl(305, 84%, 76%)',
    400: 'hsl(305, 84%, 63%)',
    500: 'hsl(305, 84%, 53%)',
    600: 'hsl(305, 84%, 43%)',
    700: 'hsl(305, 83%, 33%)',
    800: 'hsl(305, 85%, 23%)',
    900: 'hsl(305, 83%, 14%)',
  },
  grey: {
    50: 'hsl(220, 20%, 97%)',
    100: 'hsl(210, 15%, 95%)',
    200: 'hsl(219, 14%, 89%)',
    300: 'hsl(220, 14%, 80%)',
    400: 'hsl(217, 15%, 70%)',
    500: 'hsl(218, 14%, 50%)',
    600: 'hsl(217, 17%, 40%)',
    700: 'hsl(216, 16%, 30%)',
    800: 'hsl(216, 16%, 20%)',
    900: 'hsl(222, 14%, 9%)',
  },
  red: {
    100: 'hsl(0, 87%, 94%)',
    200: 'hsl(0, 90%, 86%)',
    300: 'hsl(0, 96%, 76%)',
    400: 'hsl(0, 89%, 62%)',
    500: 'hsl(0, 89%, 48%)',
    600: 'hsl(0, 89%, 42%)',
    700: 'hsl(0, 89%, 32%)',
    800: 'hsl(0, 89%, 22%)',
    900: 'hsl(0, 89%, 14%)',
  },
  yellow: {
    100: 'hsl(40, 100%, 88%)',
    200: 'hsl(40, 100%, 76%)',
    300: 'hsl(40, 100%, 70%)',
    400: 'hsl(40, 100%, 62%)',
    500: 'hsl(40, 100%, 52%)',
    600: 'hsl(40, 100%, 42%)',
    700: 'hsl(40, 100%, 28%)',
    800: 'hsl(40, 100%, 24%)',
    900: 'hsl(40, 100%, 14%)',
  },
  green: {
    100: 'hsl(118, 51%, 92%)',
    200: 'hsl(108, 71%, 87%)',
    300: 'hsl(136, 70%, 67%)',
    400: 'hsl(135, 64%, 57%)',
    500: 'hsl(136, 54%, 47%)',
    600: 'hsl(136, 65%, 32%)',
    700: 'hsl(136, 75%, 23%)',
    800: 'hsl(136, 75%, 17%)',
    900: 'hsl(136, 75%, 14%)',
  },
}

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

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
]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  semibold: 600,
  bold: 700,
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = [0, 2, 4, 8, 16]

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
]
shadows.focusRing = '0 0 0 4px #2491eb'

const sizes = {
  narrow: '500px',
  medium: '700px',
  wide: '1100px',
  page: '1400px',
}

// eslint-disable-next-line import/prefer-default-export
export const theme = {
  name: 'Qualifyze',
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  shadows,
  sizes,
}
