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

import MultiSelectAsyncCreatableField from './index'

export default {
  title: 'MultiSelectAsyncCreatableField',
  component: MultiSelectAsyncCreatableField,
}

const multiSelectSchema = Yup.object().shape({
  products: Yup.array(
    Yup.string().matches(/^((?!all-the-acid).)*$/, 'Ooops, think again!')
  ).required(),
})

const options = [
  {
    label: 'Doxylamine succinate',
    hint: 'no idea',
    value: 'doxy',
  },
  {
    label: 'Ascorbic acid',
    hint: 'just a hint',
    value: 'acid',
  },
  {
    label: 'Something dangerous',
    hint: 'and strong',
    value: 'etwa',
  },
  {
    label: 'Reallylonglabelwithoutanyspaces',
    value: 'really',
  },
  {
    label: 'Chemicolosis',
    value: 'chemi',
  },
  {
    label: "Don't pick me",
    value: 'all-the-acid',
  },
]

const filterOptions = inputValue => {
  return options.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  )
}

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterOptions(inputValue))
    }, 1000)
  })

export const Default = () => {
  const insideState = boolean('Inside State', true)
  const disabled = boolean('Disabled', false)
  const placeholder = text('Placeholder', 'Select a product ingredient')
  const availableSizes = ['tiny', 'small', 'standard', 'large']
  const size = select('Size', availableSizes, 'standard')
  const createNewLabelText = text('Create new label', undefined)
  const loadingMessage = text('Loading message', undefined)
  const noOptionsMessage = text('No Options message', undefined)
  const message = text('Message', 'E.g., Ascorbic acid')

  return (
    <Formik
      initialValues={{
        products: [],
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
                <MultiSelectAsyncCreatableField
                  loadOptions={promiseOptions}
                  name="products"
                  label="Try to find a product"
                  placeholder={placeholder}
                  disabled={disabled}
                  size={size}
                  createNewLabelText={createNewLabelText}
                  createOption={value => ({
                    value: `new:${value}`,
                    label: value,
                  })}
                  formatOptionLabel={({ label, hint }) =>
                    hint ? `${label} (${hint})` : label
                  }
                  loadingMessage={loadingMessage}
                  noOptionsMessage={noOptionsMessage}
                  message={message}
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
  name: 'Multi select creatable',
}
