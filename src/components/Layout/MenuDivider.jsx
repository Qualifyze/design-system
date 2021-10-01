import React from 'react'

import Box from '../Box'

export function MenuDivider() {
  return (
    <Box
      sx={{
        px: 2,
        py: 2,
      }}
    >
      <Box
        sx={{
          borderTop: '1px solid rgba(255, 255, 255, 0.25)',
        }}
      />
    </Box>
  )
}
