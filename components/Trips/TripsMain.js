import {
  Divider,
  useColorMode,
  Grid,
  Flex,
  Heading,
  Button
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';

import TripDetails from './TripDetails';
import TripSummary from './TripSummary';

export default function TripsMain({ props }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const router = useRouter();
  const handleReturn = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <>
      {props?.results === 0 && (
        <Flex alignSelf={'center'} direction={'column'} gap={'2rem'}>
          <Heading>No trips found!🔍</Heading>
          <Heading fontSize={'2xl'}>
            Please try again with different parameters!
          </Heading>
          <Button
            _hover={{
              backgroundColor: 'brand.500',
              border: '1px solid',
              borderColor: 'brand.100'
            }}
            aria-label={'Throw'}
            bg={'brand.100'}
            gridColumn={['1', '1', '1', '1/3']}
            mx={'auto'}
            px={12}
            rounded={'100'}
            textColor={'black'}
            transition={'all .3s ease'}
            type="submit"
            onClick={(e) => handleReturn(e)}
          >
            Throw Again🎯
          </Button>
        </Flex>
      )}
      {/* <TripOptions origin={props.trips[0].awayCandidate.origin.city} /> */}
      {props &&
        props.trips.map((trip) => (
          <LazyLoad key={trip.id} height={50} offset={50}>
            <Grid
              align={'center'}
              bg={[
                isDark
                  ? 'linear-gradient(90deg, #FDBE15 3%, #2D3748 3%)'
                  : 'linear-gradient(90deg, #FDBE15 3%, #F4F4F4 3%)',
                isDark
                  ? 'linear-gradient(90deg, #FDBE15 2.5%, #2D3748 2.5%)'
                  : 'linear-gradient(90deg, #FDBE15 2.5%, #F4F4F4 2.5%)',
                isDark
                  ? 'linear-gradient(90deg, #FDBE15 2%, #2D3748 2%)'
                  : 'linear-gradient(90deg, #FDBE15 2%, #F4F4F4 2%)',
                isDark
                  ? 'linear-gradient(90deg, #FDBE15 1.5%, #2D3748 1.5%)'
                  : 'linear-gradient(90deg, #FDBE15 1.5%, #F4F4F4 1.5%)'
              ]}
              g={['1rem', '1rem', '1rem', '0']}
              mt={'2rem'}
              py={['2rem', '2rem', '2rem', '0']}
              rounded={'lg'}
              shadow={'lg'}
              templateColumns={[
                'repeat(1, auto)',
                'repeat(1, auto)',
                'repeat(1, auto)',
                '2fr auto 2fr auto 1fr'
              ]}
            >
              <TripDetails props={trip.awayCandidate} />
              <Divider
                alignSelf={'center'}
                backgroundColor={'brand.100'}
                h={['3px', '3px', '3px', '100%']}
                mx={'auto'}
                opacity={100}
                orientation={[
                  'horizontal',
                  'horizontal',
                  'horizontal',
                  'vertical'
                ]}
                p={0}
                w={['80%', '80%', '80%', '5px']}
              />
              <TripDetails props={trip.returnCandidate} />
              {/* PRECIO */}
              <Divider
                alignSelf={'center'}
                backgroundColor={'brand.100'}
                border={'none'}
                h={['3px', '3px', '3px', '100%']}
                mx={'auto'}
                opacity={100}
                orientation="vertical"
                p={0}
                w={['80%', '80%', '80%', '5px']}
              />
              <TripSummary props={trip} />
            </Grid>
          </LazyLoad>
        ))}
    </>
  );
}
