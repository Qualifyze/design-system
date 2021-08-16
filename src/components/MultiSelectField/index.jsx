import React from 'react'
import Select from 'react-select'
import { useField } from 'formik'
import PropTypes from 'prop-types'

import FieldMessage from '../FieldMessage'
import FieldLabel from '../FieldLabel'
import Icon from '../Icon'
import Box from '../Box'
import {
  baseTheme,
  customStyles,
  errorVariant,
  defaultVariant,
  DropdownIndicator,
} from '../SelectField/baseTheme'
import Wrapper from '../SelectField/Wrapper'

// eslint-disable-next-line react/prop-types
export const MultiValueRemove = ({ innerProps }) => {
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

const MultiSelectField = ({
  options,
  name,
  label,
  placeholder,
  disabled,
  size,
  menuPlacement,
  noOptionsMessage,
  message,
  secondaryLabel,
  tertiaryLabel,
  reserveMessageSpace,
}) => {
  const [field, meta, helpers] = useField({ name })
  const hasError = meta.error && meta.touched
  let messageToShow = message ?? null

  if (hasError) {
    const errorText = Array.isArray(meta.error)
      ? meta.error.find(err => err)
      : meta.error
    messageToShow = `${errorText.charAt(0).toUpperCase()}${errorText.slice(1)}`
  }

  return (
    <Wrapper size={size}>
      <FieldLabel
        htmlFor={name}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      <Select
        options={options}
        placeholder={placeholder}
        name={field.name}
        onChange={newOptions =>
          helpers.setValue(newOptions ? newOptions.map(o => o.value) : [])
        }
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
          field.value.map(
            valueItem =>
              options.find(({ value }) => value === valueItem) || {
                value: valueItem,
                label: valueItem,
              }
          )
        }
        styles={customStyles}
        theme={
          (hasError && errorVariant(baseTheme)) || defaultVariant(baseTheme)
        }
        isDisabled={disabled}
        menuPlacement={menuPlacement}
        components={{ MultiValueRemove, DropdownIndicator }}
        isMulti
        isClearable={false}
        noOptionsMessage={noOptionsMessage}
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

MultiSelectField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
  menuPlacement: PropTypes.oneOf(['auto', 'top', 'bottom']),
  noOptionsMessage: PropTypes.func,
  message: PropTypes.string,
  secondaryLabel: PropTypes.node,
  tertiaryLabel: PropTypes.node,
  reserveMessageSpace: PropTypes.bool,
}
MultiSelectField.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
  reserveMessageSpace: true,
  message: undefined,
  secondaryLabel: null,
  tertiaryLabel: null,
}

export default MultiSelectField
