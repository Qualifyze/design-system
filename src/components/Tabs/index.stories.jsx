import React from 'react'

import Box from '../Box'
import Heading from '../Heading'
import Text from '../Text'
import TextLink from '../TextLink'
import List from '../List'

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

export const WithOverview = () => {
  return (
    <Tabs defaultValue="requests">
      <Box sx={{ bg: 'secondary.100' }}>
        <Box sx={{ py: 4, px: 3 }}>
          <Heading level={3}>
            A title that is align with the first TabTrigger
          </Heading>
        </Box>
        <TabList>
          <TabTrigger value="requests">Requests</TabTrigger>
          <TabTrigger value="audits">Audits</TabTrigger>
          <TabTrigger value="reports">Reports</TabTrigger>
        </TabList>
      </Box>
      <Box sx={{ paddingTop: 4, px: 3 }}>
        <TabContent value="requests">
          Some list of request align with everything else.
        </TabContent>
        <TabContent value="audits">Some list of audits</TabContent>
        <TabContent value="reports">REPORTS!!!</TabContent>
      </Box>
    </Tabs>
  )
}
WithOverview.story = {
  name: 'with Overview',
}
