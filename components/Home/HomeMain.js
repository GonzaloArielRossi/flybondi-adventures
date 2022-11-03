import { Container } from '@chakra-ui/react';

import ExtrasVouchersPayments from './ExtrasVouchersPayments';
import FlyYourWay from './FlyYourWay';
import LowPrices from './LowPrices';
import SearchBox from './SearchBox';
import StepByStep from './StepByStep';

export default function HomeMain({ props }) {
  return (
    <Container
      alignSelf={'center'}
      as={'main'}
      flex={1}
      m={'0 auto'}
      maxW={['90vw', '90vw', '90vw', '1200px']}
      p={0}
      textAlign="center"
    >
      <SearchBox props={props} />
      <ExtrasVouchersPayments />
      <FlyYourWay />
      <LowPrices />
      <StepByStep />
    </Container>
  );
}
