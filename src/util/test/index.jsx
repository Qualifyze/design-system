/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

import { ThemeProvider, theme } from '../style'

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

const customRender = (ui, options) =>
  render(ui, { wrapper: ThemeWrapper, ...options })

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render, user }
