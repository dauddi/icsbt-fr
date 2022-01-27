import React from 'react'
import { Container, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Icon, Menu, MenuItem, MenuButton, MenuList, IconButton } from '@chakra-ui/react'
import { FiMoreHorizontal } from "react-icons/fi"

const tableHeaders = ['Name', 'City', 'Projects', 'Total Billed'];
const data = [{
  'name': "Andy Rose",
  'location': 'Nairobi',
  'number': 12,
  'amount': '125,000',
}]

const SharedTable = ({ handleClick, children }) => {
  return (
    <Table size={{base: 'sm', md: 'md'}} mt={8} bg='white' rounded={4} boxShadow={{base: 'sm', md: 'sm'}} p={2}>
      <Thead bg='white' fontSize='12' >
        <Tr>
          { tableHeaders.map(header => <Th fontWeight='bold' color="gray.400" paddingY={2} paddingX={2} >{header}</Th>) }
        </Tr>
      </Thead>
      <Tbody fontSize='12'>
        { data.map(entity => (
          <Tr onClick={handleClick} _hover={{ cursor: 'pointer', bg:'gray.100' }} >
            <Td fontWeight='bold' padding={3}> {entity.name} </Td>
            <Td padding={1}> {entity.location} </Td>
            <Td padding={1}> {entity.number} </Td>
            <Td padding={1}> {entity.amount} </Td>
            {/* <Td>
              <Menu>
                <MenuButton as={IconButton} icon={<FiMoreHorizontal/>} variant='none' colorScheme='teal'>
                </MenuButton>
                <MenuList>
                  <MenuItem color='teal'>Archive</MenuItem>
                  <MenuItem color='tomato'>Delete</MenuItem>
                </MenuList>
              </Menu> 
            </Td> */}
        </Tr>
        )) }
        {children}
      </Tbody>
    </Table>
  )
}

export default SharedTable
