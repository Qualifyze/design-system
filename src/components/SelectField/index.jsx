import React from 'react'
import Select from 'react-select'
import { useField } from 'formik'
import PropTypes from 'prop-types'

import FieldMessage from '../FieldMessage'
import FieldLabel from '../FieldLabel'

import {
  baseTheme,
  customStyles,
  errorVariant,
  defaultVariant,
  DropdownIndicator,
} from './baseTheme'
import Wrapper from './Wrapper'

const SelectField = ({
  options,
  name,
  label,
  placeholder,
  secondaryLabel,
  tertiaryLabel,
  disabled,
  size,
  menuPlacement,
  noOptionsMessage,
  message,
  reserveMessageSpace,
}) => {
  const [field, meta, helpers] = useField({ name })
  const hasError = meta.error && meta.touched
  const messageToShow = hasError
    ? `${meta.error.charAt(0).toUpperCase()}${meta.error.slice(1)}`
    : message ?? null

  return (
    <Wrapper size={size}>
      <FieldLabel
        htmlFor={name}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      <Select
        options={options}
        placeholder={placeholder}
        name={field.name}
        onChange={option => {
          helpers.setValue(option.value)
        }}
        onBlur={() => {
          helpers.setTouched(true)
        }}
        // `value` needs to be set like this to make sure value gets updated
        // when the form field is changed, e.g., when resetting the form
        value={options.find(option => option.value === field.value) || ''}
        styles={customStyles}
        theme={
          (hasError && errorVariant(baseTheme)) || defaultVariant(baseTheme)
        }
        isDisabled={disabled}
        menuPlacement={menuPlacement}
        menuPortalTarget={window.document.body}
        menuPosition="absolute"
        noOptionsMessage={noOptionsMessage}
        components={{ DropdownIndicator }}
      />
      {reserveMessageSpace || messageToShow ? (
        <FieldMessage
          message={messageToShow}
          tone={hasError ? 'critical' : 'neutral'}
        />
      ) : null}
    </Wrapper>
  )
}

SelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
  menuPlacement: PropTypes.oneOf(['auto', 'top', 'bottom']),
  noOptionsMessage: PropTypes.func,
  message: PropTypes.string,
  secondaryLabel: PropTypes.node,
  tertiaryLabel: PropTypes.node,
  reserveMessageSpace: PropTypes.bool,
}

SelectField.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
  reserveMessageSpace: true,
  noOptionsMessage: undefined,
  message: undefined,
  secondaryLabel: null,
  tertiaryLabel: null,
}

export default SelectField
