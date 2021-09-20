/* eslint-disable no-alert */
import React from 'react'
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

export const InActions = () => {
  return (
    <Actions>
      <Button>I want option 1</Button>
      <TextLinkButton onClick={() => alert('clicked')}>
        I want to opt out
      </TextLinkButton>
    </Actions>
  )
}
InActions.story = {
  name: 'inside Actions',
}
