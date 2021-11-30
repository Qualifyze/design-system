import React from 'react'
import { select } from '@storybook/addon-knobs'

import Box from '../Box'
import Heading from '../Heading'
import Text from '../Text'

import { Tabs, TabList, TabContent, TabTrigger } from '.'

export default { title: 'Tabs', component: Tabs }

export const Default = () => {
  const paddingX = select('paddingX', [0, 1, 2, 3, 4, 5], 0)
  const space = select('space', [0, 1, 2, 3, 4, 5], 3)
  return (
    <Tabs defaultValue="bar">
      <TabList paddingX={paddingX} space={space}>
        <TabTrigger value="bar">TabBar</TabTrigger>
        <TabTrigger value="triggers">TabTrigger</TabTrigger>
        <TabTrigger value="content">Content</TabTrigger>
      </TabList>
      <TabContent value="bar">
        <Text>
          You can manage the distance between the TabTriggers components with
          the prop &quot;space&quot; of the &quot;TabList&quot;.
        </Text>
        <Text>Play around with it to check it out.</Text>
        <Text>
          The TabBar itself contains no padding but rather it provides the props
          to its children. Check the next tab for more info.
        </Text>
      </TabContent>
      <TabContent value="triggers">
        <Text>
          PaddingX from TabList will increase the padding of each TabTrigger.
          The reasons are:
        </Text>
        <Text>- keep all items consistent</Text>
        <Text>
          - keep the fist child aligned with any outside content like a Heading
        </Text>
        <Text>
          - maintain the bottom line from the first child at the beginning of
          the TabBar
        </Text>
      </TabContent>
      <TabContent value="content">
        <Text>
          You can place whatever you want inside the TabContent or place them
          inside other components if you want them to share styling
        </Text>
        <Text>
          Check the &quot;withOverview&quot; example for a more opinionated
          example.
        </Text>
      </TabContent>
    </Tabs>
  )
}
Default.story = {
  name: 'default',
}

export const WithOverview = () => {
  const padding = select('paddingX', [0, 1, 2, 3, 4, 5], 2)

  return (
    <Tabs defaultValue="requests">
      <Box sx={{ bg: 'secondary.100' }}>
        <Box sx={{ py: 4, px: padding }}>
          <Heading level={3}>
            A title that is align with the first TabTrigger
          </Heading>
        </Box>
        <TabList paddingX={padding}>
          <TabTrigger value="requests">Requests</TabTrigger>
          <TabTrigger value="audits">Audits</TabTrigger>
          <TabTrigger value="reports">Reports</TabTrigger>
        </TabList>
      </Box>
      <Box sx={{ paddingTop: 4, px: padding }}>
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
