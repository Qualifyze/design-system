/* eslint-disable no-alert */
import presignedPostData from './signedPOSTdata.json'

/**
 * We are recreating one of our use cases, sending a file
 * through a POST using signed data from S3
 * You can find it in NEXT/UselessFiles/UploadedFile on the datastorage
 */
export const upload = async data => {
  const blob = new Blob([data])

  const formData = new FormData()
  Object.keys(presignedPostData.fields).forEach(key => {
    formData.append(key, presignedPostData.fields[key])
  })
  formData.append('file', blob)

  const response = await fetch(presignedPostData.url, {
    method: 'POST',
    body: formData,
  })

  alert(response.ok ? 'Success' : 'ERROR')
  return response
}
