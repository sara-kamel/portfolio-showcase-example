import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack
} from '@chakra-ui/react'
import * as Yup from 'yup'
import FullScreenSection from './FullScreenSection'
import useSubmit from '../hooks/useSubmit'
import { useAlertContext } from '../context/alertContext'

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()

  useEffect(() => {
    if (!response) {
      return
    }
    if (response.type === 'success') {
      onOpen(response.type, response.message)
      formik.resetForm()
    } else {
      onOpen(response.type, response.message)
    }
  }, [response])

  const formik = useFormik({
    initialValues: { firstName: '', email: '', type: '', comment: '' },
    onSubmit: async (values, { setSubmitting }) => {
      await submit('', values)
      setSubmitting(false)
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      type: Yup.string().required('Required'),
      comment: Yup.string().min(2, 'Too Short!').required('Required')
    })
  })

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor='#512DA8'
      py={16}
      spacing={8}
      width='80%'
    >
      <VStack spacing={10} alignItems='center' width='100%' margin='auto'>
        <Heading as='h1' id='contactme-section'>
          Contact me
        </Heading>
        <form onSubmit={formik.handleSubmit} className='form'>
          <Box display='flex' flexWrap='wrap' gap={4}>
            <FormControl
              isInvalid={formik.touched.firstName && !!formik.errors.firstName}
            >
              <FormLabel htmlFor='firstName'>Name</FormLabel>
              <Input
                id='firstName'
                name='firstName'
                width='100%'
                {...formik.getFieldProps('firstName')}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.email && !!formik.errors.email}
            >
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <Input
                width='100%'
                id='email'
                name='email'
                type='email'
                {...formik.getFieldProps('email')}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.type && !!formik.errors.type}
            >
              <FormLabel htmlFor='type'>Type of enquiry</FormLabel>

              <Select id='type' name='type' {...formik.getFieldProps('type')}>
                <option value='hireMe'>Freelance project proposal</option>
                <option value='openSource'>
                  Open source consultancy session
                </option>
                <option value='other'>Other</option>
              </Select>
              <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.comment && !!formik.errors.comment}
            >
              <FormLabel htmlFor='comment'>Your message</FormLabel>
              <Textarea
                id='comment'
                name='comment'
                height={250}
                {...formik.getFieldProps('comment')}
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button
              type='submit'
              colorScheme='purple'
              width='full'
              isLoading={isLoading}
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
          </Box>
        </form>
      </VStack>
    </FullScreenSection>
  )
}

export default ContactMeSection
