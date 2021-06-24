import React from 'react'
import { select, number, array, text } from '@storybook/addon-knobs'

import Column from '../Column'
import Box from '../Box'
import Text from '../Text'
import Card from '../Card'
import Button from '../Button'
import Heading from '../Heading'
import Stack from '../Stack'
import Placeholder from '../private/Placeholder'

import Columns from './index'

export default { title: 'Columns', component: Columns }

export const Default = () => {
  const space = number('Space', 2)
  const alignY = array('Align Y', ['bottom', 'top', 'center'])
  const align = array('Align', ['right', 'left', 'left'])
  const collapseBellow = select(
    'Collapse bellow',
    ['mobile', 'tablet', 'desktop'],
    'mobile'
  )

  return (
    <Columns
      alignY={alignY}
      align={align}
      space={space}
      collapseBelow={collapseBellow}
    >
      <Column width="40%">
        <Placeholder height={50} width="100%" label="hello there top" />
      </Column>
      <Column width="60%">
        <Placeholder height={60} width="100%" label="hello there" />
      </Column>
      <Column width="50%">
        <Placeholder height={70} width="100%" label="hello there" />
      </Column>
      <Column width="50%">
        <Placeholder height={50} width="100%" label="hello there" />
      </Column>
      <Column width="100%">
        <Placeholder height={100} width="100%" label="hello there bottom" />
      </Column>
    </Columns>
  )
}
Default.story = {
  name: 'default',
}

export const EqualHeight = () => {
  const col1 = text(
    'Left column',
    'Jelly beans sugar plum jelly-o. Jelly sesame snaps jelly-o sesame snaps powder marzipan jelly.'
  )
  const col2 = text(
    'Center column',
    'Chocolate bar gummies danish. Soufflé tootsie roll candy candy.'
  )
  const col3 = text(
    'Right column',
    'Candy donut dragée lemon drops topping. Fruitcake toffee pie gummies cheesecake. Chocolate gingerbread tiramisu halvah chocolate cupcake candy canes jelly-o croissant. Fruitcake wafer pudding marzipan chocolate danish. Tootsie roll sesame snaps sweet roll cookie fruitcake toffee.'
  )

  const collapseBellow = select(
    'Collapse bellow',
    ['mobile', 'tablet', 'desktop'],
    'mobile'
  )

  return (
    <Box sx={{ p: 4, bg: 'papayawhip' }}>
      <Columns alignY="stretch" space={4} collapseBelow={collapseBellow}>
        <Column>
          <Card sx={{ height: '100%', boxShadow: 4 }}>
            <Text>{col1}</Text>
          </Card>
        </Column>
        <Column>
          <Card sx={{ height: '100%', boxShadow: 4 }}>
            <Text>{col2}</Text>
          </Card>
        </Column>
        <Column>
          <Card sx={{ height: '100%', boxShadow: 4 }}>
            <Text>{col3}</Text>
          </Card>
        </Column>
      </Columns>
    </Box>
  )
}
EqualHeight.story = {
  name: 'equal height columns',
}

export const NoCollapse = () => {
  return (
    <Box>
      <Columns alignY="stretch" space={2}>
        <Column width="20%">
          <Placeholder height={50} width="100%" label="20%" />
        </Column>
        <Column width="60%">
          <Placeholder height={50} width="100%" label="60%" />
        </Column>
        <Column width="20%">
          <Placeholder height={50} width="100%" label="20%" />
        </Column>
      </Columns>
    </Box>
  )
}
NoCollapse.story = {
  name: 'not collapsing columns',
}

export const ContentWidth = () => {
  return (
    <Box>
      <Columns alignY="stretch" space={2}>
        <Column width="auto">
          <Placeholder height={50} label="Short text here" />
        </Column>
        <Column width="auto">
          <Placeholder height={50} label="Slightly longer text here" />
        </Column>
        <Column width="fill">
          <Placeholder height={50} label="Fill rest" />
        </Column>
      </Columns>
    </Box>
  )
}
ContentWidth.story = {
  name: 'content widths',
}

export const ExampleWithButton = () => {
  return (
    <Box>
      <Card>
        <Stack space={3}>
          <Box>
            <Heading as="h2" level={4}>
              Your next steps
            </Heading>
          </Box>
          <Box>
            <Columns space={3} collapseBelow="mobile">
              <Column width="fill">
                <Text>
                  Your comments over the report had been uploaded. We will
                  upload the final report shortly.
                </Text>
              </Column>
              <Column width="auto">
                <Button>Continue</Button>
              </Column>
            </Columns>
          </Box>
        </Stack>
      </Card>
    </Box>
  )
}
ExampleWithButton.story = {
  name: 'example with Button',
}
