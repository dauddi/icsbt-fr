import React from 'react'
import { AppLayout, SharedTable } from "../../../src/components";
import { Container, Box, Center, Icon, Text, VStack, Button } from '@chakra-ui/react';
import { FiMeh } from 'react-icons/fi'
import Router from 'next/router';

const Projects = () => {
  const handleClick = () => {
    Router.push('/app/projects/1');
  }
  const projects = [1];
    return (
        <Container maxW='container.xl' >
          <Box >
            <Button variant='solid' bg='green.500' color='white'  _hover={{bg: "green.600"}} >New Project</Button>
            <SharedTable handleClick={handleClick} >
              { !projects.length && <Center>
                <VStack justifyContent='center' alignItems='center' >
                  <Icon fontSize='xl' as={FiMeh} color='tomato' />
                  <Text>No Projects Found</Text>
                </VStack>
              </Center>}
            </SharedTable >
          </Box>
        </Container>
    )
}

Projects.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Projects
