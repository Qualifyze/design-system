import React from 'react'
import { text, array, select } from '@storybook/addon-knobs'

import Columns from '../Columns'
import Placeholder from '../private/Placeholder'

import Column from './index'

export default { title: 'Column', component: Column }

export const Default = () => {
  const space = array('Space', [1, 3, 5])
  const firstColWith = text('first col width', '20%')
  const secondColWidth = text('second col width', '30%')
  const thirdColWidth = text('third col width', '50%')
  const fourthColWidth = text('fourth col width', '70%')
  const fifthColWidth = text('fifth col width', '30%')
  const collapseBellow = select(
    'Collapse bellow',
    ['mobile', 'tablet', 'desktop'],
    'mobile'
  )

  return (
    <Columns
      alignY="center"
      align="center"
      space={space}
      collapseBelow={collapseBellow}
    >
      <Column width={firstColWith}>
        <Placeholder height={50} width="100%" label="hello there" />
      </Column>
      <Column width={secondColWidth}>
        <Placeholder height={50} width="100%" label="hello there" />
      </Column>
      <Column width={thirdColWidth}>
        <Placeholder height={50} width="100%" label="hello there" />
      </Column>
      <Column width={fourthColWidth}>
        <Placeholder height={50} width="100%" label="hello there" />
      </Column>
      <Column width={fifthColWidth}>
        <Placeholder height={50} width="100%" label="hello there" />
      </Column>
    </Columns>
  )
}
Default.story = {
  name: 'default',
}

// another story for when you do not give a width
export const AutoWidth = () => (
  <Columns alignY="center" align="center" space={2} collapseBelow="mobile">
    <Column>
      <Placeholder height={50} width="100%" label="hello there" />
    </Column>
    <Column>
      <Placeholder height={50} width="100%" label="hello there" />
    </Column>
    <Column>
      <Placeholder height={50} width="100%" label="hello there" />
    </Column>
    <Column>
      <Placeholder height={50} width="100%" label="hello there" />
    </Column>
  </Columns>
)
AutoWidth.story = {
  name: 'automatic width',
}
