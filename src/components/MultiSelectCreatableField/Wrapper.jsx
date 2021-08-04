import PropTypes from 'prop-types'

import { styled, variant } from '../../util/style'

const Wrapper = styled('div')(
  {},
  variant({
    prop: 'size',
    variants: {
      tiny: {
        'fontSize': 0,
        '[class$="-Svg"]': {
          width: 12,
          height: 12,
        },
        '[class$="-MenuList"]': {
          maxHeight: 145,
        },
      },
      small: {
        'fontSize': 1,
        '[class$="-Svg"]': {
          width: 15,
          height: 15,
        },
        '[class$="-MenuList"]': {
          maxHeight: 163,
        },
      },
      standard: {
        'fontSize': 2,
        '[class$="-Svg"]': {
          width: 18,
          height: 18,
        },
        '[class$="-MenuList"]': {
          maxHeight: 180,
        },
      },
      large: {
        'fontSize': 3,
        '[class$="-Svg"]': {
          width: 24,
          height: 24,
        },
        '[class$="-MenuList"]': {
          maxHeight: 217,
        },
      },
    },
  })
)

Wrapper.displayName = 'Wrapper'

Wrapper.defaultProps = {
  size: 'standard',
}

Wrapper.propTypes = {
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
}

export default Wrapper
