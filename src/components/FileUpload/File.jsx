import React from 'react'
import PropTypes from 'prop-types'
import { getIn, useFormikContext } from 'formik'

import Flex from '../Flex'
import FieldMessage from '../FieldMessage'

const FileUploadRow = ({ text, name, index, children }) => {
  const { errors: formErrors } = useFormikContext()
  const fieldErrors = getIn(formErrors, `${name}.${index}`)
  const errors =
    typeof fieldErrors !== 'string' && !!fieldErrors
      ? Object.values(fieldErrors)
      : null
  return (
    <Flex
      sx={{
        'borderRadius': theme => theme.radii[1],
        'boxShadow': theme =>
          !!errors ? `inset 0 0 0 2px ${theme.colors.red[500]}` : null,
        'bg': theme => (!!errors ? theme.colors.red[100] : null),
        'flexDirection': 'column',
        'cursor': 'default',
        '&:hover, &:focus-within': {
          bg: !!errors ? 'red.100' : 'grey.100',
          boxShadow: theme =>
            !!errors ? `inset 0 0 0 2px ${theme.colors.red[700]}` : null,
        },
        'p': 2,
      }}
    >
      <Flex
        sx={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
      >
        <Flex sx={{ flex: 1, alignItems: 'center' }}>{text}</Flex>
        <Flex
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {children}
        </Flex>
      </Flex>
      {errors?.map(messageToShow => (
        <FieldMessage
          key={messageToShow}
          message={messageToShow}
          tone="critical"
        />
      ))}
    </Flex>
  )
}

FileUploadRow.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}

export default FileUploadRow
