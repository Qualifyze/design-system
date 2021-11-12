/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import Actions from '../Actions'
import Heading from '../Heading'
import Text from '../Text'
import TextField from '../TextField'
import TextArea from '../TextArea'
import FieldLabel from '../FieldLabel'
import FieldMessage from '../FieldMessage'
import Radio from '../Radio'
import Checkbox from '../Checkbox'
import Box from '../Box'
import Card from '../Card'
import Stack from '../Stack'
import TextLink from '../TextLink'
import Flex from '../Flex'
import SelectField from '../SelectField'
import FormDebugger from '../FormDebugger'
import Alert from '../Alert'
import Columns from '../Columns'
import Column from '../Column'
import FileUpload from '../FileUpload'
import Inline from '../Inline'

export default { title: 'Form', component: Form }

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000))
}

export const Default = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        ssn: '',
        screen: 'netflix',
        action: '',
        romance: '',
        comedy: true,
        country: '',
        posters: [],
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Please enter your first name'),
        lastName: Yup.string().required('Please enter your last name'),
        ssn: Yup.string().matches(
          /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/,
          'Please follow the format XXX-XXX-XXX'
        ),
        screen: Yup.string()
          .oneOf(['cinema'], 'You cannot be serious.')
          .required(),
        action: Yup.bool(),
        romance: Yup.bool().oneOf([true], 'Meh...'),
        comedy: Yup.bool().oneOf([false], 'Oh come on!'),
        country: Yup.string().oneOf(['IT']).required('Please select a country'),
        posters: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required(),
            size: Yup.number().max(500000, 'Too big'),
            type: Yup.string().oneOf(['image/png'], 'Wrong format').required(),
          })
        ),
      })}
      onSubmit={values =>
        simulateNetworkRequest().then(() => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(values, null, 2))
        })
      }
    >
      {({ isSubmitting, errors, touched }) => (
        <Box bg="primary.100" p={5}>
          <Card boxShadow={6}>
            <Form>
              <Stack space={3}>
                <Heading level={3}>Your movie preferences</Heading>
                <Text>
                  In order to figure out whether you are decent human being, we
                  need some information about your movie preferences. Please
                  fill out the following form honestly and to the best of your
                  knowledge so we can assess your worth as a human and a friend.
                </Text>
                <Flex>
                  <Box width={1 / 2} pr={3}>
                    <TextField name="firstName" label="First name" />
                  </Box>
                  <Box width={1 / 2} pl={3}>
                    <TextField name="lastName" label="Last name" />
                  </Box>
                </Flex>
                <Box>
                  <TextField
                    name="ssn"
                    label="Your Social Security Number"
                    secondaryLabel="optional"
                    description="Yeah, sure dont worry this is confidential"
                    message="Please follow the format XXX-XXX-XXX"
                    tertiaryLabel={<TextLink href="#">Need help?</TextLink>}
                  />
                </Box>
                <Box>
                  <SelectField
                    name="country"
                    label="Country of residence"
                    message="A country with nice beaches is preferable, of course"
                    placeholder="Country"
                    options={[
                      { label: 'Germany', value: 'DE' },
                      { label: 'Italy', value: 'IT' },
                    ]}
                  />
                </Box>
                <Box>
                  <FileUpload
                    name="posters"
                    label="Upload your favourite movie posters here"
                    secondaryLabel="only if you want to"
                    tertiaryLabel="please"
                    message="Only .png (upload .jpeg if you want to see it burn)"
                    // jpeg is just for testing the validation
                    accept="image/png, image/jpeg"
                    inputComponent={
                      <FileUpload.Dropzone
                        instructions={
                          <Text>
                            <TextLink>Browse</TextLink> or drag and drop to
                            upload
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
                                </FileUpload.FileBox>
                              )
                            })}
                          </Inline>
                        </Box>
                      )
                    }}
                  </FileUpload>
                </Box>
                <Flex>
                  <Box width={1 / 2}>
                    <Stack space={3}>
                      <FieldLabel
                        label="Do you prefer Netflix or cinema?"
                        htmlFor="screen"
                      />
                      <Radio name="screen" label="Netflix" value="netflix" />
                      <Radio name="screen" label="Cinema" value="cinema" />
                      <Radio
                        name="screen"
                        label="none of these"
                        value="none"
                        disabled
                      />
                      <FieldMessage
                        tone="critical"
                        message={
                          errors.screen && touched.screen ? errors.screen : ''
                        }
                      />
                    </Stack>
                  </Box>
                  <Box width={1 / 2}>
                    <Stack space={3}>
                      <FieldLabel
                        label="What kind of movies do you like?"
                        htmlFor="dummy"
                      />
                      <Checkbox disabled name="action" label="Action movies" />
                      <Checkbox name="romance" label="Romantic movies" />
                      <Checkbox name="comedy" label="Comedy movies" />
                    </Stack>
                  </Box>
                </Flex>
                <Actions>
                  <Button type="submit" isLoading={isSubmitting}>
                    Submit
                  </Button>
                </Actions>
                <Alert tone="positive">
                  This is an Alert. Pretty nice, huh?
                </Alert>
                <FormDebugger />
              </Stack>
            </Form>
          </Card>
        </Box>
      )}
    </Formik>
  )
}

