import PropTypes from 'prop-types'

import { styled, variant } from '../../util/style'

const AppBarButton = styled.button(
  props => ({
    'revert': 'all',
    'appearance': 'none',
    'display': 'block',
    'position': 'relative',
    'textAlign': 'center',
    'textDecoration': 'none !important',
    'border': 0,
    'cursor': 'pointer',
    'fontSize': '16px',
    'lineHeight': 1,
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

AppBarButton.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  children: PropTypes.node,
}

AppBarButton.defaultProps = {
  as: null,
  variant: 'primary',
  onClick: null,
  children: null,
}

export default AppBarButton
