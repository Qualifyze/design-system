import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import Logo from './index'

export default { title: 'Logo', component: Logo }

export const Default = () => {
  const light = boolean('Light Logo', false)
  const width = text('Width', 168)
  const height = text('Height', 42)

  return <Logo light={light} width={width} height={height} />
}
Default.story = {
  name: 'Logo Image',
}
