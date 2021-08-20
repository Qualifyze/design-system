import React from 'react'
import { select, text } from '@storybook/addon-knobs'

import { styled, space } from '../../util/style'
import Box from '../Box'
import Text from '../Text'
import Stack from '../Stack'

import basicIcons from './basicIcons'

import Icon from '.'

export default { title: 'Icons', component: Icon }

const AllIconsContainer = styled('div')(
  props => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    background: `${props.theme.colors.pageBackground}`,
  }),
  space
)

const IconWrapper = styled('div')(
  props => ({
    padding: '20px',
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 200px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '3px',

    span: {
      paddingLeft: '20px',
      color: `${props.theme.colors.secondary[800]}`,
    },
  }),
  space
)

export const Default = () => {
  const sizes = ['tiny', 'small', 'standard', 'large']
  const name = text('Name', 'information')
  const color = text('Color', 'primary.700')
  const fontSize = select('Size', sizes, 'standard')

  return (
    <>
      <Text size={fontSize}>
        MVP focus lean startup handshake vesting period entrepreneur value
        proposition hackathon technology. Partner network learning curve growth
        hacking business model{' '}
        <Icon name={name} color={color} size={fontSize} /> canvas. Iteration
        crowdsource strategy buyer agile development infographic equity social
        proof sales.
      </Text>
    </>
  )
}
Default.story = {
  name: 'default',
}

export const DefaultIcons = () => {
  const basicIconsKeys = Object.keys(basicIcons)
  const renderIcons = basicIconsKeys.map(iconName => {
    return (
      <IconWrapper key={iconName}>
        <Icon name={iconName} iconColor="primary.800" />
        <span>{iconName}</span>
      </IconWrapper>
    )
  })
  return <AllIconsContainer m={4}>{renderIcons}</AllIconsContainer>
}
DefaultIcons.story = {
  name: 'all Icons',
}

// eslint-disable-next-line react/prop-types
const Code = ({ children }) => (
  <Box
    as="span"
    sx={{
      display: 'inline',
      bg: 'grey.200',
      px: 2,
      py: 1,
      borderRadius: 2,
      pre: { display: 'inline', color: 'grey.900' },
    }}
  >
    <Text as="code">{children}</Text>
  </Box>
)

export const ColoredIcons = () => {
  const iconName = text('Icon name', 'trophy')
  const iconTone = select(
    'Example A: Icon tone',
    [
      'neutral',
      'positive',
      'critical',
      'secondary',
      'info',
      'caution',
      'current',
    ],
    'current'
  )
  const iconColor = text('Example B: Icon color', 'yellow.500')

  return (
    <Stack space={4}>
      <Stack space={2}>
        <Text weight="medium">Example A:</Text>
        <Text>
          When using an Icon, the suggested way to add color is by using the{' '}
          <Code>tone</Code> prop:
          <br />
          <Icon name={iconName} tone={iconTone} />
        </Text>
      </Stack>
      <Stack space={2}>
        <Text weight="medium">Example B:</Text>
        <Text>
          If you need to use a a very specific color for a very specific use
          case, you can set the <Code>color</Code> directly like this:
        </Text>
        <Icon name={iconName} color={iconColor} />
      </Stack>
    </Stack>
  )
}
ColoredIcons.story = {
  name: 'using colors',
}
