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
  }),
  variant({
    prop: 'size',
    variants: {
      tiny: {
        height: '18px',
        width: '18px',
        minWidth: '18px',
      },
      small: {
        height: '21px',
        width: '21px',
        minWidth: '21px',
      },
      standard: {
        height: '24px',
        width: '24px',
        minWidth: '24px',
      },
      large: {
        height: '27px',
        width: '27px',
        minWidth: '27px',
      },
    },
  }),
  useCheckedStyles,
  useErrorStyles,
  useDisabledStyles
)

const Checkbox = ({ name, label, disabled, reserveMessageSpace, size }) => {
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
            {meta.value && <Icon name="checkmark" size={size} color="white" />}
          </Indicator>
          <Flex
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
          </Flex>
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
}

Checkbox.defaultProps = {
  disabled: false,
  reserveMessageSpace: false,
  size: 'standard',
}

export default Checkbox
