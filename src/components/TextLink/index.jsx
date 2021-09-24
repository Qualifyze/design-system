/* eslint-disable no-shadow */
import React, { forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'

import { styled, createShouldForwardProp, props, sx } from '../../util/style'
import ActionsContext from '../Actions/ActionsContext'
import Box from '../Box'
import { Loader } from '../Button'

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'showVisited',
  'hitArea',
])

const useVisitedStyles = props =>
  props.showVisited
    ? {
        '&:visited': {
          color: props.theme.colors.primary[900],
        },
      }
    : null

const useHitArea = props =>
  props.hitArea === 'large'
    ? {
        '&::after': {
          content: '""',
          position: 'absolute',
          transform: 'translateY(-50%)',
          top: '50%',
          height: '100%',
          minHeight: '44px',
          minWidth: '44px',
          left: '-10px',
          right: '-10px',
        },
      }
    : null

const BaseLink = styled('a', { shouldForwardProp })(
  props => ({
    'appearance': 'none',
    'border': 'none',
    'backgroundColor': 'transparent',
    'cursor': 'pointer',
    'position': 'relative',
    'fontWeight': props.theme.fontWeights.semibold,
    'textDecoration': 'none',
    'WebkitTapHighlightColor': 'transparent',
    'color': props.theme.colors.primary[600],
    'borderRadius': props.theme.radii[1],
    '&:focus, &:hover': {
      textDecoration: 'underline',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: props.theme.shadows.focusRing,
    },
    ...(props.isNestedInActions
      ? {
          display: 'block',
          textAlign: 'center',
          fontSize: props.theme.fontSizes[1],
          paddingTop: '14px',
          paddingBottom: '14px',
          width: '100%',
        }
      : null),
  }),
  useVisitedStyles,
  useHitArea,
  sx
)

const TextLink = forwardRef(({ children, icon, isLoading, ...props }, ref) => {
  const actionsContext = useContext(ActionsContext)

  return (
    <BaseLink ref={ref} isNestedInActions={actionsContext != null} {...props}>
      {icon ? (
        <Box as="span" sx={{ pr: 1 }}>
          {icon}
        </Box>
      ) : null}
      {children}
      {isLoading ? (
        <Loader aria-hidden>
          <span />
          <span />
          <span />
        </Loader>
      ) : null}
    </BaseLink>
  )
})

TextLink.displayName = 'TextLink'

TextLink.propTypes = {
  // eslint-disable-next-line react/require-default-props
  href: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.node,
  showVisited: PropTypes.bool,
  hitArea: PropTypes.oneOf(['standard', 'large']),
  /** This doesn't make sense for normal links, but we need it for TextLinkButton to show progress on async onClick actions */
  isLoading: PropTypes.bool,
}

TextLink.defaultProps = {
  showVisited: false,
  hitArea: 'standard',
  isLoading: false,
}

export default TextLink
