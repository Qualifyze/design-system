import { boolean, number, select } from '@storybook/addon-knobs'
import React from 'react'

import Box from '../Box'
import LoremIpsum from '../private/LoremIpsum'

import AppBar from './index'

export default { title: 'AppBar' }

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

  return (
    <>
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
            <AppBar.NavMenuItem label="Secondary" />
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
    </>
  )
}

Default.story = {
  name: 'default',
}

Default.parameters = {
  layout: 'fullscreen',
}
