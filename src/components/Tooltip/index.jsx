// See https://www.radix-ui.com/docs/primitives/components/tooltip
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { keyframes } from '@emotion/core'

import { styled } from '../../util/style'

const slideUpAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideRightAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideDownAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideLeftAndFade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const StyledContent = styled(TooltipPrimitive.Content)(props => ({
  'backgroundColor': props.theme.colors.primary[900],
  'borderRadius': props.theme.radii[2],
  'padding': props.theme.space[2],
  'paddingLeft': props.theme.space[3],
  'paddingRight': props.theme.space[3],
  'boxShadow': props.theme.shadows[5],
  'fontSize': props.theme.fontSizes[1],
  'lineHeight': 1,
  'color': 'white',

  '@media (prefers-reduced-motion: no-preference)': {
    'animationDuration': '400ms',
    'animationTimingFunction': 'cubic-bezier(0.16, 1, 0.3, 1)',
    'willChange': 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
}))

const StyledArrow = styled(TooltipPrimitive.Arrow)(props => ({
  fill: props.theme.colors.primary[900],
}))

const Tooltip = TooltipPrimitive.Root
Tooltip.Trigger = TooltipPrimitive.Trigger
Tooltip.Content = StyledContent
Tooltip.Arrow = StyledArrow

export { TooltipPrimitive, Tooltip }
