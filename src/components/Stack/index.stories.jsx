import React from 'react'

import Heading from '../Heading'
import Text from '../Text'

import Stack from './index'

export default { title: 'Stack', component: Stack }

export const Default = () => {
  return (
    <Stack space={4} align="left">
      <Heading>Heading goes here</Heading>
      <Text>Text goes here</Text>
      <Text>And even more goes here</Text>
    </Stack>
  )
}
Default.story = {
  name: 'default',
}
