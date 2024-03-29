import * as TabsPrimitive from '@radix-ui/react-tabs'

import { styled } from '../../util/style'

const Tabs = styled(TabsPrimitive.Root)(() => ({
  width: '100%',
}))

const TabList = styled(TabsPrimitive.List)(props => ({
  flexShrink: 0,
  display: 'flex',
  overflow: 'auto',
  boxShadow: `inset 0 -1px 0 ${props.theme.colors.grey[300]}`,
}))

const TabTrigger = styled(TabsPrimitive.Trigger)(props => ({
  'all': 'unset',
  'border': 'none',
  'background': 'transparent',
  'position': 'relative',
  'color': props.theme.colors.grey[800],
  'fontWeight': props.theme.fontWeights.semibold,
  'fontSize': props.theme.fontSizes[1],
  'cursor': 'pointer',
  'paddingLeft': props.theme.space[1],
  'paddingRight': props.theme.space[1],
  'paddingTop': props.theme.space[2],
  'paddingBottom': props.theme.space[2],
  'marginLeft': props.theme.space[3],
  'marginRight': props.theme.space[3],
  'borderBottomStyle': 'solid',
  'borderBottomWidth': '2px',
  'borderBottomColor': 'transparent',
  'zIndex': '1',
  '&:first-child': { marginLeft: 0 },
  '&:last-child': { marginRight: 0 },
  '&::after': {
    content: '""',
    position: 'absolute',
    background: 'transparent',
    borderRadius: props.theme.radii[2],
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '1',
    pointerEvents: 'none',
  },
  '&:focus-visible': {
    'outline': 'none',

    '&::after': {
      outline: 'none',
      boxShadow: props.theme.shadows.focusRing,
    },
  },
  '&[data-state="active"]': {
    color: props.theme.colors.primary[600],
    borderBottomStyle: 'solid !important',
    borderBottomWidth: '2px !important',
    borderBottomColor: props.theme.colors.primary[600],
  },
  '&[data-state="inactive"]:hover': {
    color: props.theme.colors.grey[900],
    borderBottomColor: props.theme.colors.grey[300],
  },
}))

const TabContent = styled(TabsPrimitive.Content)(props => ({
  'borderRadius': props.theme.radii[2],
  '&:focus-visible': {
    outline: 'none',
    boxShadow: props.theme.shadows.focusRing,
  },
}))

Tabs.displayName = 'Tabs'
Tabs.List = TabList
Tabs.Trigger = TabTrigger
Tabs.Content = TabContent

export { Tabs, TabsPrimitive }
