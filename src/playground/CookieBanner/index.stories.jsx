/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Card from '../../components/Card'
import TextLink from '../../components/TextLink'
import TextLinkButton from '../../components/TextLinkButton'

export default { title: 'Playground | CookieBanner' }

export const Default = () => {
  return (
    <Box
      sx={{
        pointerEvents: 'none',
        position: 'fixed',
        zIndex: '900',
        bottom: 0,
        left: 0,
        right: 0,
        px: [3],
        pb: [3],
      }}
    >
      <Container maxWidth="medium">
        <Card boxShadow={6} sx={{ bg: 'primary.900' }}>
          <Flex
            sx={{
              pointerEvents: 'auto',
              flexDirection: ['column', null, 'row'],
            }}
          >
            <Flex
              sx={{
                'flex': '1 1 0%',
                'pr': [0, null, 4],
                'mb': [4, null, 0],
                '& a': { color: 'inherit' },
              }}
            >
              <Text tone="lightneutral" size="small">
                We use cookies to ensure we can offer the best possible
                experience to you and to constantly improve our service. By
                continuing to use this website you agree to our usage of
                cookies. <TextLink href="#">Read more.</TextLink>
              </Text>
            </Flex>
            <Flex
              sx={{
                flexDirection: ['column', null, 'row'],
                justifyContent: ['flex-end'],
                alignItems: [null, null, 'center'],
              }}
            >
              <Flex
                sx={{
                  'justifyContent': ['center'],
                  'mb': [4, null, 0],
                  'mr': [0, null, 4],
                  '& [role=button]': {
                    color: 'primary.100',
                    display: 'block',
                    textAlign: 'center',
                    fontSize: 1,
                    paddingTop: '14px',
                    paddingBottom: '14px',
                    width: '100%',
                  },
                }}
              >
                <TextLinkButton onClick={() => alert('rejected')}>
                  Reject
                </TextLinkButton>
              </Flex>
              <Flex sx={{ flexDirection: 'column' }}>
                <Button onClick={() => alert('accepted')} variant="secondary">
                  Allow cookies
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Box>
  )
}
Default.story = {
  name: 'default',
}
