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
    'fontSize': `${props.theme.fontSizes[2]}px`,
    'lineHeight': 1,
    'padding': `${props.theme.space[3]}px ${props.theme.space[4]}px`,
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
        'bg': 'brand.9',
        '&:hover': {
          bg: 'brand.10',
        },
      },
      secondary: {
        'color': 'brand.11',
        'bg': 'brand.3',
        '&:hover': {
          bg: 'brand.4',
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
