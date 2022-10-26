import { Heading, Text, Stack, Grid } from '@chakra-ui/react';

import steps from '../../data/setps.json';

import Step from './Step';

export default function StepByStep() {
  return (
    <Stack
      alignItems={'center'}
      as={'section'}
      direction={'column'}
      gap={4}
      mb={'8rem'}
      mt={'8rem'}
    >
      <Heading size={'md'}>The freedom of flying, step by step</Heading>
      <Text>
        We tell you all you need to know in order to fly with us at the lowest
        cost!
      </Text>
      <Grid
        as={'section'}
        gap={4}
        mt={24}
        mx={0}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)'
        ]}
      >
        {steps.map((prop, idx) => (
          <Step key={idx} step={prop} />
        ))}
      </Grid>
    </Stack>
  );
}
