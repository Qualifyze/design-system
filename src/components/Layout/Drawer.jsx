import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'
import Logo from '../Logo'

export function Drawer({ children }) {
  return (
    <Box
      as="nav"
      sx={{
        bg: 'secondary.800',
        width: 200,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ py: 3, px: 4 }}>
        <Logo light width="100%" height="auto" />
      </Box>
      {children}
    </Box>
  )
}

Drawer.propTypes = {
  children: PropTypes.node,
}

Drawer.defaultProps = {
  children: null,
}
