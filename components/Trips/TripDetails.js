import {
  Stack,
  Image,
  Text,
  Heading,
  Grid,
  Flex,
  useColorMode
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function TripDetails({ props }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const trip = props;
  const router = useRouter();

  return (
    <Stack
      align={['center', 'center', 'center', 'flex-start']}
      px={12}
      py={6}
      rounded={'xl'}
      textAlign={'left'}
    >
      {/* AWAY DETAILS */}
      <Stack
        align={'center'}
        direction={['column', 'row', 'row', 'row']}
        gap={'1rem'}
      >
        <Image
          alt="plane"
          boxSize={'40px'}
          src={
            isDark
              ? './trips/plane-gray-light.svg'
              : './trips/plane-gray-dark.svg'
          }
        />
        <Stack textAlign={'left'}>
          <Text textAlign={['center', 'center', 'center', 'left']}>
            {router.query.airportId === trip.origin._id
              ? 'Outward  Trip'
              : 'Return Trip'}
          </Text>
          <Flex
            align={'center'}
            columnGap={'.5rem'}
            direction={['column', 'row', 'row', 'row']}
            textAlign={'left'}
          >
            <Heading fontSize={'md'}>{trip.origin.city}</Heading>
            <Text>{`(${trip.origin.iata})`}</Text>
            <Image
              alt="arrow"
              boxSize={'15px'}
              color={'whatsapp.300'}
              src={
                isDark
                  ? './trips/right-arrow-light.svg'
                  : './trips/right-arrow.svg'
              }
            />
            <Heading fontSize={'md'}>{trip.destination.city}</Heading>
            <Text>{`(${trip.destination.iata})`}</Text>
          </Flex>
        </Stack>
      </Stack>
      {/* DATE */}
      <Flex direction={'column'} gap={'.5rem'} py={'2rem'}>
        <Heading
          fontSize={'lg'}
          textAlign={['center', 'center', 'center', 'left']}
        >
          {new Date(trip.departureDate).toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Heading>
        <Heading
          fontSize={'md'}
          fontWeight={'200'}
          textAlign={['center', 'center', 'center', 'left']}
        >
          Price:{' '}
          {new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
          }).format(trip.price)}
        </Heading>
      </Flex>
      {/* DEPARTURE */}
      <Grid
        alignItems={'center'}
        gap={4}
        overflow={' hidden'}
        templateColumns={[
          'repeat(1, auto)',
          'repeat(1, auto)',
          'repeat(4, auto)',
          'repeat(4, auto)'
        ]}
      >
        {/* DEPARTURE TIME AND CITY */}
        <Flex
          direction={'column'}
          textAlign={['center', 'center', 'center', 'left']}
        >
          <Heading
            fontSize={'2xl'}
            textAlign={['center', 'center', 'center', 'left']}
          >
            {new Date(trip.departureDate).toLocaleString('en-US', {
              hourCycle: 'h23',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Heading>

          <Text fontSize={'sm'}>{trip.origin.city}</Text>
          <Text fontSize={'sm'}>{`(${trip.origin.iata})`}</Text>
        </Flex>
        {/* MIDDLE */}
        <Stack align={'center'} h={'50px'} mb={'auto'}>
          <Text fontSize={'sm'}>
            {`${Math.floor(trip.durationInMinutes / 60)}hs ${
              trip.durationInMinutes % 60
            }min`}
          </Text>
          <Image
            alt="plane-with-line"
            boxSize={'200px'}
            src="./trips/plane-with-line.svg"
          />
          <Text fontSize={'sm'}>{trip.plane}</Text>
        </Stack>
        {/* ARRIVAL TIME AND CITY */}
        <Flex
          direction={'column'}
          textAlign={['center', 'center', 'center', 'left']}
        >
          <Heading fontSize={'2xl'}>
            {new Date(trip.arrivalDate).toLocaleString('en-US', {
              hourCycle: 'h23',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Heading>

          <Text fontSize={'sm'}>{trip.destination.city}</Text>
          <Text fontSize={'sm'}>{`(${trip.destination.iata})`}</Text>
        </Flex>
      </Grid>
    </Stack>
  );
}
