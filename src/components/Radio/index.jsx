import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import { styled } from '../../util/style'
import Text from '../Text'
import Flex from '../Flex'
import Box from '../Box'

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
    boxShadow: `${props.theme.shadows.focusRing}, inset 0 0 0 2px ${props.theme.colors.primary[800]}, inset 0 0 0 4px white`,
  },
}))

const useCheckedStyles = props =>
  props.isChecked
    ? {
        background: props.theme.colors.primary[800],
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.primary[800]}, inset 0 0 0 4px white`,
      }
    : null

const useErrorStyles = props =>
  // eslint-disable-next-line no-nested-ternary
  props.hasError
    ? props.isChecked
      ? {
          boxShadow: `inset 0 0 0 2px ${props.theme.colors.red[500]}, inset 0 0 0 4px white`,
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
    height: '24px',
    width: '24px',
    background: props.theme.colors.white,
    boxShadow: `inset 0 0 0 1px ${props.theme.colors.grey[400]}`,
    borderRadius: '50%',
    marginRight: props.theme.space[2],
  }),
  useCheckedStyles,
  useErrorStyles,
  useDisabledStyles
)

const Radio = ({ name, label, disabled, value }) => {
  const [field, meta] = useField({ name, type: 'radio' })
  const hasError = meta.error && meta.touched

  return (
    <Box>
      <Flex alignItems="center">
        <Input
          type="radio"
          id={value}
          disabled={disabled}
          aria-hidden="true"
          {...field}
          {...meta}
          value={value} // Has to come last
        />
        <Flex alignItems="center">
          <Indicator
            hasError={hasError}
            isChecked={meta.value === value}
            disabled={disabled}
          />
          <Flex
            as="label"
            sx={{
              cursor: disabled ? 'default' : 'pointer',
              lineHeight: '24px',
            }}
            htmlFor={value}
          >
            <Text
              as="span"
              color={disabled ? 'grey.400' : 'grey.800'}
              sx={{
                'lineHeight': '24px',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  transform: 'translateY(-50%)',
                  top: '50%',
                  height: '100%',
                  minHeight: '44px',
                  minWidth: '44px',
                  left: '-10px',
                  right: '-10px',
                },
              }}
            >
              {label}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
Radio.displayName = 'Radio'

Radio.propTypes = {
  /** Name specifies for which value within a form this input is */
  name: PropTypes.string.isRequired,
  /** The text to display */
  label: PropTypes.string.isRequired,
  /** Whether Radio is disabled */
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
}

Radio.defaultProps = {
  disabled: false,
}

export default Radio
