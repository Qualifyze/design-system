import styled from '@emotion/styled'
import React from 'react'

/**
 * We need to apply the correct font to each story source, but *only* the source.
 * We need this so we don't affect the font settings of Storybook itself.
 */
const FontWrapper = styled.div`
  font-family: Everett, Roboto, 'Helvetica Neue', Arial, sans-serif;
`

/**
 * A decorator for Storybook to make sure we apply global styles to our stories.
 */
export const withFont = storyFn => <FontWrapper>{storyFn()}</FontWrapper>
