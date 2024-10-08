import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Box, Heading } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'React Space',
    description:
      'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️',
    getImageSrc: () => require('../images/photo1.jpg')
  },
  {
    id: 2,
    title: 'React Infinite Scroll',
    description:
      'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️',
    getImageSrc: () => require('../images/photo2.jpg')
  },
  {
    id: 3,
    title: 'Photo Gallery',
    description:
      'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
    getImageSrc: () => require('../images/photo3.jpg')
  },
  {
    id: 4,
    title: 'Event planner',
    description:
      'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
    getImageSrc: () => require('../images/photo4.jpg')
  }
]

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor='#14532d'
      isDarkBackground
      pb={5}
      alignItems='center'
    >
      <Heading as='h1' id='projects-section' p={6}>
        Featured Projects
      </Heading>
      <Box display='flex' flexWrap='wrap' gap={6} justifyContent='center'>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  )
}

export default ProjectsSection