Default.story = {
  name: 'default',
}

export const Login = () => {
  const [error, setError] = React.useState(false)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Please enter your email'),
        password: Yup.string().required('Please enter your password'),
      })}
      onSubmit={() =>
        simulateNetworkRequest().then(() => {
          // eslint-disable-next-line no-alert
          setError(true)
        })
      }
    >
      {({ isSubmitting }) => (
        <Box bg="primary.100" p={5}>
          <Card boxShadow={6}>
            <Form>
              <Stack space={3}>
                <Heading level={3}>Login</Heading>
                <Text>
                  {`Don't have an account yet?`}{' '}
                  <TextLink href="#">Sign up now.</TextLink>
                </Text>
                <Box>
                  <TextField name="email" label="Email" />
                </Box>
                <Box>
                  <TextField
                    name="password"
                    label="Password"
                    tertiaryLabel={
                      <TextLink href="#">Forgot password?</TextLink>
                    }
                  />
                </Box>
                {error ? (
                  <Alert tone="critical">
                    Your credentials are not even close to being correct. Try
                    again!
                  </Alert>
                ) : null}
                <Actions>
                  <Button type="submit" isLoading={isSubmitting}>
                    Log in
                  </Button>
                </Actions>
                <Box sx={{ pt: 6 }}>
                  <FormDebugger />
                </Box>
              </Stack>
            </Form>
          </Card>
        </Box>
      )}
    </Formik>
  )
}

Login.story = {
  name: 'login form',
}

export const ContactForm = () => {
  const [status, setStatus] = React.useState('INITIAL')

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string(),
        message: Yup.string().max(500, `That's too long.`).required(),
      })}
      onSubmit={values =>
        simulateNetworkRequest().then(() => {
          if (values.email === 'asd@asd.com') {
            setStatus('SUCCESS')
          } else {
            setStatus('ERROR')
          }
        })
      }
    >
      {({ isSubmitting }) => (
        <Box bg="primary.100" p={5}>
          <Card boxShadow={6}>
            <Form>
              <Stack space={3}>
                <Heading level={3}>Contact form</Heading>

                <Box>
                  <Columns collapseBelow="tablet" space={3}>
                    <Column>
                      <TextField name="name" label="Full name" />
                    </Column>
                    <Column>
                      <TextField name="email" label="Work Email" />
                    </Column>
                  </Columns>
                </Box>
                <Box>
                  <TextField
                    name="phone"
                    label="Phone"
                    secondaryLabel="optional"
                  />
                </Box>
                <Box>
                  <TextArea name="message" label="Message" rows={3} />
                </Box>
                {status === 'SUCCESS' ? (
                  <Alert tone="positive">Your message was sent! Nice.</Alert>
                ) : null}
                {status === 'ERROR' ? (
                  <Alert tone="critical">Nope.</Alert>
                ) : null}
                <Actions>
                  <Button type="submit" isLoading={isSubmitting}>
                    Send message
                  </Button>
                </Actions>
                <FormDebugger />
              </Stack>
            </Form>
          </Card>
        </Box>
      )}
    </Formik>
  )
}

ContactForm.story = {
  name: 'contact form',
}
