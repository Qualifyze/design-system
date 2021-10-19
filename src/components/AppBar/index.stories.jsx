import { select } from '@storybook/addon-knobs'
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
    'collapseBelow',
    { small: 'small', medium: 'medium', large: 'large' },
    'medium'
  )

  return (
    <>
      <AppBar position={position} collapseBelow={collapseBelow}>
        <AppBar.Logo>Logo</AppBar.Logo>
        <AppBar.PrimaryNav>
          <AppBar.NavItem active>Page #1</AppBar.NavItem>
          <AppBar.NavItem>Page #2</AppBar.NavItem>
        </AppBar.PrimaryNav>
        <AppBar.SecondaryNav>
          <AppBar.NavItem>Secondary Nav</AppBar.NavItem>
        </AppBar.SecondaryNav>
        <AppBar.PrimaryActions>
          <AppBar.Button>Primary Action</AppBar.Button>
        </AppBar.PrimaryActions>
        <AppBar.SecondaryActions>
          <AppBar.Button variant="secondary">Secondary Action</AppBar.Button>
        </AppBar.SecondaryActions>
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
