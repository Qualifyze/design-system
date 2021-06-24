import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import FormDebugger from '../FormDebugger'
import Box from '../Box'

import Radio from './index'

export default { title: 'Radio', component: Radio }

export const Default = () => {
  const sizes = ['tiny', 'small', 'standard', 'large']

  const size = select('Size', sizes, 'standard')
  const disabled = boolean('Disabled', false)
  const insideState = boolean('Inside State', false)
  const forceToSelect = boolean('Force to select', false)

  const RadioSchemaNotEmpty = Yup.object().shape({
    movie: Yup.string().required(),
  })

  return (
    <Formik
      initialValues={{
        movie: '',
      }}
      onSubmit={values => {
        action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
      }}
      validationSchema={forceToSelect ? RadioSchemaNotEmpty : null}
    >
      {({ resetForm }) => (
        <Form>
          <Box mx={5} mt={3}>
            <Radio
              name="movie"
              label="Romance"
              value="romantic"
              size={size}
              disabled={disabled}
            />
            <Radio
              name="movie"
              label="Comedy"
              value="comedy"
              size={size}
              disabled={disabled}
            />
          </Box>
          <Box mt={3} ml={5}>
            <Button
              variant="secondary"
              onClick={event => {
                event.preventDefault()
                resetForm()
              }}
            >
              Clean
            </Button>
            <Button type="submit" ml={5}>
              Submit
            </Button>
          </Box>
          {insideState && <FormDebugger />}
        </Form>
      )}
    </Formik>
  )
}

Default.story = {
  name: 'default',
}
