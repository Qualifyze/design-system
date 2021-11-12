import React from 'react'
import { text } from '@storybook/addon-knobs'

import Flex from './index'

export default { title: 'Flex', component: Flex }

export const Default = () => {
  const bg = text('Background', 'primary.100')
  const m = text('Margin', '2')
  const p = text('Padding', '4')

  return <Flex sx={{ bg, m, p }}>Hola, mundo!</Flex>
}
Default.story = {
  name: 'default',
}
