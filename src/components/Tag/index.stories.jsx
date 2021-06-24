import React from 'react'
import { array } from '@storybook/addon-knobs'

import Inline from '../Inline'
import Stack from '../Stack'
import Text from '../Text'

import Tag from './index'

export default { title: 'Tag', component: Tag }

export const Default = () => {
  const MultipleExamples = array(
    'Tags (seperate by ,)',
    ['Hello world', 'Test'],
    ','
  )

  return (
    <Stack space={4}>
      <Inline space={1}>
        {MultipleExamples.map(content => (
          <Tag key={`${content}`}>{content}</Tag>
        ))}
      </Inline>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et <Tag>justo duo dolores et</Tag> ea
        rebum. Stet clita kasd gubergren, no sea <Tag>takimata</Tag>
        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet.
      </Text>
    </Stack>
  )
}
Default.story = {
  name: 'default',
}
