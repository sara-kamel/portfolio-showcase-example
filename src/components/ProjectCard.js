// import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {
  Card,
  Stack,
  Text,
  Image,
  Heading,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Center
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <Card className='card'>
      <CardBody>
        <Image src={imageSrc} alt='project image' borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <a href='#'>
          See More <FontAwesomeIcon icon={faArrowRight} size='1x' />
        </a>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
