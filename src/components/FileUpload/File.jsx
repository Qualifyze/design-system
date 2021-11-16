import React from 'react'
import PropTypes from 'prop-types'
import { getIn, useFormikContext } from 'formik'

import FileRow from '../FileRow'

const FileUploadRow = ({ text, name, index, children }) => {
  const { errors: formErrors } = useFormikContext()
  const fieldErrors = getIn(formErrors, `${name}.${index}`)
  const errors =
    typeof fieldErrors !== 'string' && !!fieldErrors
      ? Object.values(fieldErrors)
      : null
  return (
    <FileRow text={text} errors={errors}>
      {children}
    </FileRow>
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
