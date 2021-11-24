import React from 'react'
import { action } from '@storybook/addon-actions'

import Box from '../Box'
import Button from '../Button'
import Icon from '../Icon'
import Inline from '../Inline'
import Stack from '../Stack'
import Text from '../Text'
import TextLink from '../TextLink'

import { VisuallyHidden } from './index'

export default { title: 'VisuallyHidden', component: VisuallyHidden }

export const Default = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Stack space={4}>
        <Box>
          <Text>
            Hides content from the screen in an accessible way. See{' '}
            <TextLink href="https://www.radix-ui.com/docs/primitives/utilities/visually-hidden">
              the Radix UI docs for more information.
            </TextLink>
          </Text>
        </Box>

        <Inline>
          <Button size="small" onClick={action('Button clicked')}>
            <Icon name="download" />
            <VisuallyHidden>Download</VisuallyHidden>
          </Button>
        </Inline>
      </Stack>
    </Box>
  )
}
Default.story = {
  name: 'default',
}
