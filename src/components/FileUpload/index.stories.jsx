import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Text from '../Text'
import TextLink from '../TextLink'
import Box from '../Box'
import FormDebugger from '../FormDebugger'
import Button from '../Button'
import Stack from '../Stack'
import Inline from '../Inline'
import Actions from '../Actions'

import Dropzone from './Dropzone'
import { upload } from './mockUpload'

import FileUpload from '.'

export default { title: 'FileUpload', component: Dropzone }

export const FileField = () => {
  return (
    <Formik
      initialValues={{
        pokemonCards: [],
      }}
      // let's mock just sending the first one
      onSubmit={values => upload(values.pokemonCards[0].fileData)}
      validationSchema={Yup.object().shape({
        pokemonCards: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required(),
              size: Yup.number().max(300000, 'Too big'),
              type: Yup.string()
                .oneOf(
                  [
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'image/png',
                  ],
                  'Wrong format'
                )
                .required(),
            })
          )
          .required('Give me your best 3')
          .min(3, 'At least 3 cards please'),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box sx={{ p: 4 }}>
            <Stack>
              <Box>
                <FileUpload
                  name="pokemonCards"
                  label="Upload your Pokemon cards here"
                  secondaryLabel="only if you want to"
                  tertiaryLabel="please"
                  message="Only .png"
                  // jpeg is just for testing the validation
                  accept="image/png, image/jpeg"
                  inputComponent={
                    <FileUpload.Dropzone
                      instructions={
                        <Text>
                          <TextLink>Browse</TextLink> or drag and drop to upload
                        </Text>
                      }
                    />
                  }
                >
                  {({ files, name, arrayHelpers }) => {
                    return (
                      <Box sx={{ py: 4 }}>
                        <Stack space="1">
                          {files.map((file, index) => {
                            return (
                              <FileUpload.File
                                // eslint-disable-next-line react/no-array-index-key
                                key={`${file.name}-${index}`}
                                name={name}
                                index={index}
                                text={file.name}
                              >
                                <FileUpload.PrimaryAction
                                  iconName="download"
                                  onClick={() =>
                                    // eslint-disable-next-line no-alert
                                    alert("I'm supposed to be a download")
                                  }
                                />
                                <FileUpload.DangerAction
                                  iconName="trash"
                                  onClick={() => arrayHelpers.remove(index)}
                                  sx={{ ml: 3 }}
                                />
                              </FileUpload.File>
                            )
                          })}
                        </Stack>
                      </Box>
                    )
                  }}
                </FileUpload>
              </Box>
            </Stack>
            <Box>
              <Actions>
                <Button type="submit" isLoading={isSubmitting}>
                  Submit
                </Button>
              </Actions>
            </Box>
            <Box>
              <FormDebugger />
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

FileField.story = {
  name: 'default',
}

export const FileBoxList = () => {
  return (
    <Formik
      initialValues={{
        pokemonCards: [],
      }}
      // let's mock just sending the first one
      onSubmit={values => upload(values.pokemonCards[0].fileData)}
      validationSchema={Yup.object().shape({
        pokemonCards: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required(),
              size: Yup.number().max(300000, 'Too big'),
            })
          )
          .required('Give me your best 3')
          .min(3, 'At least 3 cards please'),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box sx={{ p: 4 }}>
            <Stack>
              <Box>
                <FileUpload
                  name="pokemonCards"
                  label="Upload everything you want"
                  secondaryLabel="awesome, right?"
                  tertiaryLabel="Try different extensions to see the magic"
                  message="We accept doc, docx, pdf, xls, xlsx, zip, rar, ppt, pptx"
                  inputComponent={
                    <FileUpload.Dropzone
                      instructions={
                        <Text>
                          <TextLink>Browse</TextLink> or drag and drop to upload
                        </Text>
                      }
                    />
                  }
                >
                  {({ files, name, arrayHelpers }) => {
                    return (
                      <Box sx={{ py: 4 }}>
                        <Inline space="1">
                          {files.map((file, index) => {
                            return (
                              <FileUpload.FileBox
                                // eslint-disable-next-line react/no-array-index-key
                                key={`${file.name}-${index}`}
                                name={name}
                                index={index}
                                text={file.name}
                              >
                                <FileUpload.DangerAction
                                  iconName="trash"
                                  onClick={() => arrayHelpers.remove(index)}
                                  sx={{ ml: 3 }}
                                />
                              </FileUpload.FileBox>
                            )
                          })}
                        </Inline>
                      </Box>
                    )
                  }}
                </FileUpload>
              </Box>
            </Stack>
            <Box>
              <Actions>
                <Button type="submit" isLoading={isSubmitting}>
                  Submit
                </Button>
              </Actions>
            </Box>
            <Box>
              <FormDebugger />
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  )
}
FileBoxList.story = {
  name: 'FileBox',
}
