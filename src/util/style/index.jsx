import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import {
  compose,
  variant,
  space,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  typography,
  grid,
  shadow,
} from 'styled-system'
import css from '@styled-system/css'
import { ThemeProvider } from 'emotion-theming'
import propTypes, { propType } from '@styled-system/prop-types'
import shouldForwardProp, {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop'

import { theme } from './theme'
import resetCSS from './resetCSS'

const withTheme = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

// eslint-disable-next-line no-shadow
const sx = props => css(props.sx)(props.theme)

export {
  styled,
  ThemeProvider,
  theme,
  withTheme,
  css,
  sx,
  Global,
  resetCSS,
  propTypes,
  propType,
  compose,
  variant,
  space,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  typography,
  grid,
  shadow,
  shouldForwardProp,
  createShouldForwardProp,
  props,
}
