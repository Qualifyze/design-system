/**
 * This is a Heading component to use instead of `h1`, `h2`, etc. We have an
 * array of 6 different styles in `headingStyles.js` and these get applied
 * depending on the `appearance` prop. The `as` prop defines which HTML tag
 * needs to get rendered, while `appearance` is only relevant for the styles
 * that get applied.
 *
 * @author Gregor Albrecht <hello@gregoralbrecht.com>
 */
import PropTypes from 'prop-types'

import {
  styled,
  sx,
  compose,
  variant,
  space,
  color,
  propTypes,
  shouldForwardProp,
} from '../../util/style'

const Heading = styled('h1', { shouldForwardProp })(
  compose(space, color),
  variant({
    prop: 'level',
    variants: {
      1: {
        fontSize: [5, 6, 7],
        lineHeight: 0,
      },
      2: {
        fontSize: [4, 5, 6],
        lineHeight: 1.2,
      },
      3: {
        fontSize: [3, 4, 5],
        lineHeight: 1.3,
      },
      4: {
        fontSize: [3, 3, 4],
        lineHeight: 1.4,
      },
    },
  }),
  variant({
    prop: 'weight',
    variants: {
      regular: {
        fontWeight: 'bold',
      },
      weak: {
        fontWeight: 'semibold',
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

Heading.displayName = 'Heading'

Heading.defaultProps = {
  level: 1,
  weight: 'regular',
  color: 'secondary.700',
}

Heading.propTypes = {
  /** Sets the HTML tag for the component */
  as: PropTypes.string,
  /** The style to use, independent of the `as` prop */
  level: PropTypes.oneOf([1, 2, 3, 4]),
  /** A weak heading option  */
  weight: PropTypes.oneOf(['regular', 'weak']),
  /** How to align the text */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  ...propTypes.space,
  ...propTypes.color,
}

export default Heading
