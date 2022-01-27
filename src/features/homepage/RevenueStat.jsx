import React from 'react';

import { Box, CircularProgress, Heading, HStack, Text, Stat, StatHelpText } from '@chakra-ui/react'

const RevenueStat = () => {
  return (
    <Stat>
      <Heading size='sm' >Outstanding Revenue</Heading>
      <HStack>
        <CircularProgress value={40} size='40px' thickness='18px' padding={4} />
        <Text fontWeight='bold' >$ 10.5k</Text>
      </HStack>
      <StatHelpText size='9px' color="gray" >$ 12,095 Overdue</StatHelpText>
    </Stat>
  );
};

export default RevenueStat;
