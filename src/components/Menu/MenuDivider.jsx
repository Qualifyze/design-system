import React from 'react'

import Box from '../Box'

export default function MenuDivider() {
  return (
    <Box sx={{ px: [3, 3, 3, 4], py: 2 }}>
      <Box
        sx={{
          // FIXME how do I get the border color from palette?
          borderTop: '1px solid #D6DEE6',
        }}
      />
    </Box>
  )
}
