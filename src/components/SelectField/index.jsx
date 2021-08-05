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
  disabled,
  size,
  menuPlacement,
  noOptionsMessage,
}) => {
  const [field, meta, helpers] = useField({ name })

  return (
    <Wrapper size={size}>
      <FieldLabel htmlFor={name} label={label} />
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
          (meta.error && meta.touched && errorVariant(baseTheme)) ||
          defaultVariant(baseTheme)
        }
        isDisabled={disabled}
        menuPlacement={menuPlacement}
        noOptionsMessage={noOptionsMessage}
        components={{ DropdownIndicator }}
      />
      {meta.error && meta.touched && (
        <FieldMessage tone="critical" message={meta.error} />
      )}
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
}

SelectField.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
}
export default SelectField
