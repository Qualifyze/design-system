import React from 'react'

import 'typeface-source-sans-pro'
import { styled } from './index'

/**
 * We need to apply the correct font to each story source, but *only* the source.
 * We need this so we don't affect the font settings of Storybook itself.
 */
const FontWrapper = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`

/**
 * A decorator for Storybook to make sure we apply global styles to our stories.
 */
const withFont = storyFn => <FontWrapper>{storyFn()}</FontWrapper>

export default withFont
