import React from 'react'

import Icon from '../Icon'
import Flex from '../Flex'
import { theme } from '../../util/style'

/**
 * Theming colors guide for react-select
 * primary:  control and option components selected
 * primary25: hover over option
 * neutral30: hover over control component
 * neutral20: control component border
 * neutral80: font color of value container
 * neutral0: background control
 */

export const baseTheme = {
  selected: theme.colors.primary[600],
  hoverBackgroundControl: theme.colors.secondary[100],
  hoverOverControl: theme.colors.grey[800],
  controlBorder: theme.colors.grey[500],
  hoverOverOption: theme.colors.primary[100],
  valueContainerTextColor: 'black',
  backGroundControl: 'white',
  inputColor: theme.colors.grey[900],
  optionTextColor: theme.colors.grey[900],
  optionTextSelected: theme.colors.white,
  placeholderColor: theme.colors.grey[700],
  selectedError: theme.colors.red[600],
  hoverOverControlError: theme.colors.red[700],
  controlBorderError: theme.colors.red[500],
  backGroundControlError: theme.colors.red[100],
  disabledBackground: theme.colors.grey[200],
  disabled: theme.colors.grey[200],
  shadowFocusRing: theme.shadows.focusRing,
  // nest these incase we style up something else for multi select later
  multiSelectItem: {
    label: {
      backgroundColor: theme.colors.grey[300],
      color: theme.colors.grey[800],
      borderRadius: theme.radii[2],
    },
  },
}

const spacing = {
  baseUnit: 4,
  controlHeight: 38,
  menuGutter: 8,
}

export const customStyles = {
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
    color: baseTheme.inputColor,
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
  menuPortal: provided => ({
    ...provided,
    zIndex: 9999,
  }),
}

export const defaultVariant = customTheme => ({
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

export const errorVariant = customTheme => ({
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

// eslint-disable-next-line react/prop-types
export const DropdownIndicator = ({ innerProps }) => {
  return (
    <Flex sx={{ px: 2, color: 'grey.700' }} {...innerProps}>
      <Icon name="chevrondown" color="currentColor" />
    </Flex>
  )
}
