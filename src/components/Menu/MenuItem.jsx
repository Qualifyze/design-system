import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'

export default function MenuItem({ as: Comp, children, ...props }) {
  return (
    <Box
      sx={{
        fontSize: 2,
        a: {
          'display': 'block',
          'color': 'inherit',
          'textDecoration': 'none',
          '&:hover': {
            bg: 'primary.100',
            color: 'primary.800',
          },
        },
      }}
    >
      <Comp {...props}>
        <Box sx={{ p: [3, null, 2] }}>{children}</Box>
      </Comp>
    </Box>
  )
}

MenuItem.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
}

MenuItem.defaultProps = {
  as: Box,
  children: null,
}
