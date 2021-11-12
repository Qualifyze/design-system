import React from 'react'
import { text } from '@storybook/addon-knobs'

import Container from './index'

export default { title: 'Container', component: Container }

export const Default = () => {
  const bg = text('Background', 'primary.100')
  const m = text('Margin', '2')
  const p = text('Padding', '4')

  return (
    <Container bg={bg} m={m} p={p}>
      Hola, mundo!
    </Container>
  )
}
Default.story = {
  name: 'default',
}
