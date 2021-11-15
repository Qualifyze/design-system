import React from 'react'
import PropTypes from 'prop-types'

import Flex from '../Flex'
import PrimaryAction from '../FileBox/PrimaryAction'
import DangerAction from '../FileBox/DangerAction'

// The styling of this should match with `src/components/FileUpload/File.jsx`
const FileUploadRow = ({ text, children }) => {
  return (
    <Flex
      sx={{
        'borderRadius': theme => theme.radii[1],
        'flexDirection': 'column',
        'boxShadow': theme => `inset 0 0 0 1px ${theme.colors.grey[500]}`,
        '&:hover, &:focus-within': {
          boxShadow: theme => `inset 0 0 0 1px ${theme.colors.grey[800]}`,
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
    </Flex>
  )
}

FileUploadRow.PrimaryAction = PrimaryAction
FileUploadRow.DangerAction = DangerAction
FileUploadRow.propTypes = {
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}

export default FileUploadRow
