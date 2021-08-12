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
  formatOptionLabel,
  loadingMessage,
  noOptionsMessage,
  message,
  secondaryLabel,
  tertiaryLabel,
  reserveMessageSpace,
}) => {
  const [field, meta, helpers] = useField({ name })
  const hasError = meta.error && meta.touched

  const errorText = hasError ? meta.error.filter(err => err !== '')[0] : ''
  const messageToShow = hasError
    ? `${errorText.charAt(0).toUpperCase()}${errorText.slice(1)}`
    : message ?? null

  // Options are not available locally, so we need to cache all options locally
  const [cachedOptions, setCachedOptions] = React.useState(defaultOptions)

  return (
    <Wrapper size={size}>
      <FieldLabel
        htmlFor={name}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
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
          // allow customization of new option object so that the consumer
          // can choose the proper value and queue the option to create on
          // backend side
          const option = onCreateOption?.(valueString) || {
            value: valueString,
            label: valueString,
          }
          // Add newly created value...
          helpers.setValue([...field.value, option.value])
          // ...and save the object locally
          setCachedOptions(current => [...current, option])
        }}
        formatOptionLabel={(option, { context }) =>
          // allow formatting of the loaded option in the drop-down menu
          // react-select allows to format the selected option as well
          // (context === 'value') but we might be unnecessary
          // eslint-disable-next-line no-underscore-dangle
          context === 'menu' && formatOptionLabel && !option.__isNew__
            ? formatOptionLabel(option)
            : option.label
        }
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
          field.value.map(
            valueItem =>
              cachedOptions.find(({ value }) => value === valueItem) || {
                value: valueItem,
                label: valueItem,
              }
          )
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
        allowCreateWhileLoading
        createOptionPosition="first"
        loadingMessage={() => <Text align="center">{loadingMessage}</Text>}
        noOptionsMessage={() => <Text align="center">{noOptionsMessage}</Text>}
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
  formatOptionLabel: PropTypes.func,
  loadingMessage: PropTypes.string,
  noOptionsMessage: PropTypes.string,
  message: PropTypes.string,
  secondaryLabel: PropTypes.node,
  tertiaryLabel: PropTypes.node,
  reserveMessageSpace: PropTypes.bool,
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
  reserveMessageSpace: true,
  message: undefined,
  secondaryLabel: null,
  tertiaryLabel: null,
}

export default MultiSelectAsyncCreatableField
