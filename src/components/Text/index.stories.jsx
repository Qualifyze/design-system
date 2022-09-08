import { boolean, select } from '@storybook/addon-knobs'
import React from 'react'

import Box from '../Box'

import Text from '.'

export default { title: 'Text', component: Text }

export const Default = () => {
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
    <Box sx={{ bg: onDark ? 'grey.800' : 'white', p: onDark ? 2 : 0 }}>
      <Text size={size} weight={weight} align={align} tone={tone}>
        This is a sample text that contains <em>some emphasized words</em>, in
        addition to a few <strong>strongly emphasized words</strong> and{' '}
        <b>a few bold words</b> for demonstration purposes.
      </Text>
    </Box>
  )
}
Default.story = {
  name: 'default',
}
