import React from 'react'
import PropTypes from 'prop-types'

import Box from '../Box'

export default function MenuItem({ as: Comp, children, ...props }) {
  return (
    <Box
      sx={{
        a: {
          'display': 'block',
          'color': 'inherit',
          'textDecoration': 'none',
          '&:hover': {
            bg: 'grey.100',
            color: 'primary.500',
          },
        },
      }}
    >
      <Comp {...props}>
        <Box sx={{ px: [3, 3, 3, 4], py: 3 }}>{children}</Box>
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
