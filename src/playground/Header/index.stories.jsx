/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { ThemeProvider, theme, styled } from '../../util/style'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Inline from '../../components/Inline'

export default { title: 'Playground | Header' }

const localColors = {
  white: 'hsl(0, 0%, 100%)',
  slate: {
    1: 'hsl(206 30.0% 98.8%)',
    2: 'hsl(210 16.7% 97.6%)',
    3: 'hsl(209 13.3% 95.3%)',
    4: 'hsl(209 12.2% 93.2%)',
    5: 'hsl(208 11.7% 91.1%)',
    6: 'hsl(208 11.3% 88.9%)',
    7: 'hsl(207 11.1% 85.9%)',
    8: 'hsl(205 10.7% 78.0%)',
    9: 'hsl(206 6.0% 56.1%)',
    10: 'hsl(206 5.8% 52.3%)',
    11: 'hsl(206 6.0% 43.5%)',
    12: 'hsl(206 24.0% 9.0%)',
  },
  brand: {
    1: 'hsl(225 60.0% 99.4%)',
    2: 'hsl(223 100% 98.6%)',
    3: 'hsl(223 98.4% 97.1%)',
    4: 'hsl(223 92.9% 95.0%)',
    5: 'hsl(224 87.1% 92.0%)',
    6: 'hsl(224 81.9% 87.8%)',
    7: 'hsl(225 77.4% 82.1%)',
    8: 'hsl(226 75.4% 74.5%)',
    9: 'hsl(226 70.0% 55.5%)',
    10: 'hsl(226 58.6% 51.3%)',
    11: 'hsl(226 55.0% 45.0%)',
    12: 'hsl(226 62.0% 17.0%)',
  },
}

const localFontSizes = [12, 14, 16, 20, 28, 36, 48]

const localTheme = {
  ...theme,
  fontsizes: localFontSizes,
  colors: { ...theme.colors, ...localColors },
}

const Avatar = styled(AvatarPrimitive.Root)(props => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: props.theme.colors.slate[9],
}))

const AvatarImage = styled(AvatarPrimitive.Image)(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
}))

const AvatarFallback = styled(AvatarPrimitive.Fallback)(props => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: props.theme.colors.slate[9],
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
}))

const MenuItem = ({ children, href, isActive }) => {
  return (
    <Flex
      as="a"
      href={href}
      sx={{
        'textDecoration': 'none',
        'color': 'slate.11',
        'fontSize': '1',
        'fontWeight': '600',
        'alignItems': 'center',
        'px': 3,
        'boxShadow': isActive ? 'inset 0 -2px 0 0 hsl(226 70.0% 55.5%)' : null,
        '&:hover': { color: 'slate.12', bg: 'slate.2' },
      }}
    >
      {children}
    </Flex>
  )
}

export const Default = () => {
  return (
    <ThemeProvider theme={localTheme}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          bg: 'slate.3',
        }}
      >
        <Box
          as="header"
          sx={{
            bg: 'white',
            ml: '-50px',
            mr: '-50px',
            pl: '50px',
            pr: '50px',
            boxShadow: `2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
                        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
                        12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
                        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
                        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
                        100px 100px 80px rgba(0, 0, 0, 0.07)`,
          }}
        >
          <Flex
            as="nav"
            role="navigation"
            aria-label="Main Navigation"
            sx={{ flexDirection: 'row' }}
          >
            <Flex sx={{ px: 3, py: 3 }}>
              <Flex sx={{ '& svg': { maxWidth: '120px' } }}>
                <Logo />
              </Flex>
            </Flex>
            <Flex>
              <Flex sx={{ flexDirection: 'row' }}>
                <MenuItem href="#" isActive>
                  Requests
                </MenuItem>
                <MenuItem href="#">Reports</MenuItem>
                <MenuItem href="#">Search</MenuItem>
              </Flex>
            </Flex>
            <Flex sx={{ ml: 'auto', alignItems: 'center' }}>
              <Inline>
                <Button icon={<Icon name="plus" size="tiny" />}>
                  Request audit
                </Button>
              </Inline>
            </Flex>
            <Flex sx={{ px: 3 }}>
              <Flex
                sx={{ alignItems: 'center', justifyContent: 'center', p: 2 }}
              >
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    alt="Colm Tuite"
                  />
                  <AvatarFallback delayMs={600}>CT</AvatarFallback>
                </Avatar>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
Default.story = {
  name: 'default',
}
