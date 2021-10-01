import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'
import Icon from '../Icon'
import Logo from '../Logo'

import { DrawerContext, useDrawerContext } from './Context'
import { SmallLogo } from './SmallLogo'

export function Drawer({ collapsed, children }) {
  return (
    <DrawerContext initialCollapsed={collapsed}>
      <DrawerInner>{children}</DrawerInner>
    </DrawerContext>
  )
}

function DrawerInner({ children }) {
  const { collapsed, toggleCollapsed } = useDrawerContext()
  const LogoComp = collapsed ? SmallLogo : Logo

  return (
    <Box
      as="nav"
      sx={{
        bg: 'secondary.800',
        width: collapsed ? 50 : 200,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ py: collapsed ? 2 : 3, px: collapsed ? 2 : 4 }}>
        <LogoComp light width="100%" height="auto" />
      </Box>
      {children}
      <Box
        role="button"
        title="collapse menu"
        onClick={toggleCollapsed}
        sx={{
          'position': 'absolute',
          'right': 1,
          'top': '50%',
          'transform': 'translateY(-50%)',
          'cursor': 'pointer',
          'color': 'secondary.300',
          ':hover': {
            color: 'secondary.100',
          },
        }}
      >
        <Icon
          name={collapsed ? 'chevronright' : 'chevronleft'}
          sx={{ color: 'inherit' }}
        />
      </Box>
    </Box>
  )
}

DrawerInner.propTypes = {
  children: PropTypes.node.isRequired,
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  collapsed: PropTypes.bool,
}

Drawer.defaultProps = {
  collapsed: false,
}
