import React from 'react'
import { text, select } from '@storybook/addon-knobs'

import Text from '../Text'
import TextLink from '../TextLink'
import Stack from '../Stack'

import Alert from './index'

export default { title: 'Alert', component: Alert }

export const Default = () => {
  const content = text('Text', 'Hola mundo')
  const tone = select(
    'Tone',
    ['positive', 'neutral', 'critical', 'caution'],
    'neutral'
  )

  return (
    <Stack space={4}>
      <Stack space={2}>
        <Text>
          When using an Alert, you should always wrap the text inside with Text:
        </Text>
        <Alert tone={tone}>
          <Text>{content}</Text>
        </Alert>
      </Stack>
      <Stack space={2}>
        <Text>
          If you want the text color to match you can set the tone on Text:
        </Text>
        <Alert tone={tone}>
          <Text tone={tone}>{content}</Text>
        </Alert>
      </Stack>
      <Stack space={2}>
        <Text>You can even use links inside it:</Text>
        <Alert tone={tone}>
          <Text>
            {content}!&nbsp;
            <TextLink href="#">Take me home.</TextLink>
          </Text>
        </Alert>
      </Stack>
    </Stack>
  )
}
Default.story = {
  name: 'default',
}
