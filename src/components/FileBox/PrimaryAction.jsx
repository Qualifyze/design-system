import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import Box from '../Text'

const PrimaryAction = ({ onClick, iconName }) => (
  <Box
    as="button"
    onClick={onClick}
    sx={{
      'appearance': 'none',
      'textDecoration': 'none !important',
      'border': 0,
      'cursor': 'pointer',
      'display': 'flex',
      'p': 2,
      'bg': 'transparent',
      'borderRadius': 2,
      '&::after': {
        content: '""',
        position: 'absolute',
        transform: 'translateY(-50%)',
        top: '50%',
        height: '100%',
        minHeight: '44px',
        minWidth: '44px',
        right: '-4px',
      },
      '&:focus': {
        outline: 'none',
        bg: 'grey.200',
        boxShadow: theme => `${theme.shadows.focusRing}`,
      },
      '&:hover': {
        outline: 'none',
        cursor: 'pointer',
        bg: 'grey.200',
      },
    }}
  >
    <Icon name={iconName} size="standard" color="primary.800" />
  </Box>
)

PrimaryAction.propTypes = {
  onClick: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
}

export default PrimaryAction
