import React from 'react'
import CreatableSelect from 'react-select/creatable'
import { useField } from 'formik'
import PropTypes from 'prop-types'

import FieldMessage from '../FieldMessage'
import FieldLabel from '../FieldLabel'
import Text from '../Text'
import Flex from '../Flex'
import {
  baseTheme,
  customStyles,
  errorVariant,
  defaultVariant,
  DropdownIndicator,
} from '../SelectField/baseTheme'
import Wrapper from '../SelectField/Wrapper'
import { MultiValueRemove } from '../MultiSelectField'

const MultiSelectCreatableField = ({
  options,
  name,
  label,
  placeholder,
  disabled,
  size,
  menuPlacement,
  createNewLabelText,
  onCreateOption,
  message,
  reserveMessageSpace,
}) => {
  const [field, meta, helpers] = useField({ name })
  const hasError = meta.error && meta.touched
  const errorText = hasError ? meta.error.filter(err => err !== '')[0] : ''
  const messageToShow = hasError
    ? `${errorText.charAt(0).toUpperCase()}${errorText.slice(1)}`
    : message ?? null

  return (
    <Wrapper size={size}>
      <FieldLabel htmlFor={name} label={label} />
      <CreatableSelect
        options={options}
        placeholder={placeholder}
        name={field.name}
        onChange={option =>
          helpers.setValue(option ? option.map(o => o.value) : [])
        }
        onCreateOption={newValue => {
          // take the current selection, plus anything new that might be added
          helpers.setValue([...field.value, newValue])
          onCreateOption?.()
        }}
        formatCreateLabel={input => {
          return (
            <Flex>
              {`${createNewLabelText}:`}
              <Text weight="medium">&nbsp;{`"${input}"`}</Text>
            </Flex>
          )
        }}
        onBlur={() => {
          helpers.setTouched(true)
        }}
        // `value` needs to be set like this to make sure value gets updated
        // when the form field is changed, e.g., when resetting the form
        value={
          // if there is a value to sort, go through the selections (labels) and
          // on finding a matching value in the options list, return the first match
          // this is needed as if you go through all options and return the matches
          // the order will match the order of options and not selected options
          // from the user
          field.value
            ? field.value.map(
                valueItem =>
                  options.filter(option => option.value === valueItem)[0] || {
                    value: valueItem,
                    label: valueItem,
                  }
              )
            : []
        }
        styles={customStyles}
        theme={
          (meta.error && meta.touched && errorVariant(baseTheme)) ||
          defaultVariant(baseTheme)
        }
        isDisabled={disabled}
        menuPlacement={menuPlacement}
        components={{ MultiValueRemove, DropdownIndicator }}
        isMulti
        isClearable={false}
        createOptionPosition="first"
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

MultiSelectCreatableField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
  menuPlacement: PropTypes.oneOf(['auto', 'top', 'bottom']),
  createNewLabelText: PropTypes.string,
  onCreateOption: PropTypes.func,
  message: PropTypes.string,
  reserveMessageSpace: PropTypes.bool,
}
MultiSelectCreatableField.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
  createNewLabelText: 'Create',
  reserveMessageSpace: true,
  message: undefined,
}

export default MultiSelectCreatableField
