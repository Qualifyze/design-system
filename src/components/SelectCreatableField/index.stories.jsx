import React from 'react'
import { boolean, text, select } from '@storybook/addon-knobs'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { action } from '@storybook/addon-actions'

import Button from '../Button'
import FormDebugger from '../FormDebugger'
import Box from '../Box'
import Stack from '../Stack'
import Actions from '../Actions'

import SelectCreatableField from './index'

export default {
  title: 'SelectCreatableField',
  component: SelectCreatableField,
}

const options = [
  {
    label: 'Avengers 1',
    value: 'avengers',
  },
  {
    label: 'Groundhog Day',
    value: 'groundHogDay',
  },
  {
    label: 'Up',
    value: 'Up',
  },
  {
    label: 'The Last Dance',
    value: 'theLastDance',
  },
  {
    label: 'El Secreto de sus Ojos',
    value: 'elSecretoDeSusOjos',
  },
]

const selectSchema = Yup.object().shape({
  movie: Yup.string().required(),
})

export const Default = () => {
  const insideState = boolean('Inside State', false)
  const disabled = boolean('Disabled', false)
  const placeholder = text('Placeholder', 'Select or create a movie')
  const availableSizes = ['tiny', 'small', 'standard', 'large']
  const size = select('Size', availableSizes, 'standard')

  return (
    <Formik
      initialValues={{
        movie: '',
      }}
      onSubmit={values => {
        action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
      }}
      validationSchema={selectSchema}
    >
      {({ resetForm }) => (
        <Form>
          <Box sx={{ p: 4 }}>
            <Stack space={3}>
              <Box>
                <SelectCreatableField
                  options={options}
                  name="movie"
                  label="What is your favorite movie?"
                  placeholder={placeholder}
                  disabled={disabled}
                  size={size}
                />
              </Box>
              <Box>
                <Actions>
                  <Button type="submit">Submit</Button>
                  <Button
                    variant="secondary"
                    onClick={event => {
                      event.preventDefault()
                      resetForm()
                    }}
                  >
                    Reset
                  </Button>
                </Actions>
              </Box>
              {insideState && <FormDebugger />}
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  )
}
Default.story = {
  name: 'default',
}
