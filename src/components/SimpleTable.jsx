import React from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

const SimpleTable = ({ header, data, size }) => {
  return (
    <Table variant='simple' size={size}>
      <Thead>
        <Tr>
          { header.map(heading => <Th>{heading}</Th>) }
        </Tr>
      </Thead>
      <Tbody>
        { data.map(entity => (
          <Tr>
            <Td color="gray.500"> {entity.name} </Td>
            <Td color="gray"> {entity.email} </Td>
            <Td color="gray"> {entity.phone} </Td>
          </Tr>
        )) }
      </Tbody>
    </Table>
  )
}

export default SimpleTable
