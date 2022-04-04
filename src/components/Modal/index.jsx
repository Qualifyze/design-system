import {
  DialogContent as BaseDialogContent,
  DialogOverlay as BaseDialogOverlay,
} from '@reach/dialog'
// import the base styles for the modal
import '@reach/dialog/styles.css'
import { useId } from '@react-aria/utils'
import PropTypes from 'prop-types'
import React from 'react'

import { styled } from '../../util/style'
import BaseActions from '../Actions'
import Box from '../Box'
import BaseHeading from '../Heading'
import Icon from '../Icon'

const DialogContext = React.createContext()

function useDialog() {
  return React.useContext(DialogContext)
}

function useLeftPadding() {
  const { asSidebar } = useDialog()
  return asSidebar ? 4 : 3
}

// eslint-disable-next-line react/prop-types
function Heading({ children, id }) {
  return (
    <Box sx={{ pl: useLeftPadding(), pr: 3, pt: 3, pb: 3, mr: '44px' }}>
      <BaseHeading as="span" level={4} weight="weak" id={id}>
        {children}
      </BaseHeading>
    </Box>
  )
}

// eslint-disable-next-line react/prop-types
function Body(props) {
  return (
    <Box
      {...props}
      sx={{
        pl: useLeftPadding(),
        pr: 3,
        pb: 3,
        flexGrow: 1,
        overflowY: 'auto',
        // Read https://css-tricks.com/books/greatest-css-tricks/scroll-shadows/ for an explanation of CSS-only scroll shadows.
        background: [
          'linear-gradient(white 30%, rgba(255, 255, 255, 0)) center top',
          'linear-gradient(rgba(255, 255, 255, 0), white 70%) center bottom',
          // 'radial-gradient(farthest-side at 50% 0,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0)) center top',
          // 'radial-gradient(farthest-side at 50% 100%,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0)) center bottom',
          'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0)) center top',
          'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15)) center bottom',
        ].join(','),
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 20px, 100% 20px, 100% 7px, 100% 7px',
        backgroundAttachment: 'local, local, scroll, scroll',
      }}
    />
  )
}

// eslint-disable-next-line react/prop-types
function Actions({ children }) {
  return (
    <Box sx={{ py: 3, pl: useLeftPadding(), pr: 3 }}>
      <BaseActions>{children}</BaseActions>
    </Box>
  )
}

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
        ? {}
        : {
            borderRadius: theme.radii[2],
            margin: '10% auto',
            maxHeight: '80%',
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
        justifyContent: 'center',
      },
    },
  }
})

// eslint-disable-next-line react/prop-types
function DialogCloseButton({ onDismiss }) {
  return (
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
  )
}

// this is the base modal it is very basic right now we use the overlay and the content
// as we add custom styling to both of these components. if the custom styling is
// removed we can just use the Dialog component that comes from the plugin
const Modal = ({ isOpen, onDismiss, children, maxWidth, asSidebar }) => {
  const context = React.useMemo(() => ({ asSidebar }), [asSidebar])
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
    <DialogContext.Provider value={context}>
      <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
        <DialogContent
          aria-labelledby={headingId}
          maxWidth={maxWidth}
          asSidebar={asSidebar}
        >
          {heading}
          {body}
          <DialogCloseButton onDismiss={onDismiss} />
        </DialogContent>
      </DialogOverlay>
    </DialogContext.Provider>
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
