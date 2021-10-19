import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import Avatar from './index'

export default { title: 'Avatar' }

export const Default = () => {
  const alt = text('alt', 'Alt Text')
  const fallback = text('fallback', '') || undefined
  const src = boolean('avatar', true)
    ? `https://i.pravatar.cc/300?u=${alt}`
    : undefined
  const size = text('size', '') || undefined
  const bg = text('bg', '') || undefined

  return <Avatar src={src} alt={alt} fallback={fallback} size={size} bg={bg} />
}

Default.story = {
  name: 'default',
}
