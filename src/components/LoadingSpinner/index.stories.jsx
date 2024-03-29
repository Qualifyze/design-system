import { select, text } from '@storybook/addon-knobs'
import React from 'react'

import Box from '../Box'

import LoadingSpinner from '.'

export default { title: 'LoadingSpinner', component: LoadingSpinner }

const variants = ['primary', 'secondary', 'light']

export const Default = () => {
  const variant = select('Variant', variants, 'primary')
  const size = text('Size', '48px')
  const storyBg = text('Background', 'white')

  return (
    <Box sx={{ bg: storyBg, p: 3 }}>
      <LoadingSpinner variant={variant} size={size} />
    </Box>
  )
}

Default.story = {
  name: 'default',
}
