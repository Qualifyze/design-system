import {
  createHistory,
  createMemorySource,
  Link,
  LocationProvider,
  Router,
  useMatch,
} from '@reach/router'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'

import {
  AppBar,
  Avatar,
  Box,
  Button,
  colorFromString,
  Flex,
  Global,
  Heading,
  Logo,
  LoremIpsum,
  Menu,
  resetCSS,
  Stack,
  Text,
  theme,
  ThemeProvider,
} from '../..'
import { useAppBarContext } from '../../components/AppBar/context'
import { useResponsiveStyle } from '../../components/Hidden'

export default {
  title: 'Playground/Layout',
  decorators: [
    story => (
      <ThemeProvider theme={theme}>
        <Global styles={resetCSS} />
        {story()}
      </ThemeProvider>
    ),
  ],
}

function useUser() {
  const name = text('name', 'Testine Tester', 'user')
  const email = text('email', 'testine.tester@qualifyze.com', 'user')
  const team = text('team', 'Test GmbH', 'user')
  const avatar = boolean('avatar', true, 'user')
    ? `https://i.pravatar.cc/300?u=${email}`
    : undefined
  return { name, email, avatar, team }
}

// eslint-disable-next-line react/prop-types
function NavLink({ to, ...props }) {
  const match = useMatch(to)
  return <AppBar.NavItem active={Boolean(match)} as={Link} to={to} {...props} />
}

export function Default() {
  const position = select(
    'position',
    { static: 'static', fixed: 'fixed' },
    'static'
  )
  const collapseBelow = select(
    'collapseBelow',
    { small: 'small', medium: 'medium', large: 'large' },
    'large'
  )

  const user = useUser()
  const paragraphs = number('paragraphs', 10, { min: 1, max: 14 })

  const responsive = useResponsiveStyle({ below: collapseBelow })
  const source = createMemorySource('/1')
  const history = createHistory(source)

  const Page = useCallback(
    ({ page }) => (
      <Box sx={{ background: 'rgb(245, 246, 250)' }}>
        <AppBar position={position} collapseBelow={collapseBelow}>
          <AppBar.Logo>
            <Logo width={130} height="auto" />
          </AppBar.Logo>
          <AppBar.PrimaryNav>
            <NavLink to="/1">Page 1</NavLink>
            <NavLink to="/2">Page 2</NavLink>
            <NavLink to="/3">Page 3</NavLink>
          </AppBar.PrimaryNav>
          <AppBar.SecondaryNav>
            <MyAccountNavItem user={user} />
          </AppBar.SecondaryNav>
          <AppBar.PrimaryActions>
            <Button variant="primary">Primary action</Button>
          </AppBar.PrimaryActions>
          <AppBar.SecondaryActions>
            <Button variant="secondary">Secondary action</Button>
          </AppBar.SecondaryActions>
        </AppBar>
        <Box
          as="main"
          sx={{
            p: responsive(3, 4),
            mt: position === 'fixed' ? responsive(65, 80) : undefined,
          }}
        >
          <Heading level={3} as="h1" sx={{ mb: 3 }}>
            Page #{page}
          </Heading>
          <LoremIpsum paragraphs={paragraphs} />
        </Box>
      </Box>
    ),
    [position, collapseBelow, user, paragraphs]
  )

  return (
    <LocationProvider history={history}>
      <Router>
        <Page path="/1" page={1} />
        <Page path="/2" page={2} />
        <Page path="/3" page={3} />
      </Router>
    </LocationProvider>
  )
}

const UserProp = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  team: PropTypes.string,
  avatar: PropTypes.string,
})

function MyAccountNavItem({ user }) {
  const { collapsed } = useAppBarContext()
  const primary = user.name || user.email
  const secondary = user.name ? user.email : null

  const content = (
    <Menu>
      {collapsed && <Menu.Divider />}
      <Menu.Item>
        <Flex alignItems="center">
          <UserAvatar user={user} size={80} />
          <Box sx={{ ml: 3 }}>
            <Stack space={1}>
              <Text weight="medium">{primary}</Text>
              {secondary && <Text>{secondary}</Text>}
              {user.team && <Text size="small">{user.team}</Text>}
            </Stack>
          </Box>
        </Flex>
      </Menu.Item>
      {!collapsed && <Menu.Divider />}
      <Menu.Item as="a" href="#">
        Profile
      </Menu.Item>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  )

  return collapsed ? (
    content
  ) : (
    <AppBar.NavMenuItem label={<UserAvatar user={user} />}>
      {content}
    </AppBar.NavMenuItem>
  )
}

MyAccountNavItem.propTypes = { user: UserProp.isRequired }

// eslint-disable-next-line react/prop-types
function UserAvatar({ user: { name, email, avatar }, ...props }) {
  return (
    <Avatar
      src={avatar}
      alt={name || email}
      bg={colorFromString(name || email)}
      {...props}
    />
  )
}

UserAvatar.propTypes = { user: UserProp.isRequired }

Default.story = {
  name: 'Default',
}

Default.parameters = {
  layout: 'fullscreen',
}
