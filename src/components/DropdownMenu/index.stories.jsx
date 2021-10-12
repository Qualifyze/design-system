/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '../../util/style'
import Box from '../Box'
import Button from '../Button'
import Icon from '../Icon'
import Inline from '../Inline'

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
