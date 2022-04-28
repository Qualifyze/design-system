import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { styled, theme } from '../../util/style'
import Text from '../Text'
import Box from '../Box'

const TagSize = {
  large: {
    textSize: 'standard',
    tagHeight: '30px',
    hitHeight: '44px',
  },
  small: {
    textSize: 'small',
    tagHeight: '24px',
    hitHeight: '32px',
  },
}

const TagColors = {
  info: {
    content: theme.colors.primary[700],
    background: theme.colors.primary[100],
    hoverContent: theme.colors.primary[800],
    hoverBackground: theme.colors.primary[200],
  },
  positive: {
    content: theme.colors.green[700],
    background: theme.colors.green[100],
    hoverContent: theme.colors.green[800],
    hoverBackground: theme.colors.green[200],
  },
  neutral: {
    content: theme.colors.grey[700],
    background: theme.colors.grey[200],
    hoverContent: theme.colors.grey[800],
    hoverBackground: theme.colors.grey[300],
  },
  caution: {
    content: theme.colors.yellow[800],
    background: theme.colors.yellow[200],
    hoverContent: theme.colors.yellow[900],
    hoverBackground: theme.colors.yellow[300],
  },
  critical: {
    content: theme.colors.red[700],
    background: theme.colors.red[100],
    hoverContent: theme.colors.red[800],
    hoverBackground: theme.colors.red[200],
  },
}

const Base = styled('div')((props) => ({
  'position': 'relative',
  'boxSizing': 'content-box',
  'paddingRight': props.theme.space[2],
  'paddingLeft': '0px',
  'paddingTop': '0px',
  'paddingBottom': '0px',
  'whiteSpace': 'nowrap',
  'height': props.tagSize.tagHeight,
  'display': 'flex',
  'justifyContent': 'center',
  'backgroundColor': props.color.background,
  'borderRadius': props.theme.radii[4],
  'cursor': props.onClick ? 'pointer' : 'text',
  'alignItems': 'center',
  'border': 'none',
  'transition': '1s',
  '&::after': {
    content: '""',
    boxSizing: 'content-box',
    position: 'absolute',
    transform: 'translateY(-50%)',
    paddingLeft: '4px',
    paddingRight: '4px',
    height: props.tagSize.hitHeight,
    width: '100%',
    top: '50%',
    left: '-4px',
    right: '0',
  },
  '& > span': {
    'color': props.color.content,
    'marginLeft': props.theme.space[2],
    'transition': '1s',
    '& > svg': {
      'width': '12px',
      'height': '12px',
    },
  },
  '&:hover': {
    'backgroundColor': props.color.hoverBackground,
    '& > span': {
      'color': props.color.hoverContent,
    },
  },
  '&:focus-visible': {
    'border': '4px solid #478FE4',
    'boxShadow': 'none',
    'outline': 'none',
  },
}))

const Tag = forwardRef(
  ({ children, as, icon, trailingIcon, onClick, color, tagSize }, ref) => (
    <Base
      as={onClick ? 'button' : as}
      ref={ref}
      color={color}
      tagSize={tagSize}
      onClick={onClick}
    >
      {icon ? <Box as="span">{icon}</Box> : null}
      <Text as="span" weight="medium" size={tagSize.textSize}>
        {children}
      </Text>
      {trailingIcon ? (
        <Box
          as="span"
          sx={{
            bg: 'white',
            display: 'flex',
            borderRadius: '50%',
            height: '20px',
            width: '20px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {trailingIcon}
        </Box>
      ) : null}
    </Base>
  )
)

Tag.displayName = 'Tag'

Tag.defaultProps = {
  as: 'span',
  onClick: null,
  icon: null,
  trailingIcon: null,
  color: TagColors.neutral,
  tagSize: TagSize.large,
}

Tag.propTypes = {
  /** Sets the HTML tag for the component */
  as: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  icon: PropTypes.node,
  trailingIcon: PropTypes.node,
  color: PropTypes.object,
  tagSize: PropTypes.object,
}

export default Tag
