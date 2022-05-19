import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'
import Inline from '../Inline'

import { useAppBarContext } from './context'

export default function NavActions({ children }) {
  const { collapsed } = useAppBarContext()

  return (
    <Box
      sx={{
        whiteSpace: 'nowrap',
        pl: collapsed ? 3 : 2,
        my: collapsed ? 2 : 0,
      }}
    >
      <Inline alignY="center" space={2}>
        {children}
      </Inline>
    </Box>
  )
}

NavActions.propTypes = {
  children: PropTypes.node,
}

NavActions.defaultProps = {
  children: null,
}
