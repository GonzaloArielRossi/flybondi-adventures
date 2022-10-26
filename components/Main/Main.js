import { Heading, Text, Container } from '@chakra-ui/react';

import ExtrasVouchersPayments from './ExtrasVouchersPayments';
import FlyYourWay from './FlyYourWay';
import LowPrices from './LowPrices';
import SearchBox from './SearchBox';
import StepByStep from './StepByStep';

export default function Main({ props }) {
  return (
    <Container
      alignSelf={'center'}
      as={'main'}
      flex={1}
      maxW={['90vw', '90vw', '90vw', '80vw']}
      mx={'auto'}
      p={0}
      textAlign="center"
    >
      <Heading mt={'8rem'}>FLYBONDI ADVENTURES</Heading>
      <Text fontSize={'xl'} mt="6" mx="auto">
        Ever wanted to throw a dart at the map and fly wherever it lands? 🎯
        <br />
        With{' '}
        <Text as={'span'} color="brand.100" fontWeight={'600'}>
          Flybondi Adventures
        </Text>
        , you get to know Argentina by traveling to a random location based on
        your budget.
      </Text>
      <SearchBox props={props} />
      <ExtrasVouchersPayments />
      <FlyYourWay />
      <LowPrices />
      <StepByStep />
    </Container>
  );
}
