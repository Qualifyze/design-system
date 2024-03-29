import { useField } from 'formik'
import React from 'react'
import PropTypes from 'prop-types'

import Flex from '../Flex'
import Icon from '../Icon'
import Box from '../Box'
import Text from '../Text'
import FieldMessage from '../FieldMessage'
import { styled, variant } from '../../util/style'

const Input = styled('input')(props => ({
  'outline': 'none',
  'cursor': props.disabled ? 'default' : 'pointer',
  'opacity': 0,
  'position': 'absolute',
  'top': '-10px',
  'left': '-10px',
  'appearance': 'none',
  'display': 'block',
  'width': '44px',
  'height': '44px',
  'margin': 0,
  'zIndex': 1,
  '&:focus + * > div': {
    boxShadow: `${props.theme.shadows.focusRing}, inset 0 0 0 1px ${props.theme.colors.grey[400]} !important`,
  },
}))

const useCheckedStyles = props =>
  props.isChecked
    ? {
        background: props.theme.colors.primary[800],
        boxShadow: `none`,
      }
    : null

const useErrorStyles = props =>
  // eslint-disable-next-line no-nested-ternary
  props.hasError
    ? props.isChecked
      ? {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.red[500]}`,
          background: props.theme.colors.red[500],
        }
      : {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.red[500]}`,
          background: props.theme.colors.red[100],
        }
    : null

const useDisabledStyles = props =>
  props.disabled
    ? {
        boxShadow: `inset 0 0 0 1px ${props.theme.colors.grey[200]}`,
        background: props.theme.colors.grey[100],
      }
    : null

const Indicator = styled(Box)(
  props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: props.theme.colors.white,
    boxShadow: `inset 0 0 0 1px ${props.theme.colors.grey[400]}`,
    borderRadius: props.theme.radii[2],
    marginRight: props.theme.space[2],
    height: '24px',
    width: '24px',
    minWidth: '24px',
  }),
  // as the text changes in size we need to adjust the space at the top
  // of the box to line up correctly
  variant({
    prop: 'size',
    variants: {
      tiny: {
        marginTop: '2px',
      },
      small: {
        marginTop: '2px',
      },
      standard: {
        marginTop: '0px',
      },
      large: {
        marginTop: '5px',
      },
    },
  }),
  useCheckedStyles,
  useErrorStyles,
  useDisabledStyles
)

const Checkbox = ({
  name,
  label,
  disabled,
  reserveMessageSpace,
  size,
  additionalText,
}) => {
  const [field, meta] = useField({ name, type: 'checkbox' })
  const hasError = meta.error && meta.touched

  return (
    <Box>
      <Flex alignItems="center">
        <Input
          type="checkbox"
          id={name}
          disabled={disabled}
          aria-hidden="true"
          {...field}
          {...meta}
        />
        <Flex alignItems="flex-start">
          <Indicator
            hasError={hasError}
            isChecked={meta.value}
            disabled={disabled}
            size={size}
          >
            {meta.value && <Icon name="checkmark" color="white" />}
          </Indicator>
          <Box sx={{ display: 'inline' }} as="span">
            <Box
              as="label"
              sx={{
                cursor: disabled ? 'default' : 'pointer',
              }}
              htmlFor={name}
            >
              <Text
                size={size}
                as="span"
                color={disabled ? 'grey.400' : 'grey.800'}
              >
                {label}
              </Text>
            </Box>
            {additionalText ? (
              <Text
                size={size}
                as="span"
                color={disabled ? 'grey.400' : 'grey.800'}
              >
                {additionalText}
              </Text>
            ) : null}
          </Box>
        </Flex>
      </Flex>
      {reserveMessageSpace || hasError ? (
        <FieldMessage
          message={meta.error}
          tone={meta.error ? 'critical' : 'neutral'}
        />
      ) : null}
    </Box>
  )
}
Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  /** Name specifies for which value within a form this input is */
  name: PropTypes.string.isRequired,
  /** The text to display */
  label: PropTypes.string.isRequired,
  /** Whether Checkbox is disabled */
  disabled: PropTypes.bool,
  reserveMessageSpace: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'standard', 'large']),
  additionalText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Checkbox.defaultProps = {
  disabled: false,
  reserveMessageSpace: false,
  size: 'standard',
  additionalText: '',
}

export default Checkbox
