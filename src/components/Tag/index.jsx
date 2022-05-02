import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { styled } from '../../util/style'
import Text from '../Text'
import Box from '../Box'

const TagSize = {
  standard: {
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

const TagColors = (theme, color) => {
  switch (color) {
    case 'info':
      return {
        content: theme.colors.primary[700],
        background: theme.colors.primary[100],
        hoverContent: theme.colors.primary[800],
        hoverBackground: theme.colors.primary[200],
      }
    case 'positive':
      return {
        content: theme.colors.green[700],
        background: theme.colors.green[100],
        hoverContent: theme.colors.green[800],
        hoverBackground: theme.colors.green[200],
      }
    case 'caution':
      return {
        content: theme.colors.yellow[800],
        background: theme.colors.yellow[200],
        hoverContent: theme.colors.yellow[900],
        hoverBackground: theme.colors.yellow[300],
      }
    case 'critical':
      return {
        content: theme.colors.red[700],
        background: theme.colors.red[100],
        hoverContent: theme.colors.red[800],
        hoverBackground: theme.colors.red[200],
      }
    case 'neutral':
    default:
      return {
        content: theme.colors.grey[700],
        background: theme.colors.grey[200],
        hoverContent: theme.colors.grey[800],
        hoverBackground: theme.colors.grey[300],
      }
  }
}

const Base = styled('span')(props => ({
  'position': 'relative',
  'paddingRight': props.theme.space[2],
  'paddingLeft': '0',
  'paddingTop': '0',
  'paddingBottom': '0',
  'whiteSpace': 'nowrap',
  'height': props.size.tagHeight,
  'display': 'flex',
  'justifyContent': 'center',
  'backgroundColor': TagColors(props.theme, props.tone).background,
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
    height: props.size.hitHeight,
    width: '100%',
    top: '50%',
    left: '-4px',
    right: '0',
  },
  '& > span': {
    'color': TagColors(props.theme, props.tone).content,
    'marginLeft': props.theme.space[2],
    'transition': '1s',
    '& > svg': {
      width: '12px',
      height: '12px',
    },
  },
  '&:hover': {
    'backgroundColor': TagColors(props.theme, props.tone).hoverBackground,
    '& > span': {
      color: TagColors(props.theme, props.tone).hoverContent,
    },
  },
  '&:focus': {
    boxShadow: props.theme.shadows.focusRing,
    border: 'none',
    outline: 'none',
  },
}))

const Tag = forwardRef(
  ({ children, as, icon, trailingIcon, onClick, tone, size }, ref) => (
    <Base
      as={onClick ? 'button' : as}
      ref={ref}
      tone={tone}
      size={size}
      onClick={onClick}
    >
      {icon ? <Box as="span">{icon}</Box> : null}
      <Text as="span" weight="medium" size={TagSize[size].textSize}>
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
  tone: 'neutral',
  size: 'standard',
}

Tag.propTypes = {
  /** Sets the HTML tag for the component */
  as: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  icon: PropTypes.node,
  trailingIcon: PropTypes.node,
  tone: PropTypes.oneOf(['neutral', 'positive', 'critical', 'warning', 'info']),
  /** Size of the tag */
  size: PropTypes.oneOf(['small', 'standard']),
}

export default Tag
