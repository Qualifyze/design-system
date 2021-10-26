import PropTypes from 'prop-types'
import React, { Children, useMemo } from 'react'

import { theme, ThemeProvider } from '../../util/style'
import Box from '../Box'
import Hidden from '../Hidden'
import Icon from '../Icon'

import Button from './Button'
import { AppBarContext, useAppBarContext } from './context'
import Logo from './Logo'
import Nav from './Nav'
import NavActions from './NavActions'
import NavItem from './NavItem'
import NavMenuItem from './NavMenuItem'
import PrimaryActions from './PrimaryActions'
import PrimaryNav from './PrimaryNav'
import SecondaryActions from './SecondaryActions'
import SecondaryNav from './SecondaryNav'

export default function AppBar({ collapseBelow, ...props }) {
  return (
    <AppBarContext collapseBelow={collapseBelow}>
      <AppBarContent {...props} />
    </AppBarContext>
  )
}

function selectElements(elements) {
  let logo = null
  let primaryNav = null
  let secondaryNav = null
  let primaryActions = null
  let secondaryActions = null

  if (elements) {
    Children.forEach(elements, element => {
      if (element) {
        const type = element.type.dsName

        if (type === 'AppBarLogo') {
          if (logo) {
            throw new Error('You can only have one <AppBar.Logo /> child.')
          }
          logo = element
        } else if (type === 'AppBarPrimaryNav') {
          if (primaryNav) {
            throw new Error(
              'You can only have one <AppBar.PrimaryNav /> child.'
            )
          }
          primaryNav = element
        } else if (type === 'AppBarSecondaryNav') {
          if (secondaryNav) {
            throw new Error(
              'You can only have one <AppBar.SecondaryNav /> child.'
            )
          }
          secondaryNav = element
        } else if (type === 'AppBarPrimaryActions') {
          if (primaryActions) {
            throw new Error(
              'You can only have one <AppBar.PrimaryActions /> child.'
            )
          }
          primaryActions = element
        } else if (type === 'AppBarSecondaryActions') {
          if (secondaryActions) {
            throw new Error(
              'You can only have one <AppBar.SecondaryActions /> child.'
            )
          }
          secondaryActions = element
        } else {
          throw new Error('Unexpected child in AppBar:', element)
        }
      }
    })
  }

  return { logo, primaryActions, secondaryActions, primaryNav, secondaryNav }
}

// We're already using the font sizes from Design System v2
const v2fontSizes = ['12px', '14px', '16px', '18px']

const themev2 = {
  ...theme,
  fontSizes: v2fontSizes,
}

function AppBarContent({ position, children: elements }) {
  const { collapsed, toggleExpanded, expanded } = useAppBarContext()
  const { logo, primaryActions, secondaryActions, primaryNav, secondaryNav } =
    useMemo(() => selectElements(elements), [elements])

  return (
    <ThemeProvider theme={themev2}>
      <Box
        as="header"
        sx={{
          bg: 'white',
          color: 'grey.700',
          // less than modal (500)
          zIndex: 400,
          height: collapsed ? 'auto' : '70px',
          display: 'flex',
          flexDirection: collapsed ? 'column' : 'row',
          alignItems: collapsed ? 'flex-start' : 'center',
          lineHeight: 1,
          boxShadow: 4,
          ...(position === 'fixed' && {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
          }),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: collapsed ? '100%' : 'auto',
            py: collapsed ? 3 : 0,
          }}
        >
          {logo}
          {collapsed && (
            <Box sx={{ ml: 'auto', pr: 3 }}>
              <Icon
                name={expanded ? 'cross' : 'menu'}
                onClick={toggleExpanded}
              />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: (collapsed && expanded) || !collapsed ? 'flex' : 'none',
            flexDirection: 'inherit',
            alignItems: 'inherit',
            flex: 1,
            width: collapsed ? '100%' : 'auto',
          }}
        >
          {collapsed && primaryActions && (
            <NavActions>{primaryActions}</NavActions>
          )}
          {primaryNav && <Nav>{primaryNav}</Nav>}
          {collapsed ? (
            <>
              {secondaryActions && <NavActions>{secondaryActions}</NavActions>}
              {secondaryNav && <Nav>{secondaryNav}</Nav>}
            </>
          ) : (
            <Nav align="right" padRight={!secondaryNav}>
              {primaryActions && <NavActions>{primaryActions}</NavActions>}
              {secondaryActions && <NavActions>{secondaryActions}</NavActions>}
              {secondaryNav}
            </Nav>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

AppBarContent.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['static', 'fixed']),
}

AppBarContent.defaultProps = {
  children: null,
  position: 'static',
}

AppBar.propTypes = {
  ...AppBarContent.propTypes,
  collapseBelow: Hidden.propTypes.below,
}

AppBar.defaultProps = {
  ...AppBarContent.defaultProps,
  collapseBelow: 'large',
}

AppBar.Button = Button
AppBar.Logo = Logo
AppBar.PrimaryActions = PrimaryActions
AppBar.SecondaryActions = SecondaryActions
AppBar.PrimaryNav = PrimaryNav
AppBar.SecondaryNav = SecondaryNav
AppBar.NavItem = NavItem
AppBar.NavMenuItem = NavMenuItem

export { useAppBarContext } from './context'
