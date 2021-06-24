import React from 'react'
import { text, array } from '@storybook/addon-knobs'

import Placeholder from '../private/Placeholder'

import Tiles from './index'

export default { title: 'Tiles', component: Tiles }

export const Default = () => {
  const as = text('as', 'div')
  const columns = array('columns', [1, 2, 3])
  const space = array('space', [1, 3, 5])

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
