import PropTypes from 'prop-types'
import React from 'react'

import TextLink from '../TextLink'

import { useAppBarContext } from './context'

export default function AppBarNavItem({ active, noHover, ...props }) {
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
        'bg': active ? 'primary.500' : 'transparent',
        'color': active ? 'white' : 'inherit',
        'whiteSpace': 'nowrap',
        'display': 'flex',
        'width': collapsed ? '100%' : 'auto',
        'alignItems': 'center',
        'borderRadius': collapsed ? 0 : 2,
        '&:hover': {
          textDecoration: 'none',
          ...(noHover
            ? {}
            : {
                bg: active ? 'primary.600' : 'primary.100',
              }),
        },
      }}
    />
  )
}

AppBarNavItem.propTypes = {
  active: PropTypes.bool,
  noHover: PropTypes.bool,
}

AppBarNavItem.defaultProps = {
  active: false,
  noHover: false,
}
