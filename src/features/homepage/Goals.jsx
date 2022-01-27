import React from 'react'
import { Box, Center, Button, Icon, Heading } from '@chakra-ui/react'
import { FiTrendingUp } from 'react-icons/fi';


const Goals = () => {
  return (
    <Box bg="white" p={5} rounded={4} boxShadow='sm' >
      <Heading size='md' color="gray.600" > Goals</Heading>
      <Center p={15}>
        <Button rightIcon={<Icon as={FiTrendingUp} />} colorScheme='teal' variant='solid'>
          Set Goals For Your Business
        </Button>
      </Center>
    </Box>
  )
}

export default Goals
