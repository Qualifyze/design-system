import React from 'react'
import { boolean, number } from '@storybook/addon-knobs'

import Logo from './index'

export default { title: 'Logo', component: Logo }

export const Default = () => {
  const light = boolean('Light Logo', false)
  const width = number('Width', 168)
  const height = number('Height', 42)

  return <Logo light={light} width={width} height={height} />
}
Default.story = {
  name: 'Logo Image',
}
