import PropTypes from 'prop-types'
import React from 'react'

import Box from '../Box'

import MenuDivider from './MenuDivider'
import MenuItem from './MenuItem'

function Menu({ children }) {
  return <Box>{children}</Box>
}

Menu.propTypes = {
  children: PropTypes.node,
}

Menu.defaultProps = {
  children: null,
}

Menu.Item = MenuItem
Menu.Divider = MenuDivider

export default Menu
