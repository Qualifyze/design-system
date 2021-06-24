import React from 'react'
import PropTypes from 'prop-types'
import { getIn, useFormikContext } from 'formik'

import Box from '../Box'
import Flex from '../Flex'
import Icon from '../Icon'
import Text from '../Text'
import {
  getIconColor,
  getIconShape,
  getFileExtension,
} from '../FileBox/helpers'
import FieldMessage from '../FieldMessage'

const FileBox = ({ text, name, index, children }) => {
  const fileExtension = getFileExtension(text)
  const iconColor = getIconColor(fileExtension)
  const iconShape = getIconShape(fileExtension)

  const { errors: formErrors } = useFormikContext()
  const fieldErrors = getIn(formErrors, `${name}.${index}`)
  const errors =
    typeof fieldErrors !== 'string' && !!fieldErrors
      ? Object.values(fieldErrors)
      : null

  return (
    <Box>
      <Flex
        sx={{
          'flexDirection': 'row',
          'justifyContent': 'space-between',
          'display': 'flex',
          'flex': ['1 1 100%', null],
          'borderRadius': theme => theme.radii[1],
          'p': 2,
          'pl': 3,
          'border': 'none',
          'fontWeight': 'normal',
          'boxShadow': theme =>
            !!errors
              ? `inset 0 0 0 2px ${theme.colors.red[500]}`
              : `inset 0 0 0 1px ${theme.colors.grey[300]}`,
          'background': theme => (!!errors ? theme.colors.red[100] : 'white'),
          'outline': 'none',
          'minHeight': '48px',
          '.actions': {
            visibility: 'hidden',
          },
          '&:hover': {
            'boxShadow': theme =>
              !!errors
                ? `inset 0 0 0 2px ${theme.colors.red[700]}`
                : `inset 0 0 0 1px ${theme.colors.grey[800]}`,
            '.actions': {
              visibility: 'visible',
            },
          },
          '&:focus': {
            boxShadow: theme =>
              `${theme.shadows.focusRing}, inset 0 0 0 1px ${theme.colors.grey[800]}`,
          },
        }}
      >
        <Flex alignItems="center" sx={{ pr: 2 }}>
          <Icon name={iconShape} color={iconColor} sx={{ mr: 2 }} />
          <Text size="small">
            {text.indexOf('.') > 34 ? `${text.substring(0, 34)}...` : text}
          </Text>
        </Flex>
        <Flex className="actions">{children}</Flex>
      </Flex>
      {errors?.map(messageToShow => (
        <FieldMessage
          key={messageToShow}
          message={messageToShow}
          tone="critical"
        />
      ))}
    </Box>
  )
}

FileBox.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}

export default FileBox
