import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import { useField } from 'formik'
import PropTypes from 'prop-types'

import FieldMessage from '../FieldMessage'
import FieldLabel from '../FieldLabel'
import Icon from '../Icon'
import Box from '../Box'

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
        'borderTopLeftRadius': 0,
        'borderBottomLeftRadius': 0,
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
  }),
}

export const MultiSelectCreatableField = ({
  options,
  name,
  label,
  placeholder,
  disabled,
  size,
  menuPlacement,
}) => {
  const [field, meta, helpers] = useField({ name })
  const [customInput, setCustomInput] = useState('')

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
        onInputChange={(newValue, actionMeta) => {
          // keep track of the input state, as on calling "set value" we will not have
          // the input value in this func
          setCustomInput(newValue)
          // if the user would like to add a new value
          if (actionMeta?.action === 'set-value') {
            options.push({
              // @TODO
              // we might need to watch out here to make sure the user does
              // not put anything in that could cause a security leak
              label: customInput,
              value: customInput,
            })
          }
        }}
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
        isClearable={false}
      />

      {meta.error && meta.touched && (
        <FieldMessage tone="critical" message={meta.error} />
      )}
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
}
MultiSelectCreatableField.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
}
