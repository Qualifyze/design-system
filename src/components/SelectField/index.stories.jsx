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

import {
  SelectField,
  MultiSelectField,
  SelectCreatableField,
  MultiSelectCreatableField,
} from './index'

export default { title: 'SelectField', component: SelectField }

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
  const placeholder = text('Placeholder', 'Select a movie')
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
                <SelectField
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

export const SelectCreatable = () => {
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
SelectCreatable.story = {
  name: 'Select creatable',
}

const multiSelectSchema = Yup.object().shape({
  products: Yup.array(Yup.string()).required(),
})

export const MultiSelect = () => {
  const tagOptions = [
    {
      label: 'Doxylamine succinate',
      value: 'doxy',
    },
    {
      label: 'Ascorbic acid',
      value: 'acid',
    },
    {
      label: 'Something dangerous',
      value: 'etwa',
    },
    {
      label: 'Chemicolosis',
      value: 'chemi',
    },
  ]
  const insideState = boolean('Inside State', false)
  const disabled = boolean('Disabled', false)
  const placeholder = text('Placeholder', 'Select a product ingredient')
  const availableSizes = ['tiny', 'small', 'standard', 'large']
  const size = select('Size', availableSizes, 'standard')

  return (
    <Formik
      initialValues={{
        products: '',
      }}
      onSubmit={values => {
        action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
      }}
      validationSchema={multiSelectSchema}
    >
      {({ resetForm }) => (
        <Form>
          <Box sx={{ p: 4 }}>
            <Stack space={3}>
              <Box>
                <MultiSelectField
                  options={tagOptions}
                  name="products"
                  label="Try to find a product"
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
MultiSelect.story = {
  name: 'Multi select',
}

export const MultiSelectCreatable = () => {
  const tagOptions = [
    {
      label: 'Doxylamine succinate',
      value: 'doxy',
    },
    {
      label: 'Ascorbic acid',
      value: 'acid',
    },
    {
      label: 'Something dangerous',
      value: 'etwa',
    },
    {
      label: 'Chemicolosis',
      value: 'chemi',
    },
  ]
  const insideState = boolean('Inside State', false)
  const disabled = boolean('Disabled', false)
  const placeholder = text(
    'Placeholder',
    'Select or create a product ingredient'
  )
  const availableSizes = ['tiny', 'small', 'standard', 'large']
  const size = select('Size', availableSizes, 'standard')

  return (
    <Formik
      initialValues={{
        products: '',
      }}
      onSubmit={values => {
        action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
      }}
      validationSchema={multiSelectSchema}
    >
      {({ resetForm }) => (
        <Form>
          <Box sx={{ p: 4 }}>
            <Stack space={3}>
              <Box>
                <MultiSelectCreatableField
                  options={tagOptions}
                  name="products"
                  label="Try to find a product"
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
MultiSelectCreatable.story = {
  name: 'Multi select creatable',
}
