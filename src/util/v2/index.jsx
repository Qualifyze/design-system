import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider, theme } from '../style'

const borderRadius = {
  borderRadius0: '0',
  borderRadius2: '2px',
  borderRadius4: '4px',
  borderRadius8: '8px',
  borderRadius16: '16px',
  borderRadiusRound: '50%',
  borderRadiusPill: '9999px',
}

const colors = {
  white: 'hsl(0, 0%, 100%)',
  slate: {
    1: 'hsl(206 30.0% 98.8%)',
    2: 'hsl(210 16.7% 97.6%)',
    3: 'hsl(209 13.3% 95.3%)',
    4: 'hsl(209 12.2% 93.2%)',
    5: 'hsl(208 11.7% 91.1%)',
    6: 'hsl(208 11.3% 88.9%)',
    7: 'hsl(207 11.1% 85.9%)',
    8: 'hsl(205 10.7% 78.0%)',
    9: 'hsl(206 6.0% 56.1%)',
    10: 'hsl(206 5.8% 52.3%)',
    11: 'hsl(206 6.0% 43.5%)',
    12: 'hsl(206 24.0% 9.0%)',
  },
  brand: {
    1: 'hsl(225 60.0% 99.4%)',
    2: 'hsl(223 100% 98.6%)',
    3: 'hsl(223 98.4% 97.1%)',
    4: 'hsl(223 92.9% 95.0%)',
    5: 'hsl(224 87.1% 92.0%)',
    6: 'hsl(224 81.9% 87.8%)',
    7: 'hsl(225 77.4% 82.1%)',
    8: 'hsl(226 75.4% 74.5%)',
    9: 'hsl(226 70.0% 55.5%)',
    10: 'hsl(226 58.6% 51.3%)',
    11: 'hsl(226 55.0% 45.0%)',
    12: 'hsl(226 62.0% 17.0%)',
  },
}

const v2 = {
  ...theme,
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96],
  fontSizes: [12, 14, 16, 20, 28, 36, 48],
  radii: [0, 2, 4, 8, 16, '50%', 9999],
  colors: {
    ...theme.colors,
    ...colors,
    primary: {
      100: colors.brand['4'],
      200: colors.brand['5'],
      300: colors.brand['6'],
      400: colors.brand['7'],
      500: colors.brand['8'],
      600: colors.brand['9'],
      700: colors.brand['10'],
      800: colors.brand['11'],
      900: colors.brand['12'],
    },
    grey: {
      100: colors.slate['4'],
      200: colors.slate['5'],
      300: colors.slate['6'],
      400: colors.slate['7'],
      500: colors.slate['8'],
      600: colors.slate['9'],
      700: colors.slate['10'],
      800: colors.slate['11'],
      900: colors.slate['12'],
    },
  },
}

export function V2ThemeProvider({ children }) {
  return <ThemeProvider theme={v2}>{children}</ThemeProvider>
}

V2ThemeProvider.propTypes = {
  children: PropTypes.node,
}

V2ThemeProvider.defaultProps = {
  children: null,
}
