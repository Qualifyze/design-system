import React from 'react'
import { text, select } from '@storybook/addon-knobs'

import FieldMessage from './index'

export default { title: 'FieldMessage', component: FieldMessage }

export const Default = () => {
  const message = text('Message', 'This is a message')
  const tone = select('Tone', ['neutral', 'positive', 'critical'], 'positive')

  return <FieldMessage message={message} tone={tone} />
}
Default.story = {
  name: 'default',
}
