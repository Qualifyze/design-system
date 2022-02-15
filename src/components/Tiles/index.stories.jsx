/* eslint-disable no-alert */
import React from 'react'
import { text, select } from '@storybook/addon-knobs'

import Placeholder from '../private/Placeholder'
import Box from '../Box'
import Button from '../Button'

import Tiles from './index'

// All possible values for `space` according to our theme
const ALL_SPACES = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export default { title: 'Tiles', component: Tiles }

export const Default = () => {
  const as = text('as', 'div')
  const columns = select('Columns', [1, 2, 3, 4], 3)
  const space = select('Space', ALL_SPACES, 5)

  return (
    <Tiles columns={columns} as={as} space={space}>
      <Placeholder height={50} />
      <Placeholder height={50} />
      <Placeholder height={50} />
      <Placeholder height={50} />
      <Placeholder height={50} />
      <Placeholder height={50} />
      <Placeholder height={50} />
      <Placeholder height={50} />
      <Placeholder height={50} />
    </Tiles>
  )
}
Default.story = {
  name: 'default',
}

export const Adjacent = () => {
  const as = text('as', 'div')
  const columns = select('Columns', [1, 2, 3, 4], 3)
  const space = select('Space', ALL_SPACES, 5)

  return (
    <Box>
      <Box>
        <Button onClick={() => alert('Yes I am!')}>Am I clickable?</Button>
      </Box>
      <Tiles columns={columns} as={as} space={space}>
        <Placeholder height={50} />
        <Placeholder height={50} />
        <Placeholder height={50} />
        <Placeholder height={50} />
        <Placeholder height={50} />
        <Placeholder height={50} />
        <Placeholder height={50} />
        <Placeholder height={50} />
        <Placeholder height={50} />
      </Tiles>
    </Box>
  )
}
Adjacent.story = {
  name: 'with adjacent interactive elements',
}
