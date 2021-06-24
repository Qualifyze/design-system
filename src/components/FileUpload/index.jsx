import React from 'react'
import PropTypes from 'prop-types'
import { FieldArray, useFormikContext } from 'formik'

import Box from '../Box'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'

import Dropzone from './Dropzone'
import File from './File'
import { PrimaryAction, DangerAction } from './Actions'
import FileBox from './FileBox'

const readFileContent = async file => {
  return new Promise(resolve => {
    const reader = new window.FileReader()
    reader.onload = e => {
      resolve(e.target.result)
    }
    reader.readAsArrayBuffer(file)
  })
}

const FileUpload = ({
  name,
  label,
  secondaryLabel,
  tertiaryLabel,
  message,
  reserveMessageSpace,
  inputComponent,
  multiple,
  accept,
  children,
}) => {
  const { values, errors } = useFormikContext()

  const hasError = typeof errors[name] === 'string'

  const messageToShow = hasError ? errors[name] : message ?? null
  return (
    <Box>
      <FieldLabel
        htmlFor={name}
        label={label}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      <FieldArray
        name={name}
        render={arrayHelpers => {
          return (
            <>
              {React.cloneElement(inputComponent, {
                name,
                accept,
                multiple,
                onSelectFiles: files => {
                  return [...files].map(async file => {
                    const fileData = await readFileContent(file)
                    arrayHelpers.push({
                      lastModified: file.lastModified,
                      name: file.name,
                      path: file.path,
                      size: file.size,
                      type: file.type,
                      fileData,
                    })
                  })
                },
              })}
              {reserveMessageSpace || messageToShow ? (
                <FieldMessage
                  message={messageToShow}
                  tone={hasError ? 'critical' : 'neutral'}
                />
              ) : null}
              {children({ files: values[name], arrayHelpers, name })}
            </>
          )
        }}
      />
    </Box>
  )
}

FileUpload.Dropzone = Dropzone
FileUpload.File = File
FileUpload.FileBox = FileBox
FileUpload.PrimaryAction = PrimaryAction
FileUpload.DangerAction = DangerAction

FileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.string,
  secondaryLabel: PropTypes.node,
  tertiaryLabel: PropTypes.node,
  reserveMessageSpace: PropTypes.bool,
  children: PropTypes.func,
  inputComponent: PropTypes.node.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
}
FileUpload.defaultProps = {
  label: null,
  message: undefined,
  secondaryLabel: null,
  tertiaryLabel: null,
  reserveMessageSpace: true,
  children: null,
  accept: null,
  multiple: true,
}
export default FileUpload
