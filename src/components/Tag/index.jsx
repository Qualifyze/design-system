import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { styled } from '../../util/style'
import Text from '../Text'
import Box from '../Box'

const Base = styled('span')(props => ({
  'position': 'relative',
  'paddingLeft': props.theme.space[2],
  'paddingRight': props.theme.space[2],
  'whiteSpace': 'nowrap',
  'cursor': props.onClick ? 'pointer' : 'text',
  '& > span': {
    'color': props.theme.colors.grey[700],
    '&::after': {
      content: '""',
      position: 'absolute',
      transform: 'translateY(-50%)',
      background: props.theme.colors.grey[200],
      borderRadius: props.theme.radii[3],
      minHeight: '30px',
      top: '50%',
      left: '0',
      right: '0',
      zIndex: '-1',
    },
  },
  '&:hover': {
    '& > span': {
      'color': props.theme.colors.grey[900],
      '&::after': {
        background: props.theme.colors.grey[400],
      },
    },
  },
}))

const Tag = forwardRef(({ children, as, icon, onClick }, ref) => (
  <Base as={as} ref={ref} onClick={onClick}>
    <Text as="span" size="small" weight="medium">
      {children}
    </Text>
    {icon ? (
      <Box as="span" sx={{ pl: 2 }}>
        {icon}
      </Box>
    ) : null}
  </Base>
))

Tag.displayName = 'Tag'

Tag.defaultProps = {
  as: 'span',
  onClick: null,
  icon: null,
}

Tag.propTypes = {
  /** Sets the HTML tag for the component */
  as: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  icon: PropTypes.node,
}

export default Tag
