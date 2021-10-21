import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

export default function Menu({ children }) {
  return <Box>{children}</Box>
}

Menu.propTypes = {
  children: PropTypes.node,
}

Menu.defaultProps = {
  children: null,
}
