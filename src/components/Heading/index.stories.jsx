import React from 'react'
import { text, select } from '@storybook/addon-knobs'

import Text from '../Text'

import Heading from './index'

export default { title: 'Heading', component: Heading }

export const Default = () => {
  const content = text('Text', 'Hello world')
  const availableLevels = [1, 2, 3, 4]
  const level = select('Level', availableLevels, 1)
  const availableWeights = ['regular', 'weak']
  const weight = select('Weight', availableWeights, 'regular')

  return (
    <Heading level={level} weight={weight}>
      {content}
    </Heading>
  )
}
Default.story = {
  name: 'default',
}

export const AllHeadings = () => {
  const content = text('Text', 'Hello world')

  return (
    <>
      <Heading level={1}>{content}</Heading>
      <Heading level={2}>{content}</Heading>
      <Heading level={3}>{content}</Heading>
      <Heading level={4}>{content}</Heading>
      <Text mt={2}>
        Business-to-business founders hackathon buzz conversion supply chain
        social media. Crowdfunding startup infographic user experience facebook
        paradigm shift iteration marketing beta business-to-consumer.
      </Text>
    </>
  )
}
AllHeadings.story = {
  name: 'all',
}
