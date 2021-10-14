import PropTypes from 'prop-types'
import React from 'react'

import TextLink from '../TextLink'

import { useAppBarContext } from './context'

export default function AppBarNavItem({ active, ...props }) {
  const { collapsed } = useAppBarContext()

  return (
    <TextLink
      {...props}
      aria-current={active ? 'page' : undefined}
      sx={{
        'px': 3,
        'py': collapsed ? 3 : 2,
        'mx': collapsed ? 0 : 1,
        'fontSize': '16px',
        'height': '100%',
        'color': active ? 'primary.700' : 'inherit',
        'whiteSpace': 'nowrap',
        'display': 'flex',
        'width': collapsed ? '100%' : 'auto',
        'alignItems': 'center',
        'borderRadius': 2,
        'bg': active ? 'primary.100' : 'transparent',
        '&:hover': {
          bg: 'primary.200',
          textDecoration: 'none',
        },
      }}
    />
  )
}

AppBarNavItem.propTypes = {
  active: PropTypes.bool,
}

AppBarNavItem.defaultProps = {
  active: false,
}
