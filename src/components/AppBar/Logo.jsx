import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

import { useAppBarContext } from './context'

export default function AppBarLogo({ children }) {
  const { collapsed } = useAppBarContext()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pl: collapsed ? 3 : 4,
        py: collapsed ? 1 : 0,
        mr: collapsed ? 0 : 4,
      }}
    >
      {children}
    </Box>
  )
}

AppBarLogo.propTypes = {
  children: PropTypes.node,
}

AppBarLogo.defaultProps = {
  children: undefined,
}
