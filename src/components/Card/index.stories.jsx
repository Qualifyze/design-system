import React from 'react'

import Box from '../Box'

import Card from './index'

export default { title: 'Card', component: Card }

export const Default = () => {
  return (
    <Box p={5} bg="papayawhip">
      <Card>Hola, mundo!</Card>
    </Box>
  )
}
Default.story = {
  name: 'default',
}
