/* eslint-disable no-alert */
import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import Box from '../Box'
import Button from '../Button'
import Inline from '../Inline'
import Placeholder from '../private/Placeholder'
import Flex from '../Flex'
import Text from '../Text'

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

export const LeakingExample = () => {
  const space = select('Space', ALL_SPACES, 6)
  const withIndex = boolean('Using z-index', true)

  return (
    <Box sx={{ border: 'solid 3px black' }}>
      <Text>Check the README for an explanation</Text>
      <Flex
        sx={{
          zIndex: withIndex ? '2' : null,
        }}
      >
        <Inline>
          <Button onClick={() => alert('Yes, I am!')}>
            But am I clickable? Try me with and without z-index and a space
            value above 4
          </Button>
        </Inline>
      </Flex>
      <Box sx={{ zIndex: withIndex ? '1' : null, border: 'solid 3px red' }}>
        <Stack space={space}>
          <Inline>
            <Button onClick={() => alert('I am!')}>Am I clickable?</Button>
          </Inline>
          <Placeholder height={50} width="100%" />
          <Placeholder height={50} width="100%" />
          <Placeholder height={50} width="100%" />
        </Stack>
      </Box>
    </Box>
  )
}
LeakingExample.story = {
  name: 'leaking example',
}
