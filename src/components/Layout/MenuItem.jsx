import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'

export function MenuItem({ children, active }) {
  return (
    <Text
      as="li"
      size="small"
      sx={{
        color: 'inherit',
        a: {
          'display': 'flex',
          'alignItems': 'baseline',
          'color': 'inherit',
          'textDecoration': 'none',
          'px': 3,
          'py': 2,
          'bg': active ? 'secondary.600' : 'transparent',
          '&:hover': {
            bg: 'secondary.700',
          },
          'transition': 'background-color 100ms linear',
        },
      }}
    >
      {children}
    </Text>
  )
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
}

MenuItem.defaultProps = {
  active: false,
}
