import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'
import Text from '../Text'

import { useDrawerContext } from './Context'

export function MenuItem({ children, active, as: Comp, icon, ...props }) {
  const { collapsed } = useDrawerContext()

  // Hide items without an icon in collapsed state
  if (collapsed && !icon) return null

  return (
    <Text
      as="li"
      size="small"
      sx={{
        color: 'inherit',
        a: {
          color: 'inherit',
        },
      }}
    >
      <Comp {...props}>
        <Box
          sx={{
            'display': 'flex',
            'alignItems': 'baseline',
            'justifyContent': collapsed ? 'center' : 'flex-start',
            'color': 'inherit',
            'textDecoration': 'none',
            'mx': 2,
            'my': 1,
            'px': 2,
            'py': 2,
            'bg': active ? 'secondary.600' : 'transparent',
            '&:hover': {
              bg: 'secondary.700',
            },
            'transition': 'background-color 100ms linear',
            'borderRadius': collapsed ? '50%' : '1rem',
            'lineHeight': 1,
          }}
        >
          {icon ? (
            <Box sx={{ mr: collapsed ? undefined : 2 }}>{icon}</Box>
          ) : null}
          {collapsed ? null : children}
        </Box>
      </Comp>
    </Text>
  )
}

MenuItem.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
}

MenuItem.defaultProps = {
  active: false,
  as: 'a',
  icon: undefined,
}
