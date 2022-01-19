import React from 'react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import FormDebugger from '../FormDebugger'
import Box from '../Box'
import Stack from '../Stack'

import Checkbox from './index'

export default { title: 'Checkbox', component: Checkbox }

export const Default = () => {
  const sizes = ['tiny', 'small', 'standard', 'large']

  const label = text('Label', 'Sign me up for the newsletter')
  const size = select('Size', sizes, 'standard')
  const disabled = boolean('Disabled', false)
  const error = boolean('Not false error', false)
  const insideState = boolean('Inside State', false)

  const checkboxSchemaNotEmpty = Yup.object().shape({
    newsletter: Yup.boolean().required().oneOf([true]),
  })

  const checkboxSchemaEmpty = Yup.object().shape({
    newsletter: Yup.boolean().required(),
  })
  return (
    <Box m={5}>
      <Formik
        initialValues={{
          newsletter: false,
          preference: false,
        }}
        onSubmit={values => {
          action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
        }}
        validationSchema={error ? checkboxSchemaNotEmpty : checkboxSchemaEmpty}
      >
        {() => (
          <Form>
            <Stack space={2}>
              <Checkbox name="preference" label="I like movies" size={size} />
              <Checkbox
                name="newsletter"
                label={label}
                size={size}
                disabled={disabled}
              />
              <Button type="submit" ml={5}>
                Submit
              </Button>
              {insideState && <FormDebugger />}
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

Default.story = {
  name: 'default',
}
