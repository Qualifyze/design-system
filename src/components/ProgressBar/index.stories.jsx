import React from 'react'
import { number, select, text } from '@storybook/addon-knobs'

import Box from '../Box'

import ProgressBar from './index'

export default { title: 'ProgressBar' }

export const Default = () => {
  const variant = select('Variant', ['', 'indeterminate', 'determinate'], '')
  const color = select('Color', ['', 'secondary', 'primary'], '')
  const size = select('Size', ['', 'normal', 'small'], '')
  const bg = text('Background color')
  const fg = text('Foreground color')
  const value = number('Value (0-1)', 0.4)

  return (
    <Box sx={{ p: 3 }}>
      <ProgressBar
        variant={variant || undefined}
        color={color || undefined}
        bg={bg || undefined}
        fg={fg || undefined}
        size={size || undefined}
        value={value}
      />
    </Box>
  )
}
Default.story = {
  name: 'default',
}
