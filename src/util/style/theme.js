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
    100: 'hsl(221, 100%, 97%)',
    200: 'hsl(223, 59%, 86%)',
    300: 'hsl(223, 44%, 71%)',
    400: 'hsl(223, 40%, 60%)',
    500: 'hsl(223, 36%, 50%)',
    600: 'hsl(223, 47%, 39%)',
    700: 'hsl(223, 60%, 29%)',
    800: 'hsl(223, 70%, 21%)',
    900: 'hsl(223, 79%, 13%)',
  },
  secondary: {
    100: 'hsl(191, 52%, 94%)',
    200: 'hsl(192, 39%, 77%)',
    300: 'hsl(192, 34%, 62%)',
    400: 'hsl(192, 33%, 48%)',
    500: 'hsl(192, 45%, 36%)',
    600: 'hsl(192, 50%, 30%)',
    700: 'hsl(192, 56%, 24%)',
    800: 'hsl(192, 63%, 19%)',
    900: 'hsl(192, 69%, 14%)',
  },
  grey: {
    100: 'hsl(210, 17%, 98%)',
    200: 'hsl(207, 22%, 90%)',
    300: 'hsl(210, 24%, 87%)',
    400: 'hsl(208, 17%, 83%)',
    500: 'hsl(209, 24%, 74%)',
    600: 'hsl(215, 17%, 63%)',
    700: 'hsl(214, 11%, 49%)',
    800: 'hsl(215, 17%, 30%)',
    900: 'hsl(215, 23%, 16%)',
  },
  red: {
    100: 'hsl(360, 77%, 95%)',
    200: 'hsl(360, 79%, 81%)',
    300: 'hsl(360, 71%, 73%)',
    400: 'hsl(360, 70%, 64%)',
    500: 'hsl(360, 71%, 53%)',
    600: 'hsl(360, 65%, 45%)',
    700: 'hsl(360, 61%, 38%)',
    800: 'hsl(360, 63%, 31%)',
    900: 'hsl(360, 60%, 24%)',
  },
  yellow: {
    100: 'hsl(44, 100%, 98%)',
    200: 'hsl(44, 90%, 92%)',
    300: 'hsl(45, 86%, 86%)',
    400: 'hsl(44, 90%, 80%)',
    500: 'hsl(43, 87%, 67%)',
    600: 'hsl(44, 57%, 52%)',
    700: 'hsl(43, 59%, 42%)',
    800: 'hsl(43, 64%, 34%)',
    900: 'hsl(44, 66%, 22%)',
  },
  green: {
    100: 'hsl(142, 81%, 94%)',
    200: 'hsl(141, 67%, 80%)',
    300: 'hsl(145, 65%, 68%)',
    400: 'hsl(146, 57%, 65%)',
    500: 'hsl(145, 55%, 49%)',
    600: 'hsl(145, 55%, 41%)',
    700: 'hsl(145, 59%, 33%)',
    800: 'hsl(155, 63%, 26%)',
    900: 'hsl(156, 61%, 20%)',
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
