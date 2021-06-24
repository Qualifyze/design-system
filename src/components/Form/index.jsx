import React, { useEffect, useState } from 'react'
import { Form } from 'formik'

import LoadingSpinner from '../LoadingSpinner'
import Flex from '../Flex'

const NonSSRForm = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])
  return isLoading ? (
    <Flex>
      <LoadingSpinner />
    </Flex>
  ) : (
    <Form {...props} />
  )
}

export default NonSSRForm
