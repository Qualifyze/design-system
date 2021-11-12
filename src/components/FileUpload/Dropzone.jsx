import React from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'

import Box from '../Box'
import Flex from '../Flex'
import Icon from '../Icon'

import HiddenFileInput from './HiddenFileInput'

const Dropzone = ({
  name,
  onSelectFiles,
  instructions,
  sx,
  multiple,
  accept,
}) => {
  const onDrop = React.useCallback(files => onSelectFiles(files), [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    accept,
  })

  return (
    <Box>
      <HiddenFileInput id={name} type="file" {...getInputProps()} />

      <Flex
        sx={{
          'width': '100%',
          'flexDirection': 'column',
          'justifyContent': 'center',
          'alignItems': 'center',
          'border': isDragActive ? '1px solid' : '1px dashed',
          'borderColor': isDragActive ? 'grey.800' : 'grey.500',
          'boxShadow': isDragActive
            ? theme => `${theme.shadows.focusRing}`
            : null,
          'borderRadius': 8,
          'bg': isDragActive ? 'primary.100' : 'white',
          'p': 4,
          'cursor': 'pointer',
          '&:hover': {
            borderColor: 'grey.800',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: theme => `${theme.shadows.focusRing}`,
            border: '1px solid',
            borderColor: 'grey.800',
          },
          ...sx,
        }}
        {...getRootProps()}
      >
        <Icon
          name="Upload"
          size="large"
          color="primary.500"
          mb={instructions ? 3 : 0}
        />
        <Box>{instructions}</Box>
      </Flex>
    </Box>
  )
}

Dropzone.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  onSelectFiles: PropTypes.func,
  instructions: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
  // eslint-disable-next-line react/require-default-props
  multiple: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  accept: PropTypes.string,
}

Dropzone.defaultProps = {
  instructions: null,
  sx: null,
}

export default Dropzone
