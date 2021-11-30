import React from 'react'

import Box from '../Box'
import Container from '../Container'
import Heading from '../Heading'
import Text from '../Text'
import TextLink from '../TextLink'
import List from '../List'
import Stack from '../Stack'

import { Tabs, TabList, TabContent, TabTrigger } from '.'

export default { title: 'Tabs', component: Tabs }

export const Default = () => {
  return (
    <Tabs defaultValue="bar">
      <TabList>
        <TabTrigger value="bar">TabBar</TabTrigger>
        <TabTrigger value="triggers">TabTrigger</TabTrigger>
        <TabTrigger value="content">Content</TabTrigger>
      </TabList>
      <TabContent value="bar">
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
      </TabContent>
      <TabContent value="triggers">
        <Text>Triggers!!</Text>
      </TabContent>
      <TabContent value="content">
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
      </TabContent>
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
            <TabList>
              <TabTrigger value="requests">Requests</TabTrigger>
              <TabTrigger value="contacts">Contacts</TabTrigger>
              <TabTrigger value="capa">CAPA</TabTrigger>
              <TabTrigger value="reports">Reports</TabTrigger>
              <TabTrigger value="auditee">Auditee</TabTrigger>
            </TabList>
          </Container>
        </Box>
        <Box sx={{ py: 4 }}>
          <Container maxWidth="page">
            <Box>
              <TabContent value="requests">
                {[
                  'Crystallized ascorbic acid, Ascorbic acid Type EC coated, Dexpanthenol, Calcium Panthotenate',
                  'Guaifenesinum',
                  'Crystallized ascorbic acid, Ascorbic acid Type EC coated',
                ].map(item => (
                  <Box key={item} sx={{ ...cardStyles }}>
                    {item}
                  </Box>
                ))}
              </TabContent>
              <TabContent value="contacts">
                {['Acme Co.', 'Binford Ltd.', 'Big Kahuna Burger Ltd.'].map(
                  item => (
                    <Box key={item} sx={{ ...cardStyles }}>
                      {item}
                    </Box>
                  )
                )}
              </TabContent>
              <TabContent value="capa">CAPA</TabContent>
              <TabContent value="reports">Reports</TabContent>
              <TabContent value="auditee">Auditee</TabContent>
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
