import PropTypes from 'prop-types'
import React from 'react'

import TextLink from '../TextLink'

import { useAppBarContext } from './context'

function border(weight) {
  return active => `${weight} solid ${active ? 'currentColor' : 'transparent'}`
}

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
        'fontSize': 2,
        'height': '100%',
        'color': active ? 'brand.11' : 'inherit',
        'whiteSpace': 'nowrap',
        'display': 'flex',
        'width': collapsed ? '100%' : 'auto',
        'alignItems': 'center',
        'borderRadius': 2,
        'bg': active ? 'brand.3' : 'transparent',
        '&:hover': {
          bg: 'brand.4',
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
