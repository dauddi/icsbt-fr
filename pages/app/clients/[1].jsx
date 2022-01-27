import React from 'react'
import {AppLayout, TabsComponent, SimpleTable} from "../../../src/components";
import { ClientInfo, Invoices, Projects, Transactions, Notes } from '../../../src/features/clients'

import { Box, Container, HStack, Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, TabPanel, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const tabs = ['Client Information', 'Projects', 'Invoices', 'Transactions', 'Notes']
const panels = [ <ClientInfo />, <Projects />, <Invoices />, <Transactions />, <Notes />]

const ClientPage = () => {
  return (
    <Container maxW='container.xl'>
      <Box>
        <HStack mb={10} >
          <Button color="white" _hover={{bg: "green.600"}} bg="green.500">Invoice Client</Button>
          <Menu>
            <MenuButton as={Button} bg="gray.100" rightIcon={<ChevronDownIcon />}>
              More
            </MenuButton>
            <MenuList>
              <MenuItem>Edit client</MenuItem>
              <MenuItem>Archive client</MenuItem>
              <MenuItem>Delete client</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <TabsComponent tabs={tabs}>
          { panels.map(panel => <TabPanel> {panel} </TabPanel>) }
        </TabsComponent>

      </Box>
    </Container>
  )
}

ClientPage.getLayout = function getLayout(page) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}

export default ClientPage;
