import React from 'react';

import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, HStack, Heading } from '@chakra-ui/react'

const InnerStat = ({ amount, helptext, color }) => {
  return (
    <Stat paddingRight={10} paddingY={4} >
      <StatNumber paddingY={2} > {amount} </StatNumber>
      <StatHelpText color={color} > {helptext} </StatHelpText>
    </Stat>
  )
}

const InvoiceStats = () => {
  return (
    <Box maxW='container.xl' >
      <Heading size="sm" >Invoices</Heading>
      <HStack >
        <StatGroup >
          <InnerStat color="red" amount="12,095" helptext="Overdue" />
          <InnerStat color="green" amount="22,000" helptext="Outstanding" />
          <InnerStat color="gray" amount="2,500" helptext="In draft" />
        </StatGroup>
      </HStack>
    </Box>
  );
};

export default InvoiceStats;
