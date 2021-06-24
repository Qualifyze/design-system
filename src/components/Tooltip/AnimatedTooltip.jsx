import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { useTransition, animated } from 'react-spring'
import { useTooltip, TooltipPopup } from '@reach/tooltip'
import '@reach/tooltip/styles.css'

import { styled, color, variant } from '../../util/style'

const centered = (triggerRect, tooltipRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2
  const left = triggerCenter - tooltipRect.width / 2
  const maxLeft = window.innerWidth - tooltipRect.width - 2
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + window.scrollY,
  }
}

const StyledTooltipPopup = styled(TooltipPopup)(
  props => ({
    boxShadow: props.theme.shadows[4],
    borderRadius: props.theme.radii[2],
    fontSize: props.theme.fontSizes[1],
    lineHeight: props.theme.lineHeights[1],
    letterSpacing: props.theme.letterSpacings.normal,
    maxWidth: '200px',
    whiteSpace: 'pre-wrap',
    border: 0,
  }),
  color,
  variant({
    prop: 'variant',
    variants: {
      default: {
        color: 'white',
        bg: 'primary.700',
      },
      light: {
        color: 'primary.700',
        bg: 'white',
      },
    },
  })
)

animated.TooltipContent = animated(StyledTooltipPopup)

const AnimatedTooltip = ({ children, ...props }) => {
  const [trigger, tooltip] = useTooltip()
  const { isVisible } = tooltip
  const transitions = useTransition(isVisible ? tooltip : false, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { mass: 1, tension: 500, friction: 40 },
  })
  return (
    <>
      {cloneElement(children, trigger)}
      {transitions.map(({ item, props: styles, key }) => {
        return (
          <animated.TooltipContent
            key={key}
            {...item}
            {...props}
            style={styles}
            position={centered}
          />
        )
      })}
    </>
  )
}
AnimatedTooltip.displayName = 'AnimatedTooltip'

AnimatedTooltip.defaultProps = {
  variant: 'default',
}

AnimatedTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'light']),
}

export default AnimatedTooltip
