import React from 'react'
import PropTypes from 'prop-types'
// import the base styles for the modal
import '@reach/dialog/styles.css'
import {
  DialogContent as BaseDialogContent,
  DialogOverlay as BaseDialogOverlay,
} from '@reach/dialog'

import { styled } from '../../util/style'
import BaseActions from '../Actions'
import BaseHeading from '../Heading'
import Box from '../Box'
import Icon from '../Icon'

// eslint-disable-next-line react/prop-types
const Heading = ({ children }) => (
  <Box sx={{ px: 3, pt: 3, pb: 3, mr: '44px' }}>
    <BaseHeading as="span" level={4} weight="weak" id="heading_modal">
      {children}
    </BaseHeading>
  </Box>
)

// eslint-disable-next-line react/prop-types
const Body = ({ children }) => <Box sx={{ px: 3, pb: 3 }}>{children}</Box>

// eslint-disable-next-line react/prop-types
const Actions = ({ children }) => (
  <Box sx={{ px: 3, pb: 3 }}>
    <BaseActions>{children}</BaseActions>
  </Box>
)

const DialogContent = styled(BaseDialogContent)(props => {
  return {
    '&[data-reach-dialog-content]': {
      width: `100%`,
      margin: 0,
      padding: 0,
      background: `white`,
      position: `relative`,
      marginTop: props.theme.space[6],
      [`@media (min-width: ${props.theme.breakpoints.small})`]: {
        borderRadius: props.theme.radii[2],
        maxWidth: props.theme.sizes[props.maxwidth],
        marginBottom: props.theme.space[5],
      },
    },
  }
})

const DialogOverlay = styled(BaseDialogOverlay)(() => {
  return {
    '&[data-reach-dialog-overlay]': {
      background: 'hsla(215, 17%, 30%, 0.9)',
      zIndex: 500,
    },
  }
})

// this is the base modal it is very basic right now we use the overlay and the content
// as we add custom styling to both of these components. if the custom styling is
// removed we can just use the Dialog component that comes from the plugin
const Modal = ({ isOpen, onDismiss, maxWidth, children }) => {
  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <Box
        sx={{
          display: 'flex',
          alignItems: ['flex-end', 'center'],
          justifyContent: 'center',
          minHeight: '100%',
          bg: 'transparent',
          boxShadow: 8,
          px: [0, 3],
        }}
      >
        <DialogContent maxwidth={maxWidth} aria-labelledby="heading_modal">
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
          {children}
        </DialogContent>
      </Box>
    </DialogOverlay>
  )
}

Modal.displayName = 'Modal'
Modal.Actions = Actions
Modal.Heading = Heading
Modal.Body = Body

Modal.defaultProps = {
  onDismiss: null,
  maxWidth: 'medium',
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func,
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['narrow', 'medium', 'wide', 'page']),
}

export default Modal
