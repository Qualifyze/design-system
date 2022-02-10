/**
 * Heavily inspired by Braid https://github.com/seek-oss/braid-design-system/blob/26ea250b1565a1d65099ff3298fd474dd6fd1a10/lib/components/Stack/Stack.tsx
 */
import React, { Children } from 'react'
import PropTypes from 'prop-types'
import flattenChildren from 'react-keyed-flatten-children'

import { propType } from '../../util/style'
import Box from '../Box'

const useStackItem = ({ align, space }) => ({
  pt: space,
  width: '100%',
  // If we're aligned left across all screen sizes,
  // there's actually no alignment work to do.
  ...(align === 'left'
    ? null
    : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-end',
      }),
})

const Stack = ({ as, space, children, align }) => {
  const stackItems = flattenChildren(children)

  // when the stack should be a list we need to render `<li>`s
  const isList = as === 'ol' || as === 'ul'
  const stackItemComponent = isList ? 'li' : 'div'
  // We don't expect the first child component to be spaced so it doesn't need top spacing
  // We had previously tried negative margin top values on the top Box but leads
  // to the component overlapping with other components
  const firstStackItemProps = useStackItem({ space: 0, align })
  const restStackItemProps = useStackItem({ space, align })

  return (
    <Box as={as}>
      {Children.map(stackItems, (child, index) => {
        const stackItemProps =
          index === 0 ? firstStackItemProps : restStackItemProps
        return (
          <Box as={stackItemComponent} {...stackItemProps}>
            {child}
          </Box>
        )
      })}
    </Box>
  )
}

Stack.defaultProps = {
  as: 'div',
  space: 0,
  align: 'left',
}

Stack.propTypes = {
  /** Sets the HTML tag for the component */
  as: PropTypes.oneOf(['div', 'ol', 'ul']),
  /** Child React components to render */
  children: PropTypes.node.isRequired,
  /** Spacing between the children */
  space: propType,
  /** How to align the text */
  align: PropTypes.oneOf(['left', 'center', 'right']),
}

export default Stack
