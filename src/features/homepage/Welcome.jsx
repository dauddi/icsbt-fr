import React from 'react';

import { Container, Box, Stack, Text } from '@chakra-ui/react'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Welcome = ({user}) => {
  const currentDate = new Date();
  const day = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return (
    <Box bg='black' color='white' padding={4} boxShadow='md' rounded={4} >
      <Stack>
        <Text fontWeight={600} color='green.100' > {day}, {month} {date} {year} </Text>
        <Text fontWeight='bold' fontSize={22} > Welcome Back, {user.Name} </Text>
      </Stack>
    </Box>
  );
};

export default Welcome;
