/* eslint-disable react/require-default-props */
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { styled, variant } from '../../util/style'
import Box from '../Box'

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
    '&:disabled': {
      // these are important to stop variants overriding them
      backgroundColor: `${props.theme.colors.grey[200]} !important;`,
      color: `${props.theme.colors.grey[500]} !important;`,
      cursor: 'not-allowed',
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
        // '&:disabled': {
        //   bg: props.theme.colors.grey[200],
        //   color: props.theme.colors.grey[500],
        // },
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

export const Loader = styled.span`
  display: 'inline-block';

  & > span {
    width: 0.15em;
    height: 0.15em;
    background-color: currentColor;
    border-radius: 100%;
    display: inline-block;
    animation: loading-animation 1000ms infinite ease-in-out both;
  }

  & > span:nth-of-type(1) {
    margin-left: 0.25em;
    margin-right: 0.15em;
    animation-delay: -320ms;
  }

  & > span:nth-of-type(2) {
    margin-right: 0.15em;
    animation-delay: -160ms;
  }

  @keyframes loading-animation {
    0%,
    80%,
    100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }
`

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
        {isLoading ? (
          <Loader aria-hidden>
            <span />
            <span />
            <span />
          </Loader>
        ) : null}
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
