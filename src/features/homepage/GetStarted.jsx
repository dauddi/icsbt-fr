import React from 'react'
import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const GetStarted = () => {
  return (
    <Box w="full" bg='white' p={{base: 2, md: 5}} boxShadow={{base: 'md', md: 'lg'}} >
      <Stack direction="row" spacing={8} align="center" >
        <Button rightIcon={<ArrowForwardIcon />} color='white' bg='green.500' variant='solid' p={{base: 2, md: 5}} size={{base: 'sm', md: 'lg'}} _hover={{ bg:'green.600'}} >
          Get Started
        </Button>
        <Text fontSize={{base: 'sm', md: 'lg'}} fontWeight={600} color='black.300' >7 Onboarding Tasks.</Text>
      </Stack>
    </Box>
  )
}

export default GetStarted
