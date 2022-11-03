import { Button, Heading, Grid } from '@chakra-ui/react';

export default function TripSummary({ props }) {
  return (
    <>
      <Grid
        alignItems={'center'}
        direction={['column', 'column', 'row', 'column']}
        gap={['2rem', '2rem', '2rem', '.6rem']}
        mx={'auto'}
        my={'2rem'}
        templateColumns={[
          'repeat(1, auto)',
          'repeat(2, auto)',
          'repeat(4, auto)',
          'repeat(1, auto)'
        ]}
      >
        <Heading
          fontSize={'md'}
        >{`🎯 ${props.awayCandidate.destination.city}`}</Heading>
        <Heading fontSize={'md'}>{`📆 ${props.tripDurationDays} days`}</Heading>
        <Heading fontSize={'md'}>{`👨‍🚀${props.passengers}${
          props.passengers > 1 ? ' passengers' : ' passenger'
        } `}</Heading>

        <Heading fontSize={'xl'} py={'1rem'}>
          💵
          {new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
          }).format(props.total)}
        </Heading>

        <Button
          _hover={{
            backgroundColor: 'brand.500',
            border: '1px solid',
            borderColor: 'brand.100'
          }}
          bg={'brand.100'}
          gridColumn={['1/-1', '1/-1', '1/-1', '']}
          maxW={'fit-content'}
          mx={'auto'}
          px={'2rem'}
          rounded={100}
        >
          Choose!🎯
        </Button>
      </Grid>
    </>
  );
}
