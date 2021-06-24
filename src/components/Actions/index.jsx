import React from 'react'

import Inline from '../Inline'

import ActionsContext from './ActionsContext'

// We need the `.actions` class just to make sure we don't break old designs.
// For a longer explanation, see the `Button` component.
// eslint-disable-next-line react/prop-types
const Actions = ({ children }) => {
  return (
    <ActionsContext.Provider value={{}}>
      <Inline space={3} collapseBelow="mobile">
        {children}
      </Inline>
    </ActionsContext.Provider>
  )
}

export default Actions
