import React from 'react'
import AsyncCreatableSelect from 'react-select/async-creatable'
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

const MultiSelectAsyncCreatableField = ({
  defaultOptions = [],
  loadOptions,
  name,
  label,
  placeholder,
  disabled,
  size,
  menuPlacement,
  createNewLabelText,
  onCreateOption,
  loadingMessage,
  noOptionsMessage,
}) => {
  const [field, meta, helpers] = useField({ name })
  // Options are not available locally, so we need to cache all options locally
  const [cachedOptions, setCachedOptions] = React.useState(defaultOptions)

  return (
    <Wrapper size={size}>
      <FieldLabel htmlFor={name} label={label} />
      <AsyncCreatableSelect
        loadOptions={loadOptions}
        placeholder={placeholder}
        name={field.name}
        onChange={valueArray => {
          // We only need a string array in Formik state...
          helpers.setValue(valueArray ? valueArray.map(o => o.value) : [])
          // ...but we need to cache the object array locally
          setCachedOptions(valueArray)
        }}
        onCreateOption={valueString => {
          // Add newly created string...
          helpers.setValue([...field.value, valueString])
          // ...and cache the object locally
          setCachedOptions(current => [
            ...current,
            { label: valueString, value: valueString },
          ])
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
        value={
          // if there is a value to sort, go through the selections (labels) and
          // on finding a matching value in the options list, return the first match
          // this is needed as if you go through all options and return the matches
          // the order will match the order of options and not selected options
          // from the user
          field.value.length
            ? field.value.map(
                valueItem =>
                  cachedOptions.filter(
                    option => option.value === valueItem
                  )[0] || {
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
        loadingMessage={() => <Text align="center">{loadingMessage}</Text>}
        noOptionsMessage={() => <Text align="center">{noOptionsMessage}</Text>}
      />

      {meta.error && meta.touched && (
        <FieldMessage tone="critical" message={meta.error} />
      )}
    </Wrapper>
  )
}

MultiSelectAsyncCreatableField.propTypes = {
  defaultOptions: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ),
  loadOptions: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
  menuPlacement: PropTypes.oneOf(['auto', 'top', 'bottom']),
  createNewLabelText: PropTypes.string,
  onCreateOption: PropTypes.func,
  loadingMessage: PropTypes.string,
  noOptionsMessage: PropTypes.string,
}
MultiSelectAsyncCreatableField.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
  createNewLabelText: 'Create',
  loadingMessage: 'Loading ...',
  noOptionsMessage: 'No Options',
}

export default MultiSelectAsyncCreatableField