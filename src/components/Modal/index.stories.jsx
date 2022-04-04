import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

import Box from '../Box'
import Inline from '../Inline'
import Button from '../Button'
import SelectField from '../SelectField'
import Stack from '../Stack'
import Text from '../Text'

import Modal from './index'

export default { title: 'Modal', component: Modal }

export const Default = () => {
  const longContent = boolean('Long content')
  const asSidebar = boolean('Sidebar')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Stack space={3}>
        <Text>Use the knobs to control the behavior of the modal.</Text>
        <Inline>
          <Button onClick={() => setIsOpen(true)}>Open modal</Button>
        </Inline>
      </Stack>
      <Modal
        isOpen={isOpen}
        asSidebar={asSidebar}
        onDismiss={() => setIsOpen(false)}
      >
        <Modal.Heading>Hello, World!</Modal.Heading>
        <Modal.Body>
          <Stack space={3}>
            {longContent && (
              <>
                <Text>
                  Veggies es bonus vobis, proinde vos postulo essum magis
                  kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon
                  azuki bean garlic.
                </Text>
                <Text>
                  Gumbo beet greens corn soko endive gumbo gourd. Parsley
                  shallot courgette tatsoi pea sprouts fava bean collard greens
                  dandelion okra wakame tomato. Dandelion cucumber earthnut pea
                  peanut soko zucchini.
                </Text>
                <Text>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea
                  lettuce kohlrabi amaranth water spinach avocado daikon napa
                  cabbage asparagus winter purslane kale. Celery potato scallion
                  desert raisin horseradish spinach carrot soko. Lotus root
                  water spinach fennel kombu maize bamboo shoot green bean swiss
                  chard seakale pumpkin onion chickpea gram corn pea. Brussels
                  sprout coriander water chestnut gourd swiss chard wakame
                  kohlrabi beetroot carrot watercress. Corn amaranth salsify
                  bunya nuts nori azuki bean chickweed potato bell pepper
                  artichoke.
                </Text>
                <Text>
                  Nori grape silver beet broccoli kombu beet greens fava bean
                  potato quandong celery. Bunya nuts black-eyed pea prairie
                  turnip leek lentil turnip greens parsnip. Sea lettuce lettuce
                  water chestnut eggplant winter purslane fennel azuki bean
                  earthnut pea sierra leone bologi leek soko chicory celtuce
                  parsley jï¿½cama salsify.
                </Text>
                <Text>
                  Celery quandong swiss chard chicory earthnut pea potato.
                  Salsify taro catsear garlic gram celery bitterleaf wattle seed
                  collard greens nori. Grape wattle seed kombu beetroot
                  horseradish carrot squash brussels sprout chard.
                </Text>
                <Text>
                  Pea horseradish azuki bean lettuce avocado asparagus okra.
                  Kohlrabi radish okra azuki bean corn fava bean mustard
                  tigernut jï¿½cama green bean celtuce collard greens avocado
                  quandong fennel gumbo black-eyed pea. Grape silver beet
                  watercress potato tigernut corn groundnut. Chickweed okra pea
                  winter purslane coriander yarrow sweet pepper radish garlic
                  brussels sprout groundnut summer purslane earthnut pea tomato
                  spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
                  black-eyed pea green bean zucchini gourd winter purslane
                  silver beet rock melon radish asparagus spinach.
                </Text>
              </>
            )}
            <Text>
              Note: The primary action should always come first, any secondary
              actions after that.
            </Text>
          </Stack>
        </Modal.Body>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>OK</Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

Default.story = {
  name: 'default',
}

export const Bare = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box>
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      </Box>
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        This is a bare modal. If you want to have full control over the content
        of this, then use this.
      </Modal>
    </>
  )
}
Bare.story = {
  name: 'bare Modal',
}

const selectSchema = Yup.object().shape({
  option: Yup.string().required(),
})

export const WithSelect = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box>
        <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      </Box>
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <Modal.Heading>This is an item with a select</Modal.Heading>
        <Modal.Body>
          <Formik
            initialValues={{
              option: '',
            }}
            onSubmit={values => {
              action(`Submitted! ${JSON.stringify(values, undefined, 2)}`)
            }}
            validationSchema={selectSchema}
          >
            {() => (
              <Form>
                <SelectField
                  options={[
                    {
                      label: 'Option 1',
                      value: '1',
                    },
                    {
                      label: 'Option 2',
                      value: '2',
                    },
                    {
                      label: 'Option 3',
                      value: '3',
                    },
                    {
                      label: 'Option 4',
                      value: '4',
                    },
                  ]}
                  placeholder="select a thing"
                  name="option"
                  label="some selection"
                  menuPlacement="top"
                />
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Actions>
          <Button onClick={() => setIsOpen(false)}>OK</Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

WithSelect.story = {
  name: 'with a select input',
}
