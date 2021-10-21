import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

import { useAppBarContext } from './context'

export default function Nav({ align, children }) {
  const { collapsed } = useAppBarContext()

  return (
    <Box
      as="nav"
      sx={{
        display: collapsed ? 'initial' : 'flex',
        alignItems: 'center',
        flexDirection: 'inherit',
        ml: !collapsed && align === 'right' ? 'auto' : 0,
        my: collapsed ? 2 : 0,
        width: collapsed ? '100%' : 'auto',
      }}
    >
      {children}
    </Box>
  )
}

Nav.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
}

Nav.defaultProps = {
  align: 'left',
  children: null,
}
