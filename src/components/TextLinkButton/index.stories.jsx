import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Box from '../Box'
import Text from '../Text'
import Stack from '../Stack'
import TextLink from '../TextLink'
import Icon from '../Icon'
import Actions from '../Actions'
import Button from '../Button'
import Inline from '../Inline'

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
      <Button>Button</Button>
      <TextLinkButton>TextLinkButton</TextLinkButton>
    </Actions>
  )
}
InActions.story = {
  name: 'inside Actions',
}

export const WithIcon = () => {
  const iconName = text('Icon', 'download')

  return (
    <Stack space={3}>
      <Box>
        <Text size="tiny">
          <TextLinkButton
            href="https://starwars.fandom.com/"
            icon={<Icon name={iconName} size="tiny" />}
          >
            Download
          </TextLinkButton>
        </Text>
      </Box>
      <Box>
        <Text size="small">
          <TextLinkButton
            href="https://starwars.fandom.com/"
            icon={<Icon name={iconName} size="small" />}
          >
            Download
          </TextLinkButton>
        </Text>
      </Box>
      <Box>
        <Text size="standard">
          <TextLinkButton
            href="https://starwars.fandom.com/"
            icon={<Icon name={iconName} size="standard" />}
          >
            Download
          </TextLinkButton>
        </Text>
      </Box>
      <Box>
        <Text size="large">
          <TextLinkButton
            href="https://starwars.fandom.com/"
            icon={<Icon name={iconName} size="large" />}
          >
            Download
          </TextLinkButton>
        </Text>
      </Box>
    </Stack>
  )
}
WithIcon.story = {
  name: 'with Icon',
}

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 3000))
}

export const Loading = () => {
  const content = text('Text', 'Download')
  const iconName = text('Icon', 'download')

  const [isLoading, setLoading] = React.useState(false)

  const handleClick = () => {
    setLoading(true)
    action('Button clicked')()
  }

  React.useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false)
      })
    }
  }, [isLoading])

  return (
    <Inline>
      <TextLinkButton
        isLoading={isLoading}
        onClick={handleClick}
        icon={<Icon name={iconName} size="standard" />}
      >
        {content}
      </TextLinkButton>
    </Inline>
  )
}
Loading.story = {
  name: 'loading',
}
