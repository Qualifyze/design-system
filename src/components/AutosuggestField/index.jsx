import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { useCombobox } from 'downshift'

import Box from '../Box'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'
import { styled } from '../../util/style'

// XXX this is almost an exact copy of the Input component from the TextField
// Component.
const useErrorStyles = props =>
  props.hasError
    ? {
        'boxShadow': `inset 0 0 0 2px ${props.theme.colors.red[500]}`,
        'background': props.theme.colors.red[100],
        '&:hover': {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.red[700]}`,
        },
        '&:focus': {
          boxShadow: `${props.theme.shadows.focusRing}, inset 0 0 0 2px ${props.theme.colors.red[700]}`,
        },
      }
    : null

const Input = styled('input')(
  props => ({
    'fontSize': props.theme.fontSizes[2],
    'minHeight': '50px',
    'width': '100%',
    'borderRadius': props.theme.radii[2],
    'padding': props.theme.space[2],
    'border': 'none',
    'boxShadow': `inset 0 0 0 1px ${props.theme.colors.grey[500]}`,
    'appearance': 'none',
    'background': props.theme.colors.white,
    'outline': 'none',
    'color': props.theme.colors.grey[900],
    '&:hover': {
      boxShadow: `inset 0 0 0 1px ${props.theme.colors.grey[800]}`,
    },
    '&:focus': {
      boxShadow: `${props.theme.shadows.focusRing}, inset 0 0 0 1px ${props.theme.colors.grey[800]}`,
    },
  }),
  useErrorStyles
)

const Item = styled('li')(props => ({
  'paddingTop': props.theme.space[2],
  'paddingBottom': props.theme.space[2],
  'paddingLeft': props.theme.space[3],
  'paddingRight': props.theme.space[3],
  'background': props.isHighlighted ? props.theme.colors.primary[100] : null,
  'color': props.theme.colors.grey[900],
  '&:hover': {
    cursor: 'pointer',
  },
  '&:active': {
    color: props.theme.colors.white,
    background: props.theme.colors.primary[700],
  },
}))

const Menu = styled('ul')(props => ({
  margin: 0,
  color: props.theme.colors.secondary[500],
  marginBlockStart: props.theme.space[1],
  borderRadius: props.theme.radii[2],
  overflowX: 'hidden',
  position: 'absolute',
  zIndex: 3,
  background: props.theme.colors.white,
  width: '100%',
  paddingTop: `${props.theme.space[1]}px !important`,
  paddingBottom: `${props.theme.space[1]}px !important`,
  // The following values are taken from theme, but copy&pasted for ease
  boxShadow: `0 0 0 1px hsl(210, 24%, 87%), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
  visibility: props.isHidden ? 'hidden' : null,
}))

const extractText = item => item?.text ?? ''

const filterByContains = (items, value) =>
  items.filter(item => {
    const text = extractText(item)
    if (
      !text ||
      !value ||
      typeof text !== 'string' ||
      typeof value !== 'string'
    ) {
      return false
    }
    const lowerCaseText = text.toLowerCase()
    return lowerCaseText.includes(value.toLowerCase())
  })

const AutosuggestField = ({
  name,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  reserveMessageSpace,
  suggestions,
  maxNumberOfSuggestionsToDisplay,
}) => {
  // This are the items to be displayed and we only want a subset of them to
  // make it easier for the user
  const [inputSuggestions, setInputSuggestions] = useState(
    suggestions.slice(0, maxNumberOfSuggestionsToDisplay)
  )
  const [field, meta, { setValue, setTouched }] = useField({ name })

  const hasError = meta.error && meta.touched
  const messageToShow =
    hasError && meta.error.text
      ? `${meta.error.text.charAt(0).toUpperCase()}${meta.error.text.slice(1)}`
      : message ?? null

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    getComboboxProps,
    highlightedIndex,
    openMenu,
  } = useCombobox({
    items: inputSuggestions,
    itemToString: extractText,
    initialSelectedItem: field.value,
    onInputValueChange: ({ inputValue, selectedItem }) => {
      // Once an item is selected, you can't change the value unless you select
      // another item. Then, if the user deletes a letter, the value won't be
      // stored. We want to store this value, even if it doesn't match one of
      // the suggestions
      if (inputValue === selectedItem?.text) {
        setValue(selectedItem)
      } else {
        // XXX We stored whatever the user wrote as a text, leaving value empty
        setValue({ text: inputValue })
      }
      setInputSuggestions(
        filterByContains(suggestions, inputValue).slice(
          0,
          maxNumberOfSuggestionsToDisplay
        )
      )
    },
  })

  return (
    <Box {...getComboboxProps()}>
      <FieldLabel
        htmlFor={name}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
        {...getLabelProps()}
      />
      <Input
        id={name}
        type="text"
        hasError={hasError}
        {...field}
        {...meta}
        {...getInputProps()}
        onFocus={() => {
          if (!isOpen) openMenu()
        }}
        onBlur={() => {
          // XXX for some reason the formik implementation doesn't pick up when
          // the field has been touched so we do it manually. We use onBlur
          // because we want to give the user a chance to fill it up
          setTouched(true)
        }}
      />
      <Menu
        {...getMenuProps()}
        isHidden={!isOpen || inputSuggestions.length === 0}
      >
        {isOpen && inputSuggestions.length
          ? inputSuggestions.map((item, index) => (
              <Item
                key={`${item.text}`}
                {...getItemProps({
                  item,
                  index,
                  isHighlighted: highlightedIndex === index,
                })}
              >
                {item.text}
              </Item>
            ))
          : null}
      </Menu>
      {reserveMessageSpace || messageToShow ? (
        <FieldMessage
          message={messageToShow}
          tone={hasError ? 'critical' : 'neutral'}
        />
      ) : null}
    </Box>
  )
}

AutosuggestField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  secondaryLabel: PropTypes.node,
  tertiaryLabel: PropTypes.node,
  reserveMessageSpace: PropTypes.bool,
  suggestions: PropTypes.arrayOf(
    // eslint-disable-next-line react/forbid-prop-types
    PropTypes.shape({ text: PropTypes.string, value: PropTypes.any })
  ).isRequired,
  maxNumberOfSuggestionsToDisplay: PropTypes.number,
}

AutosuggestField.defaultProps = {
  label: null,
  message: undefined,
  placeholder: null,
  secondaryLabel: null,
  tertiaryLabel: null,
  reserveMessageSpace: true,
  maxNumberOfSuggestionsToDisplay: 10,
}

export default AutosuggestField
