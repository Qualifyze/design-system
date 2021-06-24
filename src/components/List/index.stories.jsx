/* eslint-disable no-alert */
import React from 'react'

import Box from '../Box'
import Text from '../Text'
import TextLink from '../TextLink'
import TextLinkButton from '../TextLinkButton'
import Icon from '../Icon'
import Stack from '../Stack'

import List from './index'

export default { title: 'List', component: List }

export const Default = () => {
  return (
    <List>
      <Text>This is a nested list item.</Text>
      <Text>This is a nested list item.</Text>
      <Text>This is a nested list item.</Text>
    </List>
  )
}
Default.story = {
  name: 'default',
}

export const Numbered = () => {
  return (
    <List type="number">
      <Text>This is a nested list item.</Text>
      <Text>This is a nested list item.</Text>
      <Text>This is a nested list item.</Text>
    </List>
  )
}
Numbered.story = {
  name: 'numbered',
}

export const WithParagraphs = () => {
  return (
    <List space={5}>
      <Stack space={2}>
        <Text>This is a paragraph.</Text>
        <Text>This is another paragraph.</Text>
      </Stack>
      <Stack space={2}>
        <Text>This is a paragraph.</Text>
        <Text>This is another paragraph.</Text>
      </Stack>
    </List>
  )
}
WithParagraphs.story = {
  name: 'with paragraphs',
}

export const Nested = () => {
  return (
    <List space={4} type="number">
      <Stack>
        <Text>This has a nested list.</Text>
        <List>
          <Text>This is a nested list item.</Text>
          <Text>This is a nested list item.</Text>
          <Text>This is a nested list item.</Text>
        </List>
      </Stack>
      <Stack>
        <Text>This has a nested list.</Text>
        <List>
          <Text>This is a nested list item.</Text>
          <Text>This is a nested list item.</Text>
          <Text>This is a nested list item.</Text>
        </List>
      </Stack>
    </List>
  )
}
Nested.story = {
  name: 'nested',
}

export const CustomStart = () => {
  return (
    <List type="number" start={7}>
      <Text>This is a nested list item.</Text>
      <Text>This is a nested list item.</Text>
      <Text>This is a nested list item.</Text>
    </List>
  )
}
CustomStart.story = {
  name: 'custom start',
}

export const WithIcons = () => {
  return (
    <Stack space={3}>
      <Box>
        <Text>Follow the steps below to destroy the Death Star.</Text>
      </Box>
      <Box>
        <List type="number">
          <Text>
            <TextLink
              href="https://starwars.fandom.com/wiki/Thermal_exhaust_port"
              icon={<Icon name="download" />}
            >
              Download the leaked blueprints
            </TextLink>
          </Text>
          <Text>Find a vulnerable thermal exhaust port</Text>
          <Text>Do NOT wait until it destroys Alderaan and Jedha City!</Text>
          <Text>Fire two proton torpedoes into the exhaust port</Text>
          <Text>
            <TextLinkButton
              onClick={() => alert(`🥳🥳🥳`)}
              icon={<Icon name="trophy" />}
            >
              Have a party on Yavin 4
            </TextLinkButton>
          </Text>
        </List>
      </Box>
    </Stack>
  )
}
WithIcons.story = {
  name: 'with Icons, Links and Buttons',
}
