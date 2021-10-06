import { number, select, text } from '@storybook/addon-knobs'
import React from 'react'

import Box from '../Box'
import LoremIpsum from '../LoremIpsum'
import Heading from '../Heading'

import AppBar from '.'

export default { title: 'AppBar', component: AppBar }

export const Default = () => {
  const position = select(
    'position',
    { static: 'static', fixed: 'fixed' },
    'static'
  )
  const bg = text('background', 'white')
  const color = text('color', 'inherit')
  const paragraphs = number('paragraphs', 10, { min: 1, max: 14 })

  return (
    <>
      <AppBar bg={bg} color={color} position={position}>
        This is the app bar.
      </AppBar>
      <Box
        as="main"
        sx={{
          pt: position === 'fixed' ? 112 : 4,
          pb: 4,
          px: 4,
          background: 'rgb(245, 246, 250)',
        }}
      >
        <Heading level={3} as="h1" sx={{ mb: 3 }}>
          Here comes the main content
        </Heading>
        <LoremIpsum paragraphs={paragraphs} />
      </Box>
    </>
  )
}

Default.story = {
  name: 'default',
}

Default.parameters = {
  layout: 'fullscreen',
}
