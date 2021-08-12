import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { styled } from '../../util/style'
import Box from '../Box'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'

const useErrorStyles = props =>
  props.hasError
    ? {
        'boxShadow': `inset 0 0 0 2px ${props.theme.colors.red[500]}`,
        'background': props.theme.colors.red[100],
        '&:hover': {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.red[700]}`,
        },
        '&:focus': {
          boxShadow: `${props.theme.shadows.focusRing}, inset 0 0 0 2px ${props.theme.colors.red[700]}`,
        },
      }
    : null

const PlainArea = styled('textarea')(
  props => ({
    'fontSize': props.theme.fontSizes[2],
    'minHeight': '50px',
    'maxHeight': '250px',
    'width': '100%',
    'borderRadius': props.theme.radii[2],
    'padding': props.theme.space[2],
    'border': 'none',
    'boxShadow': `0 0 0 1px ${props.theme.colors.grey[500]}`,
    'appearance': 'none',
    'background': props.theme.colors.white,
    'outline': 'none',
    'color': props.theme.colors.grey[900],
    'resize': props.resize,
    '&:hover': {
      boxShadow: `0 0 0 1px ${props.theme.colors.grey[800]}`,
    },
    '&:focus': {
      boxShadow: `${props.theme.shadows.focusRing}`,
    },
  }),
  useErrorStyles
)

const TextArea = ({
  name,
  label,
  placeholder,
  secondaryLabel,
  tertiaryLabel,
  message,
  reserveMessageSpace,
  resize,
  rows,
}) => {
  const [field, meta] = useField({ name })
  const hasError = meta.error && meta.touched
  const messageToShow = hasError
    ? `${meta.error.charAt(0).toUpperCase()}${meta.error.slice(1)}`
    : message ?? null

  return (
    <Box>
      <FieldLabel
        htmlFor={name}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      <PlainArea
        id={name}
        placeholder={placeholder}
        hasError={hasError}
        {...field}
        {...meta}
        resize={resize}
        rows={rows}
      />
      {reserveMessageSpace || messageToShow ? (
        <FieldMessage
          message={messageToShow}
          tone={hasError ? 'critical' : 'neutral'}
        />
      ) : null}
    </Box>
  )
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  secondaryLabel: PropTypes.node,
  tertiaryLabel: PropTypes.node,
  reserveMessageSpace: PropTypes.bool,
  resize: PropTypes.oneOf(['vertical', 'horizontal', 'none']),
  rows: PropTypes.number,
}

TextArea.defaultProps = {
  label: null,
  message: undefined,
  placeholder: null,
  secondaryLabel: null,
  tertiaryLabel: null,
  reserveMessageSpace: true,
  resize: 'vertical',
  rows: 1,
}

export default TextArea
