import React from 'react'
import { text, select, boolean } from '@storybook/addon-knobs'

import Box from '../Box'

import Text from './index'

export default { title: 'Text', component: Text }

export const Default = () => {
  const content = text('Text', 'Hello world')
  const availableSizes = ['tiny', 'small', 'standard', 'large']
  const size = select('Size', availableSizes, 'standard')
  const availableWeights = ['regular', 'medium', 'strong']
  const weight = select('Weight', availableWeights, 'regular')
  const availableAligns = ['left', 'center', 'right']
  const align = select('Align', availableAligns, 'left')
  const availableTones = [
    'neutral',
    'lightneutral',
    'positive',
    'critical',
    'info',
    'secondary',
    'lightsecondary',
  ]
  const tone = select('Tone', availableTones, 'neutral')
  const onDark = boolean('On dark background', false)

  return (
    <Box bg={onDark ? 'primary.800' : 'white'}>
      <Text size={size} weight={weight} align={align} tone={tone}>
        {content}
      </Text>
    </Box>
  )
}
Default.story = {
  name: 'default',
}
