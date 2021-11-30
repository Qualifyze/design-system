import * as TabsPrimitives from '@radix-ui/react-tabs'

import { styled } from '../../util/style'

const Tabs = styled(TabsPrimitives.Root)(() => ({
  width: '100%',
}))

const TabList = styled(TabsPrimitives.List)(props => ({
  'flexShrink': 0,
  'display': 'flex',
  'borderBottom': `solid 1px ${props.theme.colors.grey[600]} !important`,
  '&:focus': {
    borderBottom: `solid 1px ${props.theme.colors.grey[600]} !important`,
  },
  'overflow-x': 'auto hidden',
}))

const TabTrigger = styled(TabsPrimitives.Trigger)(props => ({
  'color': props.theme.colors.grey[800],
  'fontWeight': props.theme.fontWeights.semibold,
  'cursor': 'pointer',
  'padding': `${props.theme.space[1]}px ${props.theme.space[3]}px`,
  'marginLeft': props.theme.space[3],
  'marginRight': props.theme.space[3],
  'marginBottom': '-2px',
  '&:first-child': { marginLeft: 0 },
  '&:last-child': { marginRight: 0 },
  '&[data-state="active"]': {
    color: props.theme.colors.primary[600],
    borderBottom: `solid 2px ${props.theme.colors.primary[600]}`,
  },
  '&[data-state="inactive"]:hover': {
    color: props.theme.colors.grey[900],
  },
  '&:focus': {
    color: props.theme.colors.primary[700],
    borderBottom: `solid 2px ${props.theme.colors.primary[700]} !important`,
    boxShadow: props.theme.shadows.focusRing,
  },
}))

const TabContent = styled(TabsPrimitives.Content)(props => ({
  'outline': 'none',
  '&:focus': {
    boxShadow: props.theme.shadows.focusRing,
  },
}))

Tabs.displayName = 'Tabs'

export { Tabs, TabList, TabContent, TabTrigger, TabsPrimitives }
