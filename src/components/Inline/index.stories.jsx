import React from 'react'
import { select } from '@storybook/addon-knobs'

import Placeholder from '../private/Placeholder'

import Inline from './index'

export default { title: 'Inline', component: Inline }

export const Default = () => {
  return (
    <Inline space={3}>
      <Placeholder width={20} height={48} />
      <Placeholder width={80} height={48} />
      <Placeholder width={40} height={48} />
      <Placeholder width={150} height={48} />
      <Placeholder width={120} height={48} />
      <Placeholder width={60} height={48} />
      <Placeholder width={40} height={48} />
      <Placeholder width={180} height={48} />
      <Placeholder width={100} height={48} />
      <Placeholder width={60} height={48} />
      <Placeholder width={120} height={48} />
      <Placeholder width={40} height={48} />
    </Inline>
  )
}
Default.story = {
  name: 'default',
}

export const Collapsible = () => {
  const collapseBelow = select(
    'Collapse below',
    ['mobile', 'tablet', 'desktop'],
    'tablet'
  )

  return (
    <Inline space={3} collapseBelow={collapseBelow}>
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  )
}
Collapsible.story = {
  name: 'collapsible',
}

export const AlignY = () => {
  const alignY = select('alignY', ['top', 'center', 'bottom'], 'center')

  return (
    <Inline space={3} alignY={alignY}>
      <Placeholder width={32} height={32} />
      <Placeholder width={32} height={32} />
      <Placeholder width={32} height={32} />
      <Placeholder width={32} height={32} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={32} height={32} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  )
}
AlignY.story = {
  name: 'vertically aligned',
}
