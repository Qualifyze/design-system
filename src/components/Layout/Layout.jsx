import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

export function Layout({ children }) {
  return <Box sx={{ display: 'flex', height: '100vh' }}>{children}</Box>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
