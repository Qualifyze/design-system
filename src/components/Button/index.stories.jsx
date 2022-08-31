import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Inline from '../Inline'
import Icon from '../Icon'
import Box from '../Box'
import Stack from '../Stack'

import Button from './index'

export default { title: 'Button', component: Button }

export const Default = () => {
  const content = text('Text', 'Hola mundo')
  const size = select('Size', ['small', 'standard', 'large'], 'standard')
  const variant = select(
    'Variant',
    ['primary', 'secondary', 'danger'],
    'primary'
  )

  return (
    <Inline>
      <Button size={size} variant={variant} onClick={action('Button clicked')}>
        {content}
      </Button>
    </Inline>
  )
}
Default.story = {
  name: 'default',
}

export const Disabled = () => {
  const variant = select(
    'Variant',
    ['primary', 'secondary', 'danger'],
    'primary'
  )
  return (
    <Inline>
      <Button disabled variant={variant} onClick={action('Button clicked')}>
        Cant touch this
      </Button>
    </Inline>
  )
}
Disabled.story = {
  name: 'disabled',
}

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 3000))
}

export const Loading = () => {
  const content = text('Text', 'Submit')
  const size = select('Size', ['small', 'standard', 'large'], 'standard')
  const variant = select(
    'Variant',
    ['primary', 'secondary', 'danger'],
    'primary'
  )

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
      <Button
        size={size}
        variant={variant}
        isLoading={isLoading}
        onClick={handleClick}
      >
        {content}
      </Button>
    </Inline>
  )
}
Loading.story = {
  name: 'loading',
}

export const WithIcon = () => {
  const iconName = text('Icon', 'download')
  const variant = select(
    'Variant',
    ['primary', 'secondary', 'danger'],
    'primary'
  )

  return (
    <Stack space={3}>
      <Box>
        <Inline>
          <Button
            icon={<Icon name={iconName} size="tiny" />}
            size="small"
            variant={variant}
            onClick={action('Button clicked')}
          >
            Click me
          </Button>
        </Inline>
      </Box>
      <Box>
        <Inline>
          <Button
            icon={<Icon name={iconName} />}
            variant={variant}
            onClick={action('Button clicked')}
          >
            Click me
          </Button>
        </Inline>
      </Box>
      <Box>
        <Inline>
          <Button
            icon={<Icon name={iconName} size="large" />}
            size="large"
            variant={variant}
            onClick={action('Button clicked')}
          >
            Click me
          </Button>
        </Inline>
      </Box>
    </Stack>
  )
}
WithIcon.story = {
  name: 'with Icon',
}
