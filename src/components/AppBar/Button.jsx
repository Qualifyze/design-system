import React from 'react'
import PropTypes from 'prop-types'

import { styled, variant } from '../../util/style'
import Flex from '../Flex'

const Button = styled.button(
  props => ({
    'revert': 'all',
    'appearance': 'none',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'textDecoration': 'none !important',
    'border': 0,
    'cursor': 'pointer',
    'fontSize': props.theme.fontSizes[2],
    'lineHeight': 1,
    'whiteSpace': 'nowrap',
    'padding': `12px ${props.theme.space[3]}px`,
    'borderRadius': `${props.theme.radii[2]}px`,
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
        '&:hover': {
          bg: 'primary.700',
        },
      },
      secondary: {
        'color': 'primary.900',
        'bg': 'grey.300',
        '&:hover': {
          bg: 'grey.200',
        },
      },
    },
  })
)

export default function AppBarButton({ icon, children, ...props }) {
  return (
    <Button {...props}>
      {icon && (
        <Flex as="span" sx={{ mr: 1 }}>
          {icon}
        </Flex>
      )}
      {children}
    </Button>
  )
}

AppBarButton.propTypes = {
  as: PropTypes.elementType,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  children: PropTypes.node,
}

AppBarButton.defaultProps = {
  as: null,
  icon: null,
  variant: 'primary',
  onClick: null,
  children: null,
}
