import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import AnimatedTooltip from './AnimatedTooltip'

const Tooltip = ({ dataTooltip, indicator, variant, children }) => {
  return (
    <AnimatedTooltip
      label={
        <>
          {indicator && (
            <Icon name={indicator} color="currentColor" size="tiny" mr="1" />
          )}
          {dataTooltip}
        </>
      }
      variant={variant}
    >
      <span>{children}</span>
    </AnimatedTooltip>
  )
}

Tooltip.displayName = 'Tooltip'

Tooltip.defaultProps = {
  variant: 'default',
  indicator: 'chevronup',
}

Tooltip.propTypes = {
  dataTooltip: PropTypes.string.isRequired,
  indicator: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'light']),
  children: PropTypes.node.isRequired,
}

export default Tooltip
