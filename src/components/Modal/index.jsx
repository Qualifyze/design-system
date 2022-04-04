import React from 'react'
import PropTypes from 'prop-types'
// import the base styles for the modal
import '@reach/dialog/styles.css'
import {
  DialogContent as BaseDialogContent,
  DialogOverlay as BaseDialogOverlay,
} from '@reach/dialog'
import { useId } from '@react-aria/utils'

import { styled } from '../../util/style'
import BaseActions from '../Actions'
import BaseHeading from '../Heading'
import Box from '../Box'
import Icon from '../Icon'

// eslint-disable-next-line react/prop-types
const Heading = ({ children, id }) => {
  return (
    <Box sx={{ px: 3, pt: 3, pb: 3, mr: '44px' }}>
      <BaseHeading as="span" level={4} weight="weak" id={id}>
        {children}
      </BaseHeading>
    </Box>
  )
}

// eslint-disable-next-line react/prop-types
const Body = ({ children }) => <Box sx={{ px: 3, pb: 3 }}>{children}</Box>

// eslint-disable-next-line react/prop-types
const Actions = ({ children }) => (
  <Box sx={{ p: 3 }}>
    <BaseActions collapseBelow={null}>{children}</BaseActions>
  </Box>
)

const DialogContent = styled(BaseDialogContent, {
  // prop to the DialogContent
  // in the DOM since its not Do not pass the maxWidth supported
  shouldForwardProp: prop => prop !== 'maxWidth' && prop !== 'asSidebar',
})(({ theme, asSidebar, maxWidth }) => ({
  '&[data-reach-dialog-content]': {
    padding: 0,
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    ...(asSidebar
      ? {
          right: 0,
          bottom: 0,
          top: 0,
          position: 'fixed',
          height: '100%',
          margin: 0,
        }
      : {
          position: 'relative',
          margin: '0 auto',
          maxHeight: '100%',
        }),
    [`@media (min-width: ${theme.breakpoints.small})`]: {
      maxWidth: theme.sizes[maxWidth],
      width: '75vw',
      ...(asSidebar
        ? {
            paddingLeft: theme.space[3],
          }
        : {
            borderRadius: theme.radii[2],
            margin: `${theme.space[6]}px auto ${theme.space[5]}px`,
            maxHeight: `calc(100% - ${theme.space[6]}px - ${theme.space[5]}px)`,
          }),
    },
    [`@media (min-width: ${theme.breakpoints.tablet})`]: {
      width: '50vw',
    },
  },
}))

const DialogOverlay = styled(BaseDialogOverlay)(({ theme }) => {
  return {
    '&[data-reach-dialog-overlay]': {
      background: 'hsla(215, 17%, 30%, 0.9)',
      zIndex: 500,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      [`@media (min-width: ${theme.breakpoints.small})`]: {
        justifyContent: 'flex-start',
      },
    },
  }
})

// this is the base modal it is very basic right now we use the overlay and the content
// as we add custom styling to both of these components. if the custom styling is
// removed we can just use the Dialog component that comes from the plugin
const Modal = ({ isOpen, onDismiss, maxWidth, children, asSidebar }) => {
  const headingId = useId()

  // For the heading, we need to provide the id so
  // aria-labelledby can be linked
  const heading = React.Children.map(children, child =>
    child.type === Heading ? React.cloneElement(child, { id: headingId }) : null
  ).filter(Boolean)

  const body = React.Children.map(children, child =>
    child.type === Heading ? null : child
  ).filter(Boolean)

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent
        asSidebar={asSidebar}
        maxWidth={maxWidth}
        aria-labelledby={headingId}
      >
        {heading}
        {body.length ? (
          <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>{body}</Box>
        ) : null}
        <Box
          aria-hidden
          as="button"
          onClick={onDismiss}
          sx={{
            appearance: 'none',
            textDecoration: 'none !important',
            border: 0,
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            right: 0,
            bg: 'transparent',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="cross" size="large" />
        </Box>
      </DialogContent>
    </DialogOverlay>
  )
}

DialogContent.propTypes = {
  asSidebar: PropTypes.bool.isRequired,
}

Modal.displayName = 'Modal'
Modal.Actions = Actions
Modal.Heading = Heading
Modal.Body = Body

Modal.defaultProps = {
  onDismiss: null,
  maxWidth: 'medium',
  asSidebar: false,
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func,
  children: PropTypes.node.isRequired,
  asSidebar: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['narrow', 'medium', 'wide', 'page']),
}

export default Modal
