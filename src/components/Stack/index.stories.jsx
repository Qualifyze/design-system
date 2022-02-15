/* eslint-disable no-alert */
import React from 'react'
import { select } from '@storybook/addon-knobs'

import Box from '../Box'
import Button from '../Button'
import Inline from '../Inline'
import Placeholder from '../private/Placeholder'

import Stack from './index'

// All possible values for `space` according to our theme
const ALL_SPACES = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export default { title: 'Stack', component: Stack }

export const Default = () => {
  const space = select('Space', ALL_SPACES, 3)

  return (
    <Stack space={space}>
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
    </Stack>
  )
}
Default.story = {
  name: 'default',
}

export const Adjacent = () => {
  const space = select('Space', ALL_SPACES, 3)

  return (
    <Box>
      <Inline>
        <Button onClick={() => alert('I am!')}>Am I clickable?</Button>
      </Inline>
      <Stack space={space}>
        <Placeholder height={50} width="100%" />
        <Placeholder height={50} width="100%" />
        <Placeholder height={50} width="100%" />
      </Stack>
    </Box>
  )
}
Adjacent.story = {
  name: 'with adjacent interactive elements',
}
