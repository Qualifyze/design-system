/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextLink from '../TextLink'
import FormDebugger from '../FormDebugger'

import TextArea from './index'

export default { title: 'TextArea', component: TextArea }

export const Default = () => {
  const label = text('Label', 'Tweet out to the world')
  const message = text('Message', 'E.g., FAKE NEWS!!!')
  const placeholder = text('Placeholder', 'speak yo mind')
  const secondaryLabel = text('Secondary Label', 'not optional')
  const tertiaryLabel = text('Tertiary Label', 'Need help?')

  return (
    <Formik
      initialValues={{
        tweet: '',
      }}
      onSubmit={values => {
        action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
      }}
      validationSchema={Yup.object().shape({
        tweet: Yup.string()
          .required()
          .max(144, 'That is way too long for a tweet, boomer...'),
      })}
    >
      {() => (
        <Form>
          <TextArea
            name="tweet"
            label={label}
            message={message}
            placeholder={placeholder}
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
