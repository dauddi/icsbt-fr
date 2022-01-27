import React from 'react'
import { SimpleTable } from '../../../components'
import { Container, Box, VStack, Heading, Stack, Grid, GridItem, Input, Text, FormControl, FormLabel, Button } from '@chakra-ui/react'

const contactTableHeaders = ['Contact Name', 'E-mail', 'Phone']
const contactTableData = [{
  name: 'Test User',
  email: 'test@test.com',
  phone: '+254712567382',
}]

const ClientInfo = () => {
  return (
    <Container maxW='container.xl' >
      <Box>
        <Stack>
          <Grid
            maxW='container.sm'
            templateRows='repeat(6, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
          >
            <GridItem colSpan={2} >
              <FormControl>
                <FormLabel>Company Name:</FormLabel>
                <Input />
              </FormControl>
            </GridItem>
            
            <GridItem colSpan={2} >
              <FormControl>
                <FormLabel>Street Address</FormLabel>
                <Input />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1} >
              <FormControl>
                <FormLabel>Apt / Unit</FormLabel>
                <Input />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1} >
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1} >
              <FormControl>
                <FormLabel>Postal Code</FormLabel>
                <Input />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2} >
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1} >
              <FormControl>
                <FormLabel>State</FormLabel>
                <Input />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1} >
              <FormControl>
                <FormLabel>Tax ID Label</FormLabel>
                <Input />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2} >
              <FormControl>
                <FormLabel>Tax ID Number</FormLabel>
                <Input />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2} >
              <Button bg='green.500' color='white' _hover={{ bg: 'green.600'}} >Save Changes</Button>
            </GridItem>
          </Grid>
        </Stack>

        <SimpleTable header={contactTableHeaders} data={contactTableData} size="md" />

      </Box>
    </Container>
  )
}

export default ClientInfo;
