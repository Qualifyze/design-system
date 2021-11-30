import * as TabsPrimitives from '@radix-ui/react-tabs'

import { styled } from '../../util/style'

const Tabs = styled(TabsPrimitives.Root)(() => ({
  width: '100%',
}))

const TabList = styled(TabsPrimitives.List)(props => ({
  'flexShrink': 0,
  'display': 'flex',
  '*': {
    paddingLeft: props.theme.space[props.paddingX] ?? 0,
    paddingRight: props.theme.space[props.paddingX] ?? 0,
    margin: `0 ${props.theme.space[props.space ?? 3]}px`,
  },
}))

const TabTrigger = styled(TabsPrimitives.Trigger)(props => ({
  'color': props.theme.colors.grey[600],
  'fontWeight': props.theme.fontWeights.semibold,
  'cursor': 'pointer',
  'paddingTop': props.theme.space[1],
  'paddingBottom': props.theme.space[1],
  '&:first-child': { marginLeft: 0 },
  '&:last-child': { marginRight: 0 },
  '&[data-state="active"]': {
    color: props.theme.colors.primary[600],
    borderBottom: `solid 2px ${props.theme.colors.primary[600]}`,
  },
  '&[data-state="inactive"]:hover': {
    color: props.theme.colors.grey[700],
  },
  '&:focus': {
    color: props.theme.colors.primary[700],
    borderBottom: `solid 2px ${props.theme.colors.primary[700]} !important`,
  },
}))

const TabContent = styled(TabsPrimitives.Content)(() => ({
  outline: 'none',
}))

Tabs.displayName = 'Tabs'

export { Tabs, TabList, TabContent, TabTrigger }
