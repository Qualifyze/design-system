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
        components={{ MultiValueRemove, DropdownIndicator }}
        isMulti
        isClearable={false}
        noOptionsMessage={noOptionsMessage}
      />

      {meta.error && meta.touched && (
        <FieldMessage tone="critical" message={meta.error} />
      )}
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
}
MultiSelectField.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'standard',
  label: '',
  menuPlacement: 'auto',
}

export default MultiSelectField
