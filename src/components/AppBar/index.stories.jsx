import { boolean, number, select } from '@storybook/addon-knobs'
import React, { useMemo } from 'react'

import { theme as baseTheme, ThemeProvider } from '../../util/style'
import Box from '../Box'
import LoremIpsum from '../private/LoremIpsum'

import AppBar from './index'

export default { title: 'AppBar' }

function useTheme(version) {
  return useMemo(() => {
    switch (version) {
      case 'blue':
        return baseTheme
      case 'pink':
        return {
          ...baseTheme,
          colors: {
            ...baseTheme.colors,
            primary: {
              100: 'hsl(305, 84%, 94%)',
              200: 'hsl(305, 84%, 77%)',
              300: 'hsl(305, 84%, 62%)',
              400: 'hsl(305, 84%, 48%)',
              500: 'hsl(305, 84%, 36%)',
              600: 'hsl(305, 84%, 30%)',
              700: 'hsl(305, 84%, 24%)',
              800: 'hsl(305, 84%, 19%)',
              900: 'hsl(305, 84%, 14%)',
            },
          },
        }
      default:
        throw new Error(`Invalid theme version: ${version}`)
    }
  }, [version])
}

export const Default = () => {
  const position = select(
    'position',
    { static: 'static', fixed: 'fixed' },
    'static'
  )

  const collapseBelow = select(
    'collapse below',
    { small: 'small', medium: 'medium', large: 'large' },
    'medium'
  )

  const numberOfNavItems = number('number of nav items', 2, { min: 0 })

  const primaryAction = boolean('primary action', true)
  const secondaryAction = boolean('secondary action', true)
  const secondaryNav = boolean('secondary nav item', true)

  const themeVersion = select('theme', { blue: 'blue', pink: 'pink' }, 'blue')
  const theme = useTheme(themeVersion)

  return (
    <ThemeProvider theme={theme}>
      <AppBar position={position} collapseBelow={collapseBelow}>
        <AppBar.Logo>Logo</AppBar.Logo>
        {numberOfNavItems > 0 && (
          <AppBar.PrimaryNav>
            {Array.from(Array(numberOfNavItems).keys()).map(i => (
              <AppBar.NavItem key={i} active={i === 0}>
                Page #{i + 1}
              </AppBar.NavItem>
            ))}
          </AppBar.PrimaryNav>
        )}
        {secondaryNav && (
          <AppBar.SecondaryNav>
            <AppBar.NavMenuItem label="Secondary">Hello!</AppBar.NavMenuItem>
          </AppBar.SecondaryNav>
        )}
        {primaryAction && (
          <AppBar.PrimaryActions>
            <AppBar.Button>Primary Action</AppBar.Button>
          </AppBar.PrimaryActions>
        )}
        {secondaryAction && (
          <AppBar.SecondaryActions>
            <AppBar.Button variant="secondary">Secondary Action</AppBar.Button>
          </AppBar.SecondaryActions>
        )}
      </AppBar>
      <Box as="main" sx={{ p: 4, mt: position === 'fixed' ? 70 : 0 }}>
        <LoremIpsum paragraphs={12} />
      </Box>
    </ThemeProvider>
  )
}

Default.story = {
  name: 'default',
}

Default.parameters = {
  layout: 'fullscreen',
}
