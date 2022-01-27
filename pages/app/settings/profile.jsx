import React from 'react'
import { AppLayout } from "../../../src/components";
import { Container, Box, Heading, SimpleGrid, Input, HStack, VStack, Code, Stack, Text, Avatar, Icon, Divider, Select, RadioGroup, Radio, Button } from "@chakra-ui/react"
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const Profile = () => {
  const professions = [ 'Designer', 'Developer', 'Manager', 'Consultant', 'Marketer', 'Writer', 'Tutor', 'Artist', 'Photographer', 'Videograpgher', 'Accountant', 'Lawyer', 'Writer', 'Other' ]

  return (
      <Container maxW='container.xl'>
        <Box>
          <Heading color='gray.600' size='xl'> Profile </Heading>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10} >

            <Stack w='fit-content' direction={{ base: "column", md: 'row' }} colSpan={2} mt={8} spacing={10} alignItems='center' justifyContent='left' >
              <Stack direction="column" spacing={5} >
                <Box bg='white' spacing={0} rounded={8} p='1' boxShadow='inner' >
                  <Text pl={2} color='gray.500' fontSize='md' border={0} outline={"hidden"} >Full Name</Text>
                  <Input type='text' border={0} focusBorderColor='none' />
                </Box>
                <Box bg='white' spacing={0} rounded={8} p='1' boxShadow='inner' >
                  <Text pl={2} color='gray.500' fontSize='md' border={0} outline={"hidden"} >Email</Text>
                  <Input type='email' border={0} focusBorderColor='none' />
                </Box>
              </Stack>

              <Box bg='white' spacing={0} rounded={8} p='1' boxShadow='lg' >
                <Text pl={2} color='gray.500' fontSize='md' border={0} outline={"hidden"} >Profile Photo</Text>
                <HStack w='100%' p='5' pb='0' justifyContent={"space-between"} >
                  <Avatar 
                    size='xl'
                    src='https://avatars.githubusercontent.com/u/64232602?v=4'
                  />
                  <VStack spacing={8} >
                    <Icon _hover={{color: "blue.400"}} cursor='pointer' as={FiEdit} />
                    <Icon cursor='pointer' _hover={{color: "red"}} as={FiTrash2} />
                  </VStack>
                </HStack>
                <Input type='email' border={0} focusBorderColor='none' />
              </Box>
            </Stack>

            <VStack w={{base: 'full', md: '50%'}} alignItems='left' spacing={10} >
                <Box w='fit-content' bg='white' spacing={0} rounded={8} p='1' boxShadow='inner' p={3} >
                  <Select type='email' border={0} focusBorderColor='none' placeholder='Profession' >
                    { professions.map(profession => <option value={profession.toLowerCase()}> {profession} </option>) }
                  </Select>
                </Box>

                <Box w='fit-content' bg='white' spacing={0} rounded={8} p='1' boxShadow='inner' p={3} >
                  <Text pl={2} color='gray.500' fontSize='md' border={0} outline={"hidden"} >Organization</Text>
                  
                  <RadioGroup>
                    <VStack alignItems={'left'} p={3} >
                      <Radio value='solo' mb={2} >I work Solo</Radio>
                      <Radio value='team' >I work in a Team</Radio>
                    </VStack> 
                  </RadioGroup>
                </Box>

                <Button w='50%' variant='solid' bg='green.500' color="white" _hover={{bg: 'green.600'}} >
                  Save Changes
                </Button>
            </VStack>

            <Divider />

            <VStack alignItems={'left'} spacing={10} >
              <Heading size='lg' >Password</Heading>
              <Button w='fit-content' variant='outline' colorScheme="green.500" _hover={{bg: 'green.600', color: 'white'}} > Change Password</Button>              
            </VStack>

            <Divider />

            <VStack alignItems={'left'} spacing={10} >
              <Heading size='lg' color='tomato' >Delete Account</Heading>
              <Text fontWeight="bold" >Warning: Your account and all your data will be pamanently deleted.</Text>
              <VStack alignItems={'left'} spacing={5}>
                <Text>Enter the following phrase to proceed</Text>
                <Code w='fit-content' colorScheme='yellow' children='DELETE User Name' />
                <Input bg='black' color='white' w='fit-content' type='text' />
              </VStack>
              <Button w='fit-content' variant='solid' colorScheme="red" > Delete Account </Button>              
            </VStack>

          </SimpleGrid>
        </Box>
      </Container>
  )
}

Profile.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Profile
