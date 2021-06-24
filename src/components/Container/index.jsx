/* eslint-disable react/prop-types */
import React from 'react'

import Box from '../Box'

const Container = ({ maxWidth, children }) => (
  <Box sx={{ maxWidth, mx: 'auto' }}>{children}</Box>
)
export default Container
