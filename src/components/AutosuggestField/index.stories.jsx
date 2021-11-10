import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { text, number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Formik, Form, useFormikContext } from 'formik'
import * as Yup from 'yup'

import TextLink from '../TextLink'
import FormDebugger from '../FormDebugger'
import Box from '../Box'

import AutosuggestField from './index'

export default {
  title: 'AutosuggestField',
  component: AutosuggestField,
}

export const Default = () => {
  const label = text('Label', 'Pick your favourite sci-fi movie')
  const message = text('Message', 'Type Star Trek to see the error message')
  const secondaryLabel = text('Secondary Label', 'no Star Trek')
  const tertiaryLabel = text('Tertiary Label', 'Need help?')
  const maxNumberOfSuggestionsToDisplay = number('How much to display?', 5)
  const initial = boolean('Set initial value', false)
  const movies = [
    {
      text: 'The Phantom Menace',
      value: 1,
    },
    {
      text: 'Attack of the Clones',
      value: 2,
    },
    {
      text: 'Revenge of the Sith',
      value: 3,
    },
    {
      text: 'A New Hope',
      value: 4,
    },
    {
      text: 'The Empire Strikes Back',
      value: 5,
    },
    {
      text: 'Return of the Jedi',
      value: 6,
    },
    {
      text: 'The Force Awakens',
      value: 7,
    },
    {
      text: 'The Last Jedi',
      value: 8,
    },
    {
      text: 'The Last Jedi II',
      value: 10,
    },
    {
      text: 'The Rise of Skywalker',
      value: 9,
    },
  ]

  return (
    <Formik
      key={initial}
      initialValues={{
        movie: initial ? movies[0] : { text: '' },
      }}
      onSubmit={values => {
        action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
      }}
      validationSchema={Yup.object().shape({
        movie: Yup.object().shape({
          value: Yup.number(),
          text: Yup.string()
            .matches(/^(?!.*Trek).*/i, {
              message: 'No Star Trek movies please',
              excludeEmptyString: true,
            })
            .min(1)
            .required(),
        }),
      })}
    >
      <Form>
        <AutosuggestField
          name="movie"
          label={label}
          message={message}
          secondaryLabel={secondaryLabel}
          tertiaryLabel={
            <TextLink href="https://en.wikipedia.org/wiki/List_of_Star_Wars_films#Skywalker_saga">
              {tertiaryLabel}
            </TextLink>
          }
          suggestions={movies}
          maxNumberOfSuggestionsToDisplay={maxNumberOfSuggestionsToDisplay}
        />
        <MovieSelector movies={movies} />
        <FormDebugger />
      </Form>
    </Formik>
  )
}

function MovieSelector({ movies }) {
  const { setFieldValue } = useFormikContext()
  const onSelect = useCallback(
    e => {
      if (e.currentTarget.value) {
        const movie = movies[parseInt(e.currentTarget.value, 10)]
        setFieldValue('movie', movie)
        e.currentTarget.value = ''
      }
    },
    [movies]
  )

  return (
    <Box sx={{ my: 4 }}>
      <p>
        Manually select a movie to demonstrate how the autocomplete input reacts
        to external state changes:
      </p>
      <select onChange={onSelect} defaultValue="">
        <option value="" disabled>
          [ select a movie ]
        </option>
        {movies.map((movie, index) => (
          <option key={movie.value} value={index}>
            {movie.text}
          </option>
        ))}
      </select>
    </Box>
  )
}
MovieSelector.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

Default.story = {
  name: 'default',
}
