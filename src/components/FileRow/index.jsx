import React from 'react'
import PropTypes from 'prop-types'

import Flex from '../Flex'
import PrimaryAction from '../FileBox/PrimaryAction'
import DangerAction from '../FileBox/DangerAction'
import FieldMessage from '../FieldMessage'

const FileUploadRow = ({ text, errors, children }) => {
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
        <Flex sx={{ flex: 1, alignItems: 'center', color: 'grey.800' }}>
          {text}
        </Flex>
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

FileUploadRow.PrimaryAction = PrimaryAction
FileUploadRow.DangerAction = DangerAction
FileUploadRow.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  errors: PropTypes.arrayOf(PropTypes.string),
}

FileUploadRow.defaultProps = {
  children: null,
  errors: null,
}

export default FileUploadRow
