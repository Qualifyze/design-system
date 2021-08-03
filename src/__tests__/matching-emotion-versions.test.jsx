import React from 'react'

import { render, screen } from '../util/test'
import { styled, shouldForwardProp } from '../util/style'

const RandomStyledComponent = styled('div', { shouldForwardProp })(props => {
  // console.log('props', props)
  return {
    color: props.theme.colors.primary[700],
  }
})

/**
 * We need to ensure we install matching versions of Emotion (`@emotion/styled`
 * and `@emotion/core`) because if we don't we'd break our styling entirely.
 *
 * One symptom of that is: ThemeProvider provides the `theme` via context but
 * the `theme` prop that the exported `styled` function access is undefined.
 *
 * You can easily validate that by having a component like
 * `RandomStyledComponent` and making sure that `props.theme` matches what we
 * export from `util/style/theme`
 */
test('Ensure matching versions of Emotion', () => {
  render(<RandomStyledComponent>hola</RandomStyledComponent>)
  const Component = screen.getByText(/hola/)
  expect(Component).toMatchSnapshot()
  expect(Component).toHaveStyle({ color: 'hsl(223, 60%, 29%)' }) // Our primary.700 color
})
