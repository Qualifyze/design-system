import React from 'react'
import { Global } from '@emotion/core'

import { resetCSS } from './resetCSS'

/**
 * A decorator for Storybook to make sure we apply global styles to our stories.
 */
export const withCSSReset = storyFn => (
  <>
    <Global styles={resetCSS} />
    {storyFn()}
  </>
)
