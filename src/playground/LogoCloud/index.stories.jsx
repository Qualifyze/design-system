/* eslint-disable react/no-array-index-key */
import React from 'react'
import { number } from '@storybook/addon-knobs'

import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Stack from '../../components/Stack'
import Tiles from '../../components/Tiles'
import Container from '../../components/Container'
import Placeholder from '../../components/private/Placeholder'

export default { title: 'Playground/Logo Cloud' }

export const Default = () => {
  const count = number('Number of logos', 8)

  return (
    <Box sx={{ px: [3, 4, 5], py: [4, 5, 6], bg: 'background.0' }}>
      <Stack space={3}>
        <Text as="h2" weight="medium" align="center">
          Trusted by a handful of very nice people
        </Text>
        <Box>
          <Container maxWidth="medium">
            <Tiles columns={[2, 3, 5]} space={3} align="center">
              {Array(count || 8)
                .fill()
                .map((_, i) => (
                  <Flex key={i} sx={{ justifyContent: 'center' }}>
                    <Placeholder height={50} width={100} />
                  </Flex>
                ))}
            </Tiles>
          </Container>
        </Box>
      </Stack>
    </Box>
  )
}
Default.story = {
  name: 'default',
}
