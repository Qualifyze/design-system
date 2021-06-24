import React from 'react'

import Text from '../Text'
import Stack from '../Stack'
import TextLink from '../TextLink'
import Inline from '../Inline'

import ButtonLink from './index'

export default { title: 'ButtonLink', component: ButtonLink }

export const Default = () => {
  return (
    <Stack space={4}>
      <Text>
        If you want to show a link that looks like a button, you should use a
        ButtonLink like this one:
      </Text>
      <Inline>
        <ButtonLink href="https://google.com">ButtonLink</ButtonLink>
      </Inline>
      <Text>
        If you need more documentation, please look at the{' '}
        <TextLink href="https://seek-oss.github.io/braid-design-system/components/ButtonLink">
          Braid docs
        </TextLink>{' '}
        for now.
      </Text>
    </Stack>
  )
}
Default.story = {
  name: 'default',
}
