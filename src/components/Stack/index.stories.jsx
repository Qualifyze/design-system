import React from 'react'
import { select } from '@storybook/addon-knobs'

import Heading from '../Heading'
import Text from '../Text'
import Box from '../Box'
import Button from '../Button'
import Inline from '../Inline'

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

export const ContentOnTop = () => {
  const availableSpaces = [1, 2, 3, 4, 5]
  const space = select('Space', availableSpaces, 1)

  return (
    <Box>
      <Inline>
        <Button>Click me</Button>
      </Inline>
      <Stack space={space} align="left">
        <Heading>Try using a high space value</Heading>
        <Text>Like 5</Text>
        <Text>You should be able to click on the button</Text>
      </Stack>
    </Box>
  )
}
ContentOnTop.story = {
  name: 'with clickable content on top',
}
