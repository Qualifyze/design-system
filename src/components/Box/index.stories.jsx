import React from 'react'
import { text } from '@storybook/addon-knobs'

import Box from './index'

export default { title: 'Box', component: Box }

export const Default = () => {
  const bg = text('Background', 'primary.200')
  const m = text('Margin', '2')
  const p = text('Padding', '4')

  return (
    <Box bg={bg} m={m} p={p}>
      Hola, mundo!
    </Box>
  )
}
Default.story = {
  name: 'default',
}
