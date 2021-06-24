/**
 * A simple component for debugging purposes. If you're not sure about the state
 * of your Formik form, use this component to display everything that's inside
 * the "Formik state"
 */
import React from 'react'
import { useFormikContext } from 'formik'

import Box from '../Box'
import Text from '../Text'

const Debug = () => {
  const formState = useFormikContext()

  return (
    <Box m={3} p={4} bg="#011627" color="white" sx={{ borderRadius: 3 }}>
      <Text size="large" color="inherit">
        Formik State
      </Text>
      <Box sx={{ fontSize: '1rem', lineHeight: '1.5', overflowX: 'auto' }}>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </Box>
    </Box>
  )
}

export default Debug
