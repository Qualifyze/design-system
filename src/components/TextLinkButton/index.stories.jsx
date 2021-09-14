/* eslint-disable no-alert */
import React, { useState } from 'react'
import { select } from '@storybook/addon-knobs'

import Text from '../Text'
import Stack from '../Stack'
import TextLink from '../TextLink'
import Icon from '../Icon'
import Actions from '../Actions'
import Button from '../Button'

import TextLinkButton from './index'

export default { title: 'TextLinkButton', component: TextLinkButton }

export const Default = () => {
  const hitArea = select('Hit Area', ['standard', 'large'], 'standard')
  const size = select(
    'Text Size',
    ['tiny', 'small', 'standard', 'large'],
    'standard'
  )

  return (
    <Stack space={4}>
      <Text size={size}>
        If you want to show a link that triggers some kind of action,{' '}
        <TextLinkButton hitArea={hitArea}>
          you should use a TextLinkButton instead of a TextLink for semantic
          reasons.
        </TextLinkButton>{' '}
      </Text>
      <Text>
        If you need more documentation, please look at the{' '}
        <TextLink
          href="https://seek-oss.github.io/braid-design-system/components/TextLinkButton"
          icon={<Icon name="link" />}
        >
          Braid docs
        </TextLink>{' '}
        for now.
      </Text>
    </Stack>
  )
}
Default.story = {
  name: 'default',
}

export const WithActions = () => {
  const [loading, setLoading] = useState(true)
  const hitArea = select('Hit Area', ['standard', 'large'], 'standard')
  const size = select(
    'Text Size',
    ['tiny', 'small', 'standard', 'large'],
    'standard'
  )
  return (
    <Actions>
      <Button size={size}>I want option 1</Button>
      <Text size={size}>
        <TextLinkButton
          onClick={() => {
            setLoading(true)
            setTimeout(function () {
              setLoading(false)
              alert('Hello there!')
            }, 2000)
          }}
          hitArea={hitArea}
          isLoading={loading}
        >
          I want to opt out
        </TextLinkButton>{' '}
      </Text>
    </Actions>
  )
}
WithActions.story = {
  name: 'with Actions',
}
