import React from 'react'

import Heading from '../Heading'
import Stack from '../Stack'

import Hidden from './index'

export default { title: 'Hidden', component: Hidden }

export const Default = () => {
  return (
    <Stack space={3}>
      <Heading>Hello</Heading>
      <Hidden below="medium" inline>
        <Heading>Hidden below medium</Heading>
      </Hidden>
      <Heading>Hello</Heading>
    </Stack>
  )
}
Default.story = {
  name: 'default',
}
