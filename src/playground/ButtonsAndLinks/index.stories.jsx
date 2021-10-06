/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Box from '../../components/Box'
import Stack from '../../components/Stack'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'
import ButtonLink from '../../components/ButtonLink'
import TextLink from '../../components/TextLink'
import TextLinkButton from '../../components/TextLinkButton'
import Card from '../../components/Card'
import List from '../../components/List'
import Inline from '../../components/Inline'

export default { title: 'Playground/Buttons and Links' }

export const Default = () => {
  return (
    <Box sx={{ bg: 'background.100' }}>
      <Box sx={{ px: [3, 4, 5], py: [4, 5, 6] }}>
        <Box sx={{ maxWidth: 'page', mx: 'auto' }}>
          <Stack space={[4, 5]}>
            <Heading as="h1" level={1}>
              Buttons and Links
            </Heading>

            <List>
              <Text>
                Links are for when you link to places, normally via a href prop.
                This is usually some form of navigation
              </Text>
              <Text>
                Buttons are for doing some work, normally with something like an
                onclick event. Buttons can still cause some form of navigation.
                But this is normally an additional thing that happens along side
                some other work. Which is why you would maybe need an onClick
                handler.
              </Text>
            </List>

            <Card>
              <Stack space={2}>
                <Heading as="h2" level={2}>
                  Buttons
                </Heading>

                <Inline space={2} alignY="center">
                  <ButtonLink href="qualifyze.com">Button Link</ButtonLink>
                  <Text>
                    A <strong>{`<ButtonLink>`}</strong> looks like a button but
                    navigates on click and does not have any work done in a
                    onClick handler
                  </Text>
                </Inline>

                <Inline space={2} alignY="center">
                  <Button
                    onClick={() => {
                      alert('I was clicked')
                    }}
                  >
                    Button
                  </Button>
                  <Text>
                    A <strong>{`<Button>`}</strong> that looks like a button but
                    has an onClick handler to do the work
                  </Text>
                </Inline>
              </Stack>
            </Card>

            <Card>
              <Stack space={2}>
                <Heading as="h2" level={2}>
                  TextLinks
                </Heading>

                <Inline space={2} alignY="center">
                  <TextLink href="qualifyze.com">TextLink</TextLink>
                  <Text>
                    A <strong>{`<TextLink>`}</strong> is a link that looks like
                    text and does some form of navigation
                  </Text>
                </Inline>

                <Inline space={2} alignY="center">
                  <TextLinkButton
                    onClick={() => {
                      alert('I was clicked')
                    }}
                  >
                    TextLinkButton
                  </TextLinkButton>
                  <Text>
                    A <strong>{`<TextLinkButton>`}</strong> is a link that looks
                    like text and does some work in an onClick handler
                  </Text>
                </Inline>
              </Stack>
            </Card>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
Default.story = {
  name: 'default',
}
