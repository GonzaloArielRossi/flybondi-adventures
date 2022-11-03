import { Button, Heading, Flex, Box, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function TripOptions({ origin }) {
  console.log(origin);
  const router = useRouter();
  const { airportId, date, budget, passengers } = router.query;
  const month = date.split('-')[1];

  console.log(month);

  return (
    <Flex
      alignItems={'center'}
      direction={['row', 'row', 'row', 'row']}
      gap={['2rem', '2rem', '2rem', '2rem']}
      mx={'auto'}
      my={'2rem'}
    >
      <Box>{origin}</Box>
      <Center> {'>'} </Center>
      <Box>
        {new Date(month).toLocaleString('en-US', {
          month: 'long'
        })}
      </Box>
      <Center> {'>'} </Center>
      <Box>{passengers}</Box>
    </Flex>
  );
}
