import React from 'react'
import { Box, SimpleGrid, Stat, HStack, Select, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, } from '@chakra-ui/react'

const FinanceStats = () => {
  return (
    <Box w="full" bg="white" p={2} rounded="4" boxShadow='sm' >
      <StatGroup >
        <Stat>
          <HStack w="full" justifyContent="space-between" pr={5} >
            <StatLabel fontSize={{base: 'md', md: 'lg'}}>Gross Revenue</StatLabel>
            <Select size="small" color="gray.500" w="32" objectFit="contain" variant='unstyled' bg="gray.50" >
              <option value='this_year'>This Year</option>
              <option value='last_year'>Last Year</option>
              <option value='this_month'>This Month</option>
              <option value='last_month'>Last Month</option>
              <option value='three_months'>Last 3 Months</option>
              <option value='six_months'>Last 6 Months</option>
            </Select>
          </HStack>

          <StatNumber >
            Kes.345,670
          </StatNumber>
          <StatHelpText>
            <StatArrow type='increase' />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize={{base: 'md', md: 'lg'}} >Invoices Due</StatLabel>
          <StatNumber>
            Kes.124,000
          </StatNumber>
          <StatHelpText>
            <StatArrow type='decrease' />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  )
}

export default FinanceStats
