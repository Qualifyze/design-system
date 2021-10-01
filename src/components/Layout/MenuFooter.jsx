import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

import { MenuDivider } from './MenuDivider'

export function MenuFooter({ children }) {
  return (
    <Box
      as="nav"
      sx={{
        mt: 'auto',
        mb: 2,
        color: 'grey.500',
      }}
    >
      <MenuDivider />
      <Box as="ul">{children}</Box>
    </Box>
  )
}

MenuFooter.propTypes = {
  children: PropTypes.node,
}

MenuFooter.defaultProps = {
  children: null,
}
