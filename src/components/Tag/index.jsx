import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { styled, sx } from '../../util/style'
import Text from '../Text'
import Box from '../Box'

const GAP = '8px'

const pixelsForSize = {
  standard: {
    textSize: 'standard',
    tagHeight: '30px',
    hitHeight: '44px',
  },
  small: {
    textSize: 'small',
    tagHeight: '24px',
    hitHeight: '32px',
  },
}

const colorForTone = {
  neutral: {
    color: 'grey.800',
    backgroundColor: 'grey.200',
    hoverColor: 'grey.800',
    hoverBackgroundColor: 'grey.300',
  },
  info: {
    color: 'primary.700',
    hoverColor: 'primary.800',
    backgroundColor: 'primary.100',
    hoverBackgroundColor: 'primary.200',
  },
  positive: {
    color: 'green.700',
    hoverColor: 'green.800',
    backgroundColor: 'green.100',
    hoverBackgroundColor: 'green.200',
  },
  critical: {
    color: 'red.700',
    hoverColor: 'red.800',
    backgroundColor: 'red.100',
    hoverBackgroundColor: 'red.200',
  },
  caution: {
    color: 'yellow.800',
    hoverColor: 'yellow.900',
    backgroundColor: 'yellow.200',
    hoverBackgroundColor: 'yellow.300',
  },
}

const Base = styled('span')(
  props => ({
    'display': 'inline-flex',
    'position': 'relative',
    'padding': 0,
    'margin': 0,
    'flexDirection': 'row',
    'whiteSpace': 'nowrap',
    'height': pixelsForSize[props.size].tagHeight,
    'justifyContent': 'center',
    'borderRadius': '9999px',
    'cursor': props.onClick ? 'pointer' : 'text',
    'alignItems': 'center',
    'border': 'none',
    '&::after': {
      content: '""',
      position: 'absolute',
      transform: 'translateY(-50%)',
      height: pixelsForSize[props.size].hitHeight,
      width: '100%',
      top: '50%',
      left: '0',
    },
    '&:focus': {
      boxShadow: props.theme.shadows.focusRing,
      border: 'none',
      outline: 'none',
    },
  }),
  sx
)

const Tag = forwardRef(
  ({ children, as, icon, trailingIcon, onClick, tone, size }, ref) => (
    <Base
      as={onClick ? 'button' : as}
      ref={ref}
      tone={tone}
      size={size}
      onClick={onClick}
      sx={{
        color: colorForTone[tone].color,
        backgroundColor: colorForTone[tone].backgroundColor,
        ...(typeof onClick === 'function' && {
          '&:hover, &:focus': {
            color: colorForTone[tone].hoverColor,
            backgroundColor: colorForTone[tone].hoverBackgroundColor,
          },
        }),
      }}
    >
      {icon ? (
        <Box
          as="span"
          aria-hidden
          sx={{
            'pl': GAP,
            'color': 'currentColor',
            '& svg': { color: 'currentColor', width: '12px', height: '12px' },
          }}
        >
          {icon}
        </Box>
      ) : null}
      <Text
        as="span"
        weight="medium"
        size={pixelsForSize[size].textSize}
        sx={{ color: 'currentColor', px: GAP }}
      >
        {children}
      </Text>
      {trailingIcon ? (
        <Box
          as="span"
          aria-hidden
          sx={{
            'mr': GAP,
            'bg': 'white',
            'color': 'currentColor',
            'display': 'flex',
            'borderRadius': '50%',
            'height': '20px',
            'width': '20px',
            'justifyContent': 'center',
            'alignItems': 'center',
            '& svg': {
              color: 'currentColor',
              width: '12px',
              height: '12px',
            },
          }}
        >
          {trailingIcon}
        </Box>
      ) : null}
    </Base>
  )
)

Tag.displayName = 'Tag'

Tag.defaultProps = {
  as: 'span',
  onClick: null,
  icon: null,
  trailingIcon: null,
  tone: 'neutral',
  size: 'standard',
}

Tag.propTypes = {
  /** Sets the HTML tag for the component */
  as: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  icon: PropTypes.node,
  trailingIcon: PropTypes.node,
  tone: PropTypes.oneOf(['neutral', 'positive', 'critical', 'warning', 'info']),
  /** Size of the tag */
  size: PropTypes.oneOf(['small', 'standard']),
}

export default Tag
