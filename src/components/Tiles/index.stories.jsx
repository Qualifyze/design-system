/* eslint-disable no-alert */
import React from 'react'
import { text, select } from '@storybook/addon-knobs'

import Placeholder from '../private/Placeholder'

import Tiles from './index'

// All possible values for `space` according to our theme
const ALL_SPACES = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export default { title: 'Tiles', component: Tiles }

export const Default = () => {
  const as = text('as', 'div')
  const columns = select('Columns', [1, 2, 3, 4], 3)
  const space = select('Space', ALL_SPACES, 5)
  const align = select('Align', ['left', 'right', 'center'], 'center')

  return (
    <Tiles columns={columns} as={as} space={space} align={align}>
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="50%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
    </Tiles>
  )
}
Default.story = {
  name: 'default',
}

export const ResponsiveColumns = () => {
  const as = text('as', 'div')

  return (
    <Tiles
      columns={[2, 1, 3]}
      as={as}
      space={[2, 3, 5]}
      align={['right', 'left', 'center']}
    >
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="50%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="100%" />
      <Placeholder height={50} width="80%" />
      <Placeholder height={50} width="100%" />
    </Tiles>
  )
}
ResponsiveColumns.story = {
  name: 'with responsive column count',
}
