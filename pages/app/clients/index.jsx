import React from 'react'
import {AppLayout, SharedTable} from "../../../src/components";
import { Container, Box, Button, HStack, Divider, Menu, MenuItem, MenuButton, MenuList, MenuItemOption, MenuOptionGroup, MenuDivider } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

const Clients = () => {
    return (
        <Container maxW='container.xl' >
          <Box w='full' >
            <HStack w='full' justifyContent={'space-between'} alignItems='center' >
              <Button variant='solid' bg='green.500' color='white' _hover={{ bg: 'green.600' }} > New Client </Button>
              <HStack w='fit-content' >
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    All Statuses
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Active</MenuItem>
                    <MenuItem>Archived</MenuItem>
                  </MenuList>
                </Menu>

                <Menu closeOnSelect={false}>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Sort
                  </MenuButton>
                  <MenuList minWidth='240px'>
                    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                      <MenuItemOption value='asc'>Ascending</MenuItemOption>
                      <MenuItemOption value='desc'>Descending</MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup title='Sort By' type='checkbox'>
                      <MenuItemOption value='name'>Name</MenuItemOption>
                      <MenuItemOption value='city'>City</MenuItemOption>
                      <MenuItemOption value='projects'>Projects</MenuItemOption>
                      <MenuItemOption value='billed'>Total Billed</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </HStack>
            </HStack>

            <SharedTable />
          </Box>
        </Container>
    )
}

Clients.getLayout = function getLayout(page) {
    return (
      <AppLayout>
        {page}
      </AppLayout>
    )
  }

export default Clients
