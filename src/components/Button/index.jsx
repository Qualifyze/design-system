/* eslint-disable react/require-default-props */
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { styled, variant } from '../../util/style'
import Box from '../Box'

import { LoadingBar } from './LoadingBar'

const Base = styled('button')(
  props => ({
    'revert': 'all',
    'appearance': 'none',
    'display': 'block',
    'position': 'relative',
    'textAlign': 'center',
    'lineHeight': 'inherit',
    'textDecoration': 'none !important',
    'border': 0,
    'cursor': 'pointer',
    'width': '100%',
    '&:focus': {
      outline: 'none',
      boxShadow: props.theme.shadows.focusRing,
    },
  }),
  variant({
    prop: 'variant',
    variants: {
      primary: {
        'color': 'white',
        'bg': 'primary.800',
        'borderRadius': 2,
        '&:hover': {
          bg: 'primary.700',
        },
      },
      secondary: {
        'color': 'primary.900',
        'bg': 'grey.300',
        'borderRadius': 2,
        '&:hover': {
          bg: 'grey.200',
        },
      },
      danger: {
        'color': 'white',
        'bg': 'red.500',
        'borderRadius': 2,
        '&:hover': {
          bg: 'red.400',
        },
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        fontSize: 1,
        px: 3,
        py: 2,
      },
      standard: {
        fontSize: 1,
        px: 4,
        py: '14px',
      },
      large: {
        fontSize: 2,
        px: 4,
        py: 3,
      },
    },
  })
)

const Button = forwardRef(
  ({ children, icon, isLoading, onClick, ...props }, ref) => {
    return (
      <Base ref={ref} onClick={isLoading ? undefined : onClick} {...props}>
        {icon ? (
          <Box as="span" sx={{ pr: 2 }}>
            {icon}
          </Box>
        ) : null}
        {children}
        {isLoading ? <LoadingBar aria-hidden /> : null}
      </Base>
    )
  }
)

Button.displayName = `Button`

Button.defaultProps = {
  variant: 'primary',
  size: 'standard',
  isLoading: false,
}

Button.propTypes = {
  /** Sets the HTML tag for the component */
  // eslint-disable-next-line react/forbid-prop-types
  as: PropTypes.any,
  size: PropTypes.oneOf(['small', 'standard', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.node,
}

export default Button
