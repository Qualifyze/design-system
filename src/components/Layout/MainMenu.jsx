import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

export function MainMenu({ children }) {
  return (
    <Box as="ul" sx={{ color: 'white' }}>
      {children}
    </Box>
  )
}

MainMenu.propTypes = {
  children: PropTypes.node,
}

MainMenu.defaultProps = {
  children: null,
}
