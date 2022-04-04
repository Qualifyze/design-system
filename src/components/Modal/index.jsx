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
const Body = ({ children }) => (
  <Box sx={{ px: 3, pb: 3, flexGrow: 1, overflowY: 'auto' }}>{children}</Box>
)

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
})(props => ({
  '&[data-reach-dialog-content]': {
    padding: 0,
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    ...(props.asSidebar
      ? {
          right: 0,
          bottom: 0,
          top: 0,
          position: 'fixed',
          height: '100vh',
          margin: 0,
        }
      : {
          position: 'relative',
          margin: '0 auto',
          height: '100%',
          maxHeight: '100%',
        }),
    [`@media (min-width: ${props.theme.breakpoints.small})`]: {
      maxWidth: props.theme.sizes[props.maxWidth],
      width: '50vw',
      ...(props.asSidebar
        ? {
            paddingLeft: props.theme.space[3],
          }
        : {
            borderRadius: props.theme.radii[2],
            margin: `${props.theme.space[6]}px auto ${props.theme.space[5]}px`,
            maxHeight: `calc(100% - ${props.theme.space[6]}px - ${props.theme.space[5]}px)`,
          }),
    },
  },
}))

const DialogOverlay = styled(BaseDialogOverlay)(() => {
  return {
    '&[data-reach-dialog-overlay]': {
      background: 'hsla(215, 17%, 30%, 0.9)',
      zIndex: 500,
      overflow: 'hidden',
    },
  }
})

// this is the base modal it is very basic right now we use the overlay and the content
// as we add custom styling to both of these components. if the custom styling is
// removed we can just use the Dialog component that comes from the plugin
const Modal = ({ isOpen, onDismiss, maxWidth, children, asSidebar }) => {
  const headingId = useId()

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent
        asSidebar={asSidebar}
        maxWidth={maxWidth}
        aria-labelledby={headingId}
      >
        {React.Children?.map(children, child => {
          // For the heading, we need to provide the id so
          // aria-labelledby can be linked
          if (child?.type === Heading) {
            return React.cloneElement(child, { id: headingId })
          }

          return child
        })}
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
