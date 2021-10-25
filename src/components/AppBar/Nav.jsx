import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

import { useAppBarContext } from './context'

export default function Nav({ align, padRight, children }) {
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
        pr: !collapsed && padRight ? 3 : 0,
        width: collapsed ? '100%' : 'auto',
      }}
    >
      {children}
    </Box>
  )
}

Nav.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  padRight: PropTypes.bool,
  children: PropTypes.node,
}

Nav.defaultProps = {
  align: 'left',
  padRight: false,
  children: null,
}
