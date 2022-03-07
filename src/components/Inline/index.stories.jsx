/* eslint-disable no-alert */
import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'

import Box from '../Box'
import Button from '../Button'
import Placeholder from '../private/Placeholder'

import Inline from './index'

// All possible values for `space` according to our theme
const ALL_SPACES = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export default { title: 'Inline', component: Inline }

export const Default = () => {
  const space = select('Space', ALL_SPACES, 3)

  return (
    <Inline space={space}>
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
  const space = select('Space', ALL_SPACES, 3)

  return (
    <Inline space={space} collapseBelow={collapseBelow}>
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
  const space = select('Space', ALL_SPACES, 3)

  return (
    <Inline space={space} alignY={alignY}>
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

export const Adjacent = () => {
  const space = select('Space', ALL_SPACES, 5)

  return (
    <Box css={{ display: 'flex', flexDirection: 'row' }}>
      <Inline>
        <Button onClick={() => alert('Yes i am!')}>Am I clickable?</Button>
      </Inline>
      <Inline space={space}>
        <Placeholder width={50} height={50} />
        <Placeholder width={50} height={50} />
        <Placeholder width={50} height={50} />
      </Inline>
    </Box>
  )
}
Adjacent.story = {
  name: 'with adjacent interactive elements',
}

export const LeakingExample = () => {
  const space = select('Space', ALL_SPACES, 7)
  const withIndex = boolean('Using z-index', true)

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          zIndex: withIndex ? '2' : null,
        }}
      >
        <Inline>
          <Button onClick={() => alert('Yes i am!')}>
            Am I clickable? Try with high space values
          </Button>
        </Inline>
      </Box>
      <Box
        sx={{
          zIndex: withIndex ? '1' : null,
        }}
      >
        <Inline space={space}>
          <Placeholder width={50} height={50} />
          <Placeholder width={50} height={50} />
          <Placeholder width={50} height={50} />
        </Inline>
      </Box>
    </Box>
  )
}
LeakingExample.story = {
  name: 'leaking example',
}
