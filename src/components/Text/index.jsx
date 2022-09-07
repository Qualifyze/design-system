/**
 * TODO
 *
 * @author Gregor Albrecht <hello@gregoralbrecht.com>
 */
import PropTypes from 'prop-types'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { styled, sx, variant, space, propTypes } from '../../util/style'

const Text = styled('p', { shouldForwardProp })(
  props => ({
    '& b': {
      fontWeight: props.theme.fontWeights.semibold,
    },
  }),
  space,
  variant({
    prop: 'size',
    variants: {
      tiny: {
        fontSize: 0,
      },
      small: {
        fontSize: 1,
      },
      standard: {
        fontSize: 2,
      },
      large: {
        fontSize: 3,
      },
    },
  }),
  variant({
    prop: 'weight',
    variants: {
      regular: {
        fontWeight: 200,
      },
      medium: {
        fontWeight: 400,
      },
      strong: {
        fontWeight: 500,
      },
    },
  }),
  variant({
    prop: 'tone',
    variants: {
      neutral: {
        color: 'grey.800',
      },
      lightneutral: {
        color: 'hsla(0, 0%, 100%, 1)',
      },
      positive: {
        color: 'green.700',
      },
      critical: {
        color: 'red.700',
      },
      secondary: {
        color: 'grey.800',
      },
      lightsecondary: {
        color: 'hsla(0, 0%, 100%, 0.6)',
      },
      info: {
        color: 'primary.600',
      },
    },
  }),
  variant({
    prop: 'align',
    variants: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  }),
  sx
)

Text.displayName = 'Text'

Text.defaultProps = {
  as: 'p',
  size: 'standard',
  align: 'left',
  tone: 'neutral',
}

Text.propTypes = {
  /** Sets the HTML tag for the component */
  as: PropTypes.string,
  /** The font size */
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
  /** How to align the text */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Tone, i.e., color to use */
  tone: PropTypes.oneOf([
    'neutral',
    'lightneutral',
    'positive',
    'critical',
    'secondary',
    'lightsecondary',
    'info',
  ]),
  ...propTypes.space,
}

export default Text
