import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'

import Box from '../Box'
import Icon from '../Icon'
import { DropdownMenuPrimitive } from '../DropdownMenu'

import { useAppBarContext } from './context'
import NavItem from './NavItem'

export default function AppBarNavMenuItem({ label, children }) {
  const { collapsed } = useAppBarContext()
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(e => {
    e.preventDefault()
    setOpen(o => !o)
  }, [])

  return (
    <DropdownMenuPrimitive.Root>
      <NavItem as={DropdownMenuPrimitive.Trigger} onClick={toggleOpen}>
        {label}
        <Icon name={open ? 'chevronup' : 'chevrondown'} sx={{ ml: 2 }} />
      </NavItem>
      <DropdownMenuPrimitive.Content>
        <Box sx={{ boxShadow: collapsed ? 0 : 4 }}>{children}</Box>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  )
}

AppBarNavMenuItem.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node,
}

AppBarNavMenuItem.defaultProps = {
  children: null,
}
