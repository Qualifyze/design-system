import React from 'react'

import Box from '../Box'
import Container from '../Container'
import Heading from '../Heading'
import Text from '../Text'
import TextLink from '../TextLink'
import List from '../List'
import Stack from '../Stack'

import { Tabs } from '.'

export default { title: 'Tabs', component: Tabs }

export const Default = () => {
  return (
    <Tabs defaultValue="bar">
      <Tabs.List>
        <Tabs.Trigger value="bar">TabBar</Tabs.Trigger>
        <Tabs.Trigger value="triggers">TabTrigger</Tabs.Trigger>
        <Tabs.Trigger value="content">Content</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="bar">
        <List>
          <Text>
            A really simple Tabs component built on top of the{' '}
            <TextLink href="https://www.radix-ui.com/docs/primitives/components/tabs">
              Tabs component from Radix UI.
            </TextLink>
          </Text>
          <Text>
            If you want to check out more, follow the{' '}
            <TextLink href="https://www.radix-ui.com/docs/primitives">
              link
            </TextLink>
          </Text>
        </List>
      </Tabs.Content>
      <Tabs.Content value="triggers">
        <Text>Triggers!!</Text>
      </Tabs.Content>
      <Tabs.Content value="content">
        <List>
          <Text>
            You can place whatever you want inside the TabContent or place them
            inside other components if you want them to share styling
          </Text>
          <Text>
            Check the &quot;withOverview&quot; example for a more opinionated
            example.
          </Text>
        </List>
      </Tabs.Content>
    </Tabs>
  )
}
Default.story = {
  name: 'default',
}

const cardStyles = { borderRadius: 3, px: 4, py: 3, bg: 'white', mb: 3 }

export const Example = () => {
  return (
    <Box sx={{ minHeight: '100%', bg: 'background.100' }}>
      <Tabs defaultValue="requests">
        <Box sx={{ bg: 'white' }}>
          <Container maxWidth="page">
            <Box sx={{ py: 4 }}>
              <Stack space={2}>
                <Heading as="h1" level={3}>
                  Siegfried Minden GmbH
                </Heading>
                <Text>Siegfried PharmaChemikalien Minden GmbH</Text>
                <Text>Karlstrasse 15, 32423 Minden, Germany</Text>
              </Stack>
            </Box>
            <Tabs.List>
              <Tabs.Trigger value="requests">Requests</Tabs.Trigger>
              <Tabs.Trigger value="contacts">Contacts</Tabs.Trigger>
              <Tabs.Trigger value="capa">CAPA</Tabs.Trigger>
              <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
              <Tabs.Trigger value="auditee">Auditee</Tabs.Trigger>
            </Tabs.List>
          </Container>
        </Box>
        <Box sx={{ py: 4 }}>
          <Container maxWidth="page">
            <Box>
              <Tabs.Content value="requests">
                {[
                  'Crystallized ascorbic acid, Ascorbic acid Type EC coated, Dexpanthenol, Calcium Panthotenate',
                  'Guaifenesinum',
                  'Crystallized ascorbic acid, Ascorbic acid Type EC coated',
                ].map(item => (
                  <Box key={item} sx={{ ...cardStyles }}>
                    {item}
                  </Box>
                ))}
              </Tabs.Content>
              <Tabs.Content value="contacts">
                {['Acme Co.', 'Binford Ltd.', 'Big Kahuna Burger Ltd.'].map(
                  item => (
                    <Box key={item} sx={{ ...cardStyles }}>
                      {item}
                    </Box>
                  )
                )}
              </Tabs.Content>
              <Tabs.Content value="capa">CAPA</Tabs.Content>
              <Tabs.Content value="reports">Reports</Tabs.Content>
              <Tabs.Content value="auditee">Auditee</Tabs.Content>
            </Box>
          </Container>
        </Box>
      </Tabs>
    </Box>
  )
}
Example.story = {
  name: 'example from app',
  parameters: {
    layout: 'fullscreen',
  },
}
