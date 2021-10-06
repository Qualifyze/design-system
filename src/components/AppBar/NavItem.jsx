import PropTypes from 'prop-types'
import React from 'react'

import TextLink from '../TextLink'

import { useAppBarContext } from './context'

function border(weight) {
  return active => `${weight} solid ${active ? 'currentColor' : 'transparent'}`
}

export default function AppBarNavItem({ active, ...props }) {
  const { collapsed } = useAppBarContext()
  const borderBottom = border(collapsed ? '0' : '3px')
  const borderLeft = border(collapsed ? '6px' : '0')

  return (
    <TextLink
      {...props}
      aria-current={active ? 'page' : undefined}
      sx={{
        'px': 3,
        'py': collapsed ? 3 : 2,
        'height': '100%',
        'color': active ? 'primary.500' : 'inherit',
        'whiteSpace': 'nowrap',
        'display': 'flex',
        'width': collapsed ? '100%' : 'auto',
        'alignItems': 'center',
        '&:hover': {
          color: 'primary.500',
          textDecoration: 'none',
        },
        'borderBottom': borderBottom(active),
        'borderLeft': borderLeft(active),
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
