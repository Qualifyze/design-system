/**
 * Heavily inspired by Braid https://github.com/seek-oss/braid-design-system/blob/26ea250b1565a1d65099ff3298fd474dd6fd1a10/lib/components/Hidden/Hidden.tsx
 *
 * Note: Currently, it's not possible to use <Hidden> inside a <Stack>. This needs more work, but I'm not sure if we will actually need it...
 */
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { theme } from '../../util/style'
import Box from '../Box'

const { breakpoints } = theme

// This basically figures out where to show the component.
// We probably need to move this to a utility somewhere else, its just a first draft
export function resolveResponsiveRangeProps({ above, below }) {
  if (!above && !below) {
    return [false, false, false, false]
  }

  const startIndex = above ? breakpoints.indexOf(breakpoints[above]) + 1 : 0
  const endIndex = below
    ? breakpoints.indexOf(breakpoints[below]) - 1
    : breakpoints.length - 1
  const range = breakpoints.slice(startIndex, endIndex + 1)

  const includeSmallest =
    below === 'small' ? true : range.indexOf(breakpoints.small) >= 0
  const includeSmall = range.indexOf(breakpoints.small) >= 0
  const includeMedium = range.indexOf(breakpoints.medium) >= 0
  const includeLarge = range.indexOf(breakpoints.large) >= 0

  return [includeSmallest, includeSmall, includeMedium, includeLarge]
}

export function useResponsiveStyle({ above, below }) {
  return useCallback(
    (enabledValue, disabledValue) => {
      const flags = resolveResponsiveRangeProps({ above, below })
      return flags.map(enabled => (enabled ? enabledValue : disabledValue))
    },
    [above, below]
  )
}

const Hidden = ({ children, inline, above, below }) => {
  const display = useResponsiveStyle({ above, below })(
    'none',
    inline ? 'inline' : 'block'
  )

  return <Box display={display}>{children}</Box>
}

Hidden.defaultProps = {
  inline: false,
  above: null,
  below: null,
}

Hidden.propTypes = {
  /** Child React components to render */
  children: PropTypes.node.isRequired,
  /** Whether the element should be displayed inline */
  inline: PropTypes.bool,
  /** Hide element above certain breakpoint */
  above: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Hide element below certain breakpoint */
  below: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Hidden
