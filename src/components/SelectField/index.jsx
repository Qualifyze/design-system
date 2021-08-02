import React from 'react'
import Select from 'react-select'
import { useField } from 'formik'
import PropTypes from 'prop-types'

import FieldMessage from '../FieldMessage'
import FieldLabel from '../FieldLabel'
import Icon from '../Icon'
import Flex from '../Flex'

import baseTheme from './baseTheme'
import Wrapper from './Wrapper'

// eslint-disable-next-line react/prop-types
const MultiValueRemove = ({ innerProps }) => {
  return (
    <Flex sx={{ px: 2, color: 'grey.700' }} {...innerProps}>
      <Icon name="cross" color="currentColor" />
    </Flex>
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
    paddingLeft: 10,
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: baseTheme.multiSelectItem.label.color,
  }),
  multiValueRemove: provided => ({
    ...provided,
    cursor: 'pointer',
    // click area of the remove icon
    width: 44,
    height: 44,
    padding: 0,
    // make the icon in the middle of the click area
    alignItems: 'center',
    justifyContent: 'center',
    color: baseTheme.multiSelectItem.label.color,
  }),
}

export const MultiSelectField = ({
  options,
  name,
  label,
  placeholder,
  disabled,
  size,
  menuPlacement,
}) => {
  const [field, meta, helpers] = useField({ name })

  return (
    <Wrapper size={size}>
      <FieldLabel htmlFor={name} label={label} />
      <Select
        options={options}
        placeholder={placeholder}
        name={field.name}
        onChange={option =>
          helpers.setValue(option ? option.map(o => o.value) : [])
        }
        value={
          // if there is a value to sort, go through the selections (labels) and
          // on finding a matching value in the options list, return the first match
          // this is needed as if you go through all options and return the matches
          // the order will match the order of options and not selected options
          // from the user
          field.value
            ? field.value.map(
                fieldValue =>
                  options.filter(option => option.value === fieldValue)[0]
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
      />

      {meta.error && meta.touched && (
        <FieldMessage tone="critical" message={meta.error} />
      )}
    </Wrapper>
  )
}

export const SelectField = ({
  options,
  name,
  label,
  placeholder,
  disabled,
  size,
  menuPlacement,
}) => {
  const [field, meta, helpers] = useField({ name })

  return (
    <Wrapper size={size}>
      <FieldLabel htmlFor={name} label={label} />
      <Select
        options={options}
        placeholder={placeholder}
        name={field.name}
        onChange={option => helpers.setValue(option.value)}
        value={options.find(option => option.value === field.value) || ''}
        styles={customStyles}
        theme={
          (meta.error && meta.touched && errorVariant(baseTheme)) ||
          defaultVariant(baseTheme)
        }
        isDisabled={disabled}
        menuPlacement={menuPlacement}
      />

      {meta.error && meta.touched && (
        <FieldMessage tone="critical" message={meta.error} />
      )}
    </Wrapper>
  )
}

// make some types for our components, the multi inherits from the select but feel free
// to change it later if you need to this was more just to save typing.
const SelectPropTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
  menuPlacement: PropTypes.oneOf(['auto', 'top', 'bottom']),
}

const SelectDefaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
}

// Assign the prop types to the components, later you can spread these if they deviate
// and you need to change one or the other
SelectField.propTypes = SelectPropTypes
SelectField.defaultProps = SelectDefaultProps

MultiSelectField.propTypes = SelectPropTypes
MultiSelectField.defaultProps = SelectDefaultProps
