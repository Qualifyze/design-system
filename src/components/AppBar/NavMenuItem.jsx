import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { DropdownMenu } from '../DropdownMenu'
import Icon from '../Icon'

import NavItem from './NavItem'

export default function AppBarNavMenuItem({ label, children }) {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <NavItem as={DropdownMenu.Trigger} noHover>
        {label}
        <Icon
          name="chevrondown"
          sx={{
            ml: 2,
            transform: `rotateX(${open ? '180deg' : '0'})`,
            transition: 'transform 300ms ease-in-out',
          }}
        />
      </NavItem>
      <DropdownMenu.Content alignOffset={-4}>{children}</DropdownMenu.Content>
    </DropdownMenu>
  )
}

AppBarNavMenuItem.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node,
}

AppBarNavMenuItem.defaultProps = {
  children: null,
}
