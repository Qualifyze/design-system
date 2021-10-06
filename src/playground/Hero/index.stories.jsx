/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import Box from '../../components/Box'
import Stack from '../../components/Stack'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Columns from '../../components/Columns'
import Column from '../../components/Column'
import TextLink from '../../components/TextLink'
import Actions from '../../components/Actions'

export default { title: 'Playground/Hero' }

const dummyCTAData = [
  {
    headline: 'Traction leverage business-to-business incubator.',
    body: 'Founders disruptive research & development scrum project holy grail twitter. MVP lean startup startup.',
    link: 'Ecosystem equity validation',
  },
  {
    headline: 'Launch party infographic',
    body: 'Value proposition learning curve investor partnership seed money interaction.',
    link: 'Crowdsource founders freemium innovator equity',
  },
  {
    headline: 'Paradigm shift stock',
    body: 'Mass market strategy social proof business plan validation learning curve value proposition return on investment focus direct mailing release technology founders metrics.',
    link: 'Business model canvas growth hacking',
  },
]

const CTACard = ({ content }) => (
  <Card
    sx={{
      'height': '100%',
      'px': [4, 4, 4],
      'py': [3, 4, 4],
      'boxShadow': 4,
      'cursor': 'pointer',
      '&:hover, &:focus': {
        'bg': 'primary.100',
        // Hacky McHackface, please don't copy this.
        // It's a very unique use case
        'p:hover, p:focus': {
          textDecoration: 'none !important',
        },
      },
    }}
  >
    <Box>
      <Stack space={3}>
        <Heading as="h3" level={4} weight="weak" color="primary.600">
          {content.headline}
        </Heading>
        <Text>{content.body}</Text>
        <TextLink as="p" href="#">
          {content.link}
        </TextLink>
      </Stack>
    </Box>
  </Card>
)

export const Default = () => {
  const showCards = boolean('Show cards?', true)
  const showImage = boolean('Show image?', true)
  const headingText = text(
    'Heading',
    'Your reliable partner for GxP audits in pharma'
  )
  const bodyText = text(
    'Body',
    'Global audit expertise and flexiblity. Large database for immediate availability and cost savings. APIs, excipients, distribution, packaging and more.'
  )
  const buttonText = text('Button', 'Get the audit reports you need')
  const bgImage = text('Image', '')

  return (
    <Box sx={{ bg: 'background.100' }}>
      <Box sx={{ px: [3, 4, 5], py: [4, 5, 6] }}>
        <Box sx={{ maxWidth: 'page', mx: 'auto' }}>
          <Box sx={{ zIndex: '10' }}>
            <Stack space={[4, 5]}>
              <Box sx={{ maxWidth: 'medium', pr: [0, null, 5] }}>
                <Heading as="h1" level={1}>
                  {headingText}
                </Heading>
              </Box>
              <Box sx={{ maxWidth: 'narrow' }}>
                <Text size={['standard', 'large']}>{bodyText}</Text>
              </Box>
              <Box>
                <Actions>
                  <Button size="large">{buttonText}</Button>
                </Actions>
              </Box>
            </Stack>
          </Box>

          {showCards ? (
            <Box sx={{ zIndex: 10, maxWidth: 'page', mx: 'auto', pt: [4, 5] }}>
              <Columns space={[4, 4]} collapseBelow="tablet" alignY="stretch">
                {dummyCTAData.map(card => (
                  <Column key={card.headline}>
                    <CTACard content={card} />
                  </Column>
                ))}
              </Columns>
            </Box>
          ) : null}
        </Box>
      </Box>

      {showImage ? (
        <Box
          sx={{
            // Page width is 1400px + some padding.
            // `calc()` is still annoying in IE11.
            maxWidth: '1656px',
            mx: 'auto',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              width: ['100%', null, '50%'],
              py: [0, null, 4],
              pr: [0, null, 4],
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: [0, null, 4],
                overflow: 'hidden',
                width: '100%',
                height: '100%',
              }}
            >
              <img
                src={
                  bgImage.length
                    ? bgImage
                    : 'https://source.unsplash.com/random/500x500?orientation=portrait'
                }
                alt="Hero background"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPositon: '50% 50%',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  // `primary.100` is .85 opacity
                  bg: 'hsla(221, 100%, 97%, 0.85)',
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}
Default.story = {
  name: 'default',
}
