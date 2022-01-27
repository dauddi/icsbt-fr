import React from 'react'
import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const GetStarted = () => {
  return (
    <Box w="full" bg='gray.100' p={{base: 2, md: 5}} boxShadow={{base: 'sm', md: 'sm'}} >
      <Stack direction="row" spacing={8} align="center" >
        <Button rightIcon={<ArrowForwardIcon />} color='black' bg='gray.50' rounded={2} variant='solid' p={{base: 2, md: 3}} size={{base: 'sm', md: 'md'}} _hover={{ bg:'green.50'}} >
          Get Started
        </Button>
        <Text fontSize={{base: 'sm', md: 'md'}} fontWeight={600} color='gray.400' >7 Onboarding Tasks.</Text>
      </Stack>
    </Box>
  )
}

export default GetStarted
