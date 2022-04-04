import React from 'react'

import Inline from '../Inline'

import ActionsContext from './ActionsContext'

// We need the `.actions` class just to make sure we don't break old designs.
// For a longer explanation, see the `Button` component.
// eslint-disable-next-line react/prop-types
const Actions = ({ children, ...props }) => {
  return (
    <ActionsContext.Provider value={{}}>
      <Inline {...props}>{children}</Inline>
    </ActionsContext.Provider>
  )
}

Actions.propTypes = {
  collapseBelow: Inline.propTypes.collapseBelow,
  space: Inline.propTypes.space,
}

Actions.defaultProps = {
  collapseBelow: 'mobile',
  space: 3,
}

export default Actions
