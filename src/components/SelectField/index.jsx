import React from 'react'
import Select from 'react-select'
import { useField } from 'formik'
import PropTypes from 'prop-types'

import FieldMessage from '../FieldMessage'
import FieldLabel from '../FieldLabel'

import baseTheme from './baseTheme'
import Wrapper from './Wrapper'

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

const SelectField = ({
  options,
  name,
  label,
  placeholder,
  disabled,
  size,
  menuPlacement,
  ...props
}) => {
  const [field, meta, helpers] = useField({ name })

  const getValue = () => {
    // for single option inputs just return the value selected
    if (!props.isMulti) {
      return options.find(option => option.value === field.value) || ''
    }
    return options.filter(option => field.value?.includes(option.value))
  }

  const onChangeHandler = option => {
    if (!props.isMulti) {
      helpers.setValue(option.value)
    }
    helpers.setValue(option ? option.map(o => o.value) : [])
  }

  const customStyles = {
    control: (provided, state) => {
      const styles = {
        ...provided,
        'width': '100%',
        'color': state.isDisabled && `${baseTheme.placeholderColor}`,
        'background':
          (state.isDisabled && `${baseTheme.disabledBackground}`) ||
          state.theme.colors.neutral0,
        'minHeight': 0,
        'height': 50,
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
  }
  return (
    <Wrapper size={size}>
      <FieldLabel htmlFor={name} label={label} />
      <Select
        options={options}
        placeholder={placeholder}
        name={field.name}
        onChange={onChangeHandler}
        value={getValue()}
        styles={customStyles}
        theme={
          (meta.error && meta.touched && errorVariant(baseTheme)) ||
          defaultVariant(baseTheme)
        }
        isDisabled={disabled}
        menuPlacement={menuPlacement}
        {...props}
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
  isMulti: PropTypes.boolean,
}

SelectField.defaultProps = {
  placeholder: '',
  disabled: false,
  isMulti: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
}
export default SelectField
