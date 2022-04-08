import React from 'react'
import { select, boolean, text } from '@storybook/addon-knobs'

import Text from '../Text'
import Actions from '../Actions'
import Button from '../Button'
import Stack from '../Stack'
import Box from '../Box'
import Icon from '../Icon'

import TextLink from './index'

export default { title: 'TextLink', component: TextLink }

export const Default = () => {
  const showVisited = boolean('Show Visited?', false)
  const hitArea = select('Hit Area', ['standard', 'large'], 'standard')
  const href = text('href', 'http://www.google.com')
  const size = select(
    'Text Size',
    ['tiny', 'small', 'standard', 'large'],
    'standard'
  )
  const tone = select(
    'Tone',
    ['primary', 'neutral', 'positive', 'critical', 'info'],
    'primary'
  )

  return (
    <Text size={size}>
      If you want to link somewhere, use the{' '}
      <TextLink
        href={href}
        showVisited={showVisited}
        hitArea={hitArea}
        tone={tone}
      >
        TextLink
      </TextLink>{' '}
      component. It should be nested inside a Text.
    </Text>
  )
}
Default.story = {
  name: 'default',
}

export const InActions = () => {
  return (
    <>
      <Actions>
        <Button>Button</Button>
        <TextLink href="https://example.com">TextLink</TextLink>
      </Actions>
    </>
  )
}
InActions.story = {
  name: 'inside Actions',
}

export const WithIcon = () => {
  const iconName = text('Icon', 'link')

  return (
    <Stack space={3}>
      <Box>
        <Text size="tiny">
          <TextLink
            href="https://starwars.fandom.com/"
            icon={<Icon name={iconName} size="tiny" />}
          >
            Free education
          </TextLink>
        </Text>
      </Box>
      <Box>
        <Text size="small">
          <TextLink
            href="https://starwars.fandom.com/"
            icon={<Icon name={iconName} size="small" />}
          >
            Free education
          </TextLink>
        </Text>
      </Box>
      <Box>
        <Text size="standard">
          <TextLink
            href="https://starwars.fandom.com/"
            icon={<Icon name={iconName} size="standard" />}
          >
            Free education
          </TextLink>
        </Text>
      </Box>
      <Box>
        <Text size="large">
          <TextLink
            href="https://starwars.fandom.com/"
            icon={<Icon name={iconName} size="large" />}
          >
            Free education
          </TextLink>
        </Text>
      </Box>
    </Stack>
  )
}
WithIcon.story = {
  name: 'with Icon',
}
