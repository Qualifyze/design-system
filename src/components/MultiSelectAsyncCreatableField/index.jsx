import React from 'react'
import AsyncCreatableSelect from 'react-select/async-creatable'
import { useField } from 'formik'
import PropTypes from 'prop-types'

import FieldMessage from '../FieldMessage'
import FieldLabel from '../FieldLabel'
import Icon from '../Icon'
import Box from '../Box'
import Text from '../Text'
import Flex from '../Flex'

import baseTheme from './baseTheme'
import Wrapper from './Wrapper'

// eslint-disable-next-line react/prop-types
const MultiValueRemove = ({ innerProps }) => {
  return (
    <Box
      {...innerProps}
      sx={{
        'textDecoration': 'none !important',
        'border': 0,
        'cursor': 'pointer',
        'display': 'flex',
        'p': 2,
        'bg': 'transparent',
        'borderRadius': 2,
        'minWidth': '24px',
        '&::after': {
          content: '""',
          position: 'absolute',
          transform: 'translateY(-50%)',
          top: '50%',
          height: '100%',
          minHeight: '44px',
          minWidth: '44px',
          right: '-6px',
        },
        '&:hover': {
          outline: 'none',
          cursor: 'pointer',
          bg: 'grey.200',
        },
      }}
    >
      <Icon name="cross" size="standard" color="grey.700" />
    </Box>
  )
}

const spacing = {
  baseUnit: 4,
  controlHeight: 38,
  menuGutter: 8,
}
/**
 * Theming colors guide for react-select
 * primary:  control and option components selected
 * primary25: hover over option
 * neutral30: hover over control component
 * neutral20: control component border
 * neutral80: font color of value container
 * neutral0: background control
 */

const defaultVariant = customTheme => ({
  borderRadius: '5px',
  spacing,
  colors: {
    primary: customTheme.selected,
    primary25: customTheme.hoverOverOption,
    neutral80: customTheme.valueContainerTextColor,
    neutral30: customTheme.hoverOverControl,
    neutral20: customTheme.controlBorder,
    neutral0: customTheme.backGroundControl,
  },
  boxShadowMenuIsOpen: 'inset 0 0 0 1px',
  boxShadowIsFocused: 'inset 0 0 0 1px',
  boxShadowDefault: 'inset 0 0 0 1px',
  boxShadowHover: 'inset 0 0 0 1px',
})

const errorVariant = customTheme => ({
  borderRadius: '5px',
  spacing,
  colors: {
    primary: customTheme.selectedError,
    primary25: customTheme.hoverOverOption,
    neutral80: customTheme.valueContainerTextColor,
    neutral30: customTheme.hoverOverControlError,
    neutral20: customTheme.controlBorderError,
    neutral0: customTheme.backGroundControlError,
  },
  boxShadowMenuIsOpen: 'inset 0 0 0 2px',
  boxShadowIsFocused: 'inset 0 0 0 2px',
  boxShadowDefault: 'inset 0 0 0 2px',
  boxShadowHover: 'inset 0 0 0 2px',
})

const customStyles = {
  control: (provided, state) => {
    const styles = {
      ...provided,
      'width': '100%',
      'color': state.isDisabled && `${baseTheme.placeholderColor}`,
      'background':
        (state.isDisabled && `${baseTheme.disabledBackground}`) ||
        state.theme.colors.neutral0,
      'minHeight': 50,
      'borderWidth': '0px',
      'boxShadow':
        (state.menuIsOpen &&
          `${baseTheme.shadowFocusRing}, ${state.theme.boxShadowMenuIsOpen} ${state.theme.colors.primary}`) ||
        (state.isFocused &&
          `${state.theme.boxShadowIsFocused} ${state.theme.colors.neutral30}`) ||
        `${state.theme.boxShadowDefault} ${state.theme.colors.neutral20}`,
      '&:hover': {
        boxShadow:
          !state.menuIsOpen &&
          `${state.theme.boxShadowHover} ${state.theme.colors.neutral30}`,
      },
      '&:focus-within': {
        boxShadow: `${baseTheme.shadowFocusRing}, inset 0 0 0 1px ${state.theme.colors.neutral30}`,
      },
    }
    if (state.isDisabled) styles.borderColor = `${baseTheme.disabled}`
    return styles
  },
  valueContainer: provided => ({ ...provided }),
  input: () => ({
    margin: 0,
  }),
  menu: provided => ({
    ...provided,
    zIndex: 3,
    // The following values are taken from theme, but copy&pasted for ease
    marginTop: 4,
    borderRadius: 4,
    boxShadow: `0 0 0 1px hsl(210, 24%, 87%), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: 200,
  }),
  placeholder: provided => ({
    ...provided,
    color: baseTheme.placeholderColor,
    margin: 0,
    marginLeft: '-1px',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: state.isSelected
      ? baseTheme.optionTextSelected
      : baseTheme.optionTextColor,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color:
      (state.isFocused && state.theme.colors.primary) ||
      baseTheme.placeholderColor,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: baseTheme.multiSelectItem.label.backgroundColor,
    borderRadius: baseTheme.multiSelectItem.label.borderRadius,
    // line up the text with the remove icon
    alignItems: 'center',
    // padding needed as remove icon has more space to the right now
    paddingLeft: 2,
    margin: 0,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
  }),
  multiValueContainer: provided => ({
    ...provided,
    paddingLeft: 0,
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: baseTheme.multiSelectItem.label.color,
    whiteSpace: 'initial',
    textOverflow: 'initial',
    overflow: 'initial',
    wordBreak: 'break-word',
  }),
}

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
        components={{ MultiValueRemove }}
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
