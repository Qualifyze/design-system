import React from 'react'
import { select } from '@storybook/addon-knobs'

import Box from '../Box'

import LoadingSpinner from './index'

export default { title: 'LoadingSpinner', component: LoadingSpinner }

export const Default = () => {
  const variants = ['default', 'secondary', 'light']
  const variant = select('Variant', variants, 'default')
  const storyBg = select('Story Background', ['primary.800', 'white'], 'white')

  return (
    <Box bg={storyBg} m={3}>
      <LoadingSpinner variant={variant} />
    </Box>
  )
}
Default.story = {
  name: 'default',
}
