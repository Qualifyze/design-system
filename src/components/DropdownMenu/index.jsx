import * as DropdownMenuPrimitive from '@reach/menu-button'
import React from 'react'

import { styled } from '../../util/style'

const StyledContent = styled(DropdownMenuPrimitive.MenuList)(props => ({
  'minWidth': '100px',
  'backgroundColor': props.theme.colors.white,
  'borderRadius': props.theme.radii[2],
  'padding': props.theme.space[2],
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: '-1',
    borderRadius: props.theme.radii[2],
    // The following values are taken from theme, but copy&pasted for ease of use.
    // Same as AutosuggestField
    boxShadow: `0 0 0 1px hsl(210, 24%, 87%), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  },
}))

const useItemStyles = props => ({
  'all': 'unset',
  'fontSize': props.theme.fontSizes[1],
  'lineHeight': 1,
  'color': props.theme.colors.primary[800],
  'borderRadius': props.theme.radii[2],
  'display': 'flex',
  'alignItems': 'center',
  'paddingTop': props.theme.space[2],
  'paddingBottom': props.theme.space[2],
  'paddingLeft': props.theme.space[2],
  'paddingRight': props.theme.space[2],
  'position': 'relative',
  'userSelect': 'none',

  '&[data-disabled]': {
    color: props.theme.colors.grey[400],
    pointerEvents: 'none',
  },

  '&:hover': {
    backgroundColor: props.theme.colors.primary[100],
  },
  '&:focus': {
    backgroundColor: props.theme.colors.primary[100],
  },
})

const StyledItem = styled(DropdownMenuPrimitive.MenuItem)(useItemStyles)

const StyledTriggerItem = styled(DropdownMenuPrimitive.MenuButton)(
  useItemStyles
)

const StyledSeparator = styled.div(props => ({
  height: 1,
  backgroundColor: props.theme.colors.grey[300],
  margin: 5,
}))

function Separator(props) {
  return (
    <StyledSeparator
      role="separator"
      aria-orientation="horizontal"
      {...props}
    />
  )
}

const StyledLabel = styled(DropdownMenuPrimitive.MenuItem)(props => ({
  paddingTop: props.theme.space[2],
  paddingBottom: props.theme.space[2],
  paddingLeft: props.theme.space[2],
  paddingRight: props.theme.space[2],
  fontWeight: props.theme.fontWeights.semibold,
  fontSize: props.theme.fontSizes[0],
  color: props.theme.colors.grey[500],
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
}))

const DropdownMenu = DropdownMenuPrimitive.Menu
DropdownMenu.Trigger = DropdownMenuPrimitive.MenuButton
DropdownMenu.Content = StyledContent
DropdownMenu.Item = StyledItem
DropdownMenu.TriggerItem = StyledTriggerItem
DropdownMenu.Separator = Separator
DropdownMenu.Label = StyledLabel

export { DropdownMenuPrimitive, DropdownMenu }
