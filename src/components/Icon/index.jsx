import React from 'react'
import PropTypes from 'prop-types'

import {
  color as colorProp,
  styled,
  variant,
  space,
  sx,
} from '../../util/style'

import basicIcons from './basicIcons'

const SVG = styled('svg')(
  {
    verticalAlign: 'baseline',
    bottom: '-1px',
  },
  variant({
    prop: 'size',
    variants: {
      tiny: {
        width: '12px',
        height: '12px',
      },
      small: {
        width: '14px',
        height: '14px',
      },
      standard: {
        width: '16px',
        height: '16px',
      },
      large: {
        width: '20px',
        height: '20px',
      },
      gigantic: {
        width: '48px',
        height: '48px',
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
      caution: {
        color: 'yellow.700',
      },
      secondary: {
        color: 'grey.700',
      },
      lightsecondary: {
        color: 'hsla(0, 0%, 100%, 0.6)',
      },
      info: {
        color: 'secondary.600',
      },
    },
  }),
  space,
  colorProp,
  sx
)

const Icon = ({ name: rawName, size, color, ...props }) => {
  const name = rawName.toLowerCase()
  return (
    <SVG
      {...props}
      viewBox="0 0 92 92"
      color={color ?? `currentcolor`}
      size={size}
    >
      {basicIcons[name] && <path d={basicIcons[name]} fill="currentColor" />}
    </SVG>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large', 'gigantic']),
  // We disabled the next rule on color, beacuse we don't want to give it any default value because it
  // will overwrite any tone given by the user
  // eslint-disable-next-line react/require-default-props
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  tone: PropTypes.oneOf([
    'neutral',
    'positive',
    'critical',
    'secondary',
    'info',
    'caution',
  ]),
}

Icon.defaultProps = {
  size: 'standard',
  tone: 'neutral',
}
Icon.displayName = 'Icon'

export default Icon
