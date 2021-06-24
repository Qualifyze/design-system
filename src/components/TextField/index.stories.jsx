/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextLink from '../TextLink'
import Box from '../Box'
import FieldLabel from '../FieldLabel'
import Columns from '../Columns'
import Column from '../Column'
import Button from '../Button'
import Inline from '../Inline'
import FormDebugger from '../FormDebugger'

import TextField from './index'

export default { title: 'TextField', component: TextField }

export const Default = () => {
  const label = text('Label', 'Social Security Number')
  const message = text('Message', 'E.g., 123-456-789')
  const secondaryLabel = text('Secondary Label', 'not optional')
  const tertiaryLabel = text('Tertiary Label', 'Need help?')

  return (
    <Formik
      initialValues={{
        ssn: '',
      }}
      onSubmit={values => {
        action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
      }}
      validationSchema={Yup.object().shape({
        ssn: Yup.string()
          .required()
          .min(7, 'That is too short to be a valid SSN!'),
      })}
    >
      {() => (
        <Form>
          <TextField
            name="ssn"
            label={label}
            message={message}
            secondaryLabel={secondaryLabel}
            tertiaryLabel={<TextLink href="#">{tertiaryLabel}</TextLink>}
          />
          <FormDebugger />
        </Form>
      )}
    </Formik>
  )
}
Default.story = {
  name: 'default',
}

export const InlineStory = () => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={values => {
        action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required().min(7, 'That is too short mate!'),
      })}
    >
      {() => (
        <Form>
          <Box sx={{ p: 3 }}>
            <Box>
              <FieldLabel
                htmlFor="name"
                label="Add new document"
                description="Please enter the name of the document you want to add."
              />
            </Box>
            <Columns space={[0, null, 3]} collapseBelow="tablet">
              <Column>
                <TextField name="name" />
              </Column>
              <Column>
                <Inline>
                  <Button type="submit">Add document</Button>
                </Inline>
              </Column>
            </Columns>
          </Box>
          <FormDebugger />
        </Form>
      )}
    </Formik>
  )
}
InlineStory.story = {
  name: 'inline TextField',
}
