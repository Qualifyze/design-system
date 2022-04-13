import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'

import Flex from '../Flex'

import ActionsContext from './ActionsContext'

// We need the `.actions` class just to make sure we don't break old designs.
// For a longer explanation, see the `Button` component.
// eslint-disable-next-line react/prop-types
const Actions = ({ children }) => {
  const keyedChildren = flattenChildren(children)

  return (
    <ActionsContext.Provider value={{}}>
      <Flex sx={{ flexDirection: ['column', 'row'], gap: 3 }}>
        {React.Children.map(keyedChildren, child => {
          return <Flex sx={{ width: ['100%', 'auto'] }}>{child}</Flex>
        })}
      </Flex>
    </ActionsContext.Provider>
  )
}

export default Actions
