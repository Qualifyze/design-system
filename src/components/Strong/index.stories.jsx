import React from 'react'
import { text } from '@storybook/addon-knobs'

import Text from '../Text'

import Strong from './index'

export default { title: 'Strong', component: Strong }

export const Default = () => {
  const message = text('Text', 'This is a message with a ')
  const bold = text('Bold part', 'bold part')

  return (
    <Text>
      {message} <Strong>{bold}</Strong>
    </Text>
  )
}
Default.story = {
  name: 'default',
}
