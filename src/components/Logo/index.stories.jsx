import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import Box from '../Box'

import Logo from './index'

export default { title: 'Logo', component: Logo }

export const Default = () => {
  const light = boolean('Light Logo', false)
  const width = text('Width', '168')
  const height = text('Height', '42')

  return (
    <Box
      sx={{
        p: 4,
        bg: light ? 'secondary.700' : 'white',
        border: '1px solid black',
      }}
    >
      <Logo
        light={light}
        width={width || undefined}
        height={height || undefined}
      />
    </Box>
  )
}
Default.story = {
  name: 'Logo Image',
}
