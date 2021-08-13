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

const SelectCreatableField = ({
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
  const messageToShow = hasError
    ? `${meta.error.charAt(0).toUpperCase()}${meta.error.slice(1)}`
    : message ?? null

  return (
    <Wrapper size={size}>
      <FieldLabel htmlFor={name} label={label} />
      <CreatableSelect
        options={options}
        placeholder={placeholder}
        name={field.name}
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
        onChange={option => helpers.setValue(option.value)}
        onCreateOption={newValue => {
          helpers.setValue(newValue)
          onCreateOption?.()
        }}
        // We need to sync the Formik state with the `react-select` input. To do
        // that, we need to find out whether the user...
        //    a) ...chose an option of the passed `options` list or
        //    b) ...created their own option or
        //    c) ...the input is currently empty/undefined
        value={(() => {
          const foundOption = options.find(o => o.value === field.value)
          switch (true) {
            // a)
            case !!foundOption:
              return foundOption
            // b)
            case !!field.value:
              return { label: field.value, value: field }
            // c)
            default:
              return ''
          }
        })()}
        styles={customStyles}
        theme={
          (meta.error && meta.touched && errorVariant(baseTheme)) ||
          defaultVariant(baseTheme)
        }
        isDisabled={disabled}
        menuPlacement={menuPlacement}
        createOptionPosition="first"
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
SelectCreatableField.propTypes = {
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
SelectCreatableField.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
  createNewLabelText: 'Create',
  reserveMessageSpace: true,
  message: undefined,
}

export default SelectCreatableField
