import React from 'react'
import { text, select } from '@storybook/addon-knobs'

import Flex from '../Flex'
import Inline from '../Inline'
import Button from '../Button'

import { Tooltip } from './index'

export default { title: 'Tooltip', component: Tooltip }

const buttonPlacementToFlex = {
  'center': { justifyContent: 'center', alignItems: 'center' },
  'left': { justifyContent: 'flex-start', alignItems: 'center' },
  'top left': { justifyContent: 'flex-start', alignItems: 'flex-start' },
  'bottom': { justifyContent: 'center', alignItems: 'flex-end' },
}

export const Default = () => {
  const tooltipText = text('Tooltip Text', 'Do NOT click this button...')
  const buttonPlacement = select(
    'Button placement',
    ['center', 'left', 'top left', 'bottom'],
    'center'
  )
  const side = select('Side', ['top', 'left', 'right', 'bottom'], 'bottom')

  return (
    <Flex
      sx={{
        boxSizing: 'border-box',
        position: 'absolute',
        inset: 0,
        display: 'flex',
        ...buttonPlacementToFlex[buttonPlacement],
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
          <Tooltip.Content sideOffset={5} side={side}>
            {tooltipText}
            <Tooltip.Arrow offset={10} />
          </Tooltip.Content>
        </Tooltip>
      </Inline>
    </Flex>
  )
}
Default.story = {
  name: 'default',
}
