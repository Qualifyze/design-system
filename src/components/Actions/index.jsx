import PropTypes from 'prop-types'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'

import Flex from '../Flex'

import ActionsContext from './ActionsContext'

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

Actions.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Actions
