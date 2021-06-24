/* eslint-disable react/prop-types */
import React from 'react'

import Box from '../Box'

const Card = ({ sx, ...props }) => (
  <Box
    sx={{
      p: 4,
      bg: 'white',
      boxShadow: 4,
      borderRadius: 3,
      width: '100%',
      ...sx,
    }}
    {...props}
  />
)

Card.displayName = `Card`

export default Card
