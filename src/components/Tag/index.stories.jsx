import React from 'react'
import { array, text, select, boolean } from '@storybook/addon-knobs'

import Inline from '../Inline'
import Stack from '../Stack'
import Text from '../Text'
import Icon from '../Icon'

import Tag from './index'

export default { title: 'Tag', component: Tag }

export const Default = () => {
  const content = text('Content', 'remote audit')
  const withOnClick = boolean('Has onClick function?', false)
  // eslint-disable-next-line no-alert
  const onClick = withOnClick ? () => alert('Clicked') : undefined
  const size = select('Size', ['small', 'standard'], 'standard')
  const tone = select(
    'Tone',
    ['positive', 'neutral', 'critical', 'caution', 'info'],
    'neutral'
  )
  const withIcon = boolean('With icon?')
  const iconName = text('Icon', 'document')
  const withTrailingIcon = boolean('With trailing icon?')
  const trailingIconName = text('Trailing icon', 'pencil')

  return (
    <Tag
      onClick={onClick}
      tone={tone}
      size={size}
      icon={withIcon ? <Icon name={iconName} /> : null}
      trailingIcon={withTrailingIcon ? <Icon name={trailingIconName} /> : null}
    >
      {content}
    </Tag>
  )
}
Default.story = {
  name: 'default',
}

export const TagGroup = () => {
  const tags = ['Remote audit', 'Onsite', 'GMP (APIs)']
  // const content = text('Content', 'remote audit')
  const withOnClick = boolean('Has onClick function?', false)
  // eslint-disable-next-line no-alert
  const onClick = withOnClick ? () => alert('Clicked') : undefined
  const size = select('Size', ['small', 'standard'], 'standard')
  const tone = select(
    'Tone',
    ['positive', 'neutral', 'critical', 'caution', 'info'],
    'neutral'
  )
  const withIcon = boolean('With icon?')
  const iconName = text('Icon', 'document')
  const withTrailingIcon = boolean('With trailing icon?')
  const trailingIconName = text('Trailing icon', 'pencil')

  return (
    <Inline space={3}>
      {tags.map(tag => (
        <Tag
          key={tag}
          onClick={onClick}
          tone={tone}
          size={size}
          icon={withIcon ? <Icon name={iconName} /> : null}
          trailingIcon={
            withTrailingIcon ? <Icon name={trailingIconName} /> : null
          }
        >
          {tag}
        </Tag>
      ))}
    </Inline>
  )
}
TagGroup.story = {
  name: 'Tag group',
}

export const InsideText = () => {
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
        <Tag onClick={() => {}}>Clickable Tag</Tag>
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
InsideText.story = {
  name: 'inside text',
}
