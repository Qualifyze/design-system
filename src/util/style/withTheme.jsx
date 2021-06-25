import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { theme } from './theme'

export const withTheme = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
