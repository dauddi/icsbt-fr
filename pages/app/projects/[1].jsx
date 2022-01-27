import React from 'react'
import {AppLayout, TabsComponent} from "../../../src/components";
import { ClientInfo, Invoices, Projects, Transactions, Notes } from '../../../src/features/clients'

import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Container, HStack, Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, TabPanel, } from '@chakra-ui/react'

const tabs = ['Project Information', 'Client', 'Invoices', 'Transactions', 'Files', 'Notes']

const ProjectPage = () => {
  return (
    <Container maxW='container.xl'>
      <Box>
        <HStack mb={10} >
          <Button bg="green.500" color="white" _hover={{bg: 'green.600'}}>Invoice Project</Button>
          <Menu>
            <MenuButton as={Button} bg="gray.100" rightIcon={<ChevronDownIcon />}>
              More
            </MenuButton>
            <MenuList>
              <MenuItem>Edit project</MenuItem>
              <MenuItem>Duplicate project</MenuItem>
              <MenuItem>Archive project</MenuItem>
              <MenuItem>Delete project</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <TabsComponent tabs={tabs}>
          <TabPanel> <ClientInfo/> </TabPanel>
          <TabPanel> <Projects/> </TabPanel>
          <TabPanel> <Invoices/> </TabPanel>
          <TabPanel> <Transactions /> </TabPanel>
          <TabPanel> <Notes /> </TabPanel>
        </TabsComponent>
      </Box>
    </Container>
  )
}

ProjectPage.getLayout = function getLayout(page) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}

export default ProjectPage
