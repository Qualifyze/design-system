/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '../../util/style'
import Box from '../Box'
import Flex from '../Flex'
import Button from '../Button'
import Icon from '../Icon'
import Inline from '../Inline'
import Stack from '../Stack'
import Text from '../Text'

import { DropdownMenu } from './index'

const RightSlot = styled('div')(props => ({
  'marginLeft': 'auto',
  'paddingLeft': 20,
  'color': props.theme.colors.grey[600],
  ':focus > &': { color: 'white' },
  '[data-disabled] &': { color: props.theme.colors.grey[300] },
}))

export default { title: 'DropdownMenu', component: DropdownMenu }

export const Default = () => {
  return (
    <Box sx={{ minHeight: '500px' }}>
      <DropdownMenu>
        <Inline>
          <DropdownMenu.Trigger asChild>
            <Button
              variant="secondary"
              size="small"
              icon={<Icon name="chevrondown" size="tiny" />}
            >
              More
            </Button>
          </DropdownMenu.Trigger>
        </Inline>

        <DropdownMenu.Content align="start">
          <DropdownMenu.Item>
            New Tab <RightSlot>⌘+T</RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            New Window <RightSlot>⌘+N</RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu>
            <DropdownMenu.TriggerItem>
              More Tools{' '}
              <RightSlot>
                <Icon name="chevronright" size="tiny" />
              </RightSlot>
            </DropdownMenu.TriggerItem>
            <DropdownMenu.Content sideOffset={2} alignOffset={-5}>
              <DropdownMenu.Item>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownMenu.Item>
              <DropdownMenu.Item>Create Shortcut…</DropdownMenu.Item>
              <DropdownMenu.Item>Name Window…</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
          <DropdownMenu.Separator />
          <DropdownMenu.Label>People</DropdownMenu.Label>
          <DropdownMenu.Item>Pablo</DropdownMenu.Item>
          <DropdownMenu.Item>Philipp</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Box>
  )
}
Default.story = {
  name: 'default',
}

export const CustomItem = () => {
  return (
    <Box sx={{ minHeight: '500px' }}>
      <DropdownMenu>
        <Inline>
          <DropdownMenu.Trigger asChild>
            <Button
              variant="secondary"
              size="small"
              icon={<Icon name="chevrondown" size="tiny" />}
            >
              Manage account
            </Button>
          </DropdownMenu.Trigger>
        </Inline>

        <DropdownMenu.Content align="start">
          <DropdownMenu.Item disabled>
            <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
              <Box sx={{ py: 2, pr: 2 }}>
                <Flex
                  sx={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '50%',
                    bg: 'primary.900',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  WW
                </Flex>
              </Box>
              <Box>
                <Stack space={1}>
                  <Text size="small" weight="medium">
                    Willy Wonka
                  </Text>
                  <Text size="small">willy.wonka@qualifyze.com</Text>
                </Stack>
              </Box>
            </Flex>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Manage profile</DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert('logged out')}>
            Log out{' '}
            <RightSlot>
              <Icon name="exit" />
            </RightSlot>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </Box>
  )
}
CustomItem.story = {
  name: 'with custom item',
}
