import PropTypes from 'prop-types'
import React from 'react'

import Heading from '../Heading'

export function Title({ children }) {
  return (
    <Heading level={3} as="h1" sx={{ mb: 3 }}>
      {children}
    </Heading>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
}
