import React from 'react'
import { text } from '@storybook/addon-knobs'

import Flex from '../Flex'
import Inline from '../Inline'
import Button from '../Button'

import { Tooltip } from './index'

export default { title: 'Tooltip', component: Tooltip }

export const Default = () => {
  const tooltipText = text('Tooltip Text', 'Do NOT click this button...')

  return (
    <Flex
      sx={{
        width: '100%',
        minWidth: '600px',
        height: '100%',
        minHeight: '600px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Inline>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button
              onClick={() => {
                // eslint-disable-next-line no-alert
                alert('Why? Just... why did you do this?')
              }}
            >
              Send missile alert (test)
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content sideOffset={5}>
            {tooltipText}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Inline>
    </Flex>
  )
}
Default.story = {
  name: 'default',
}
