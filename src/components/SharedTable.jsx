import React from 'react'
import { Container, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Icon, Menu, MenuItem, MenuButton, MenuList, IconButton } from '@chakra-ui/react'
import { FiMoreHorizontal } from "react-icons/fi"

const SharedTable = ({ children }) => {
  return (
    <Table size={{base: 'sm', md: 'md'}} mt={8} bg='white' boxShadow={{base: 'md', md: 'lg'}} p={2}>
      <Thead bg='green.100' fontSize='12' >
        <Tr >
          <Th>Name</Th>
          <Th>City</Th>
          <Th>Projects</Th>
          <Th>Total Billed</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr _hover={{ cursor: 'pointer', bg:'gray.100' }} >
          <Td>Andy Rose</Td>
          <Td>Nairobi</Td>
          <Td>12</Td>
          <Td> Kes.123,000 </Td>
          <Td>      
            <Menu>
              <MenuButton as={IconButton} icon={<FiMoreHorizontal/>} variant='none' colorScheme='teal'>
              </MenuButton>
              <MenuList>
                <MenuItem color='teal'>Archive</MenuItem>
                <MenuItem color='tomato'>Delete</MenuItem>
              </MenuList>
            </Menu> 
          </Td>
        </Tr>
        {children}
      </Tbody>
    </Table>
  )
}

export default SharedTable
