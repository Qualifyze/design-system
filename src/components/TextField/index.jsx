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

const Input = styled('input')(
  props => ({
    'fontSize': props.theme.fontSizes[2],
    'minHeight': '50px',
    'width': '100%',
    'borderRadius': props.theme.radii[2],
    'padding': props.theme.space[2],
    'border': 'none',
    'boxShadow': `inset 0 0 0 1px ${props.theme.colors.grey[500]}`,
    'appearance': 'none',
    'background': props.theme.colors.white,
    'outline': 'none',
    '&:hover': {
      boxShadow: `inset 0 0 0 1px ${props.theme.colors.grey[800]}`,
    },
    '&:focus': {
      boxShadow: `${props.theme.shadows.focusRing}, inset 0 0 0 1px ${props.theme.colors.grey[800]}`,
    },
  }),
  useErrorStyles
)

const validTypes = {
  text: 'text',
  password: 'password',
  email: 'email',
  search: 'search',
  number: 'number',
  tel: 'tel',
  time: 'time',
  url: 'url',
  date: 'date',
}

const TextField = ({
  name,
  label,
  type,
  placeholder,
  secondaryLabel,
  tertiaryLabel,
  message,
  reserveMessageSpace,
  ...props
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
      <Input
        id={name}
        placeholder={placeholder}
        type={validTypes[type]}
        hasError={hasError}
        {...field}
        {...meta}
        {...props}
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

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'search',
    'number',
    'tel',
    'time',
    'url',
  ]),
  placeholder: PropTypes.string,
  message: PropTypes.string,
  secondaryLabel: PropTypes.node,
  tertiaryLabel: PropTypes.node,
  reserveMessageSpace: PropTypes.bool,
}

TextField.defaultProps = {
  label: null,
  type: 'text',
  message: undefined,
  placeholder: null,
  secondaryLabel: null,
  tertiaryLabel: null,
  reserveMessageSpace: true,
}

export default TextField
