import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

export function Main({ gutter, ...props }) {
  return (
    <Box
      as="main"
      sx={{
        flex: '1',
        height: '100%',
        overflowY: 'auto',
        px: gutter ? 4 : undefined,
        py: gutter ? 3 : undefined,
      }}
      {...props}
    />
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  gutter: PropTypes.bool,
  className: PropTypes.string,
}

Main.defaultProps = {
  gutter: false,
  className: undefined,
}
