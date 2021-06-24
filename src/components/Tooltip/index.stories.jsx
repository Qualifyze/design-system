import React from 'react'
import { text, select } from '@storybook/addon-knobs'

import Box from '../Box'

import Tooltip from './index'

export default { title: 'Tooltip', component: Tooltip }

export const Default = () => {
  const textExample = text('Text', 'Some text as Example')
  const tooltipText = text('Tooltip Text', 'Some text to test')
  const variant = select('Variant', ['default', 'light'], 'default')
  const indicator = text('Indicator', 'chevronUp')

  return (
    <Box mx={7} my={5}>
      <Tooltip
        dataTooltip={tooltipText}
        indicator={indicator}
        variant={variant}
      >
        {textExample}
      </Tooltip>
    </Box>
  )
}
Default.story = {
  name: 'default',
}
