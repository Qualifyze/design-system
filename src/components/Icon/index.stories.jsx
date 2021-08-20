import React from 'react'
import { select, text } from '@storybook/addon-knobs'

import { styled, space } from '../../util/style'
import Text from '../Text'

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
        <Icon name={iconName} />
        <span>{iconName}</span>
      </IconWrapper>
    )
  })
  return <AllIconsContainer m={4}>{renderIcons}</AllIconsContainer>
}
DefaultIcons.story = {
  name: 'all Icons',
}
