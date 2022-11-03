import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Stack,
  Grid,
  Input,
  Select,
  Button,
  useColorMode,
  Image,
  Text
} from '@chakra-ui/react';
import { FaPlaneDeparture, FaMoneyBillAlt } from 'react-icons/fa';
import { BsFillPersonFill, BsCalendar3 } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBox({ props }) {
  const today = new Date(Date.now());
  const year = today.getFullYear();
  let month = today.getMonth() + 1;

  if (month < 10) {
    month = `0${month}`;
  }

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  // STATES
  const [airportId, setAirportId] = useState(props.airports[0].id);
  const [date, setDate] = useState(`${year}-${month}`);
  const [passengers, setPassengers] = useState('1');
  const [budget, setBudget] = useState(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(30000)
  );
  const [loading, setLoading] = useState(false);
  // Router
  const router = useRouter();
  const handleThrow = async (e) => {
    e.preventDefault();
    const newBudget = Number(budget.replace(/[^0-9.-]+/g, ''));

    setLoading(true);
    router.push({
      pathname: '/trips',
      query: {
        airportId,
        date,
        budget: newBudget,
        passengers
      }
    });
  };

  return (
    <Stack
      bg={
        isDark
          ? 'linear-gradient(90deg, #FDBE15 1.5%, #2D3748 1.5%)'
          : 'linear-gradient(90deg, #FDBE15 1.5%, #F4F4F4 1.5%)'
      }
      mt={'8rem'}
      px={12}
      py={6}
      rounded={'xl'}
      shadow={'lg'}
    >
      <Heading>FLYBONDI ADVENTURES</Heading>
      <Text fontSize={'xl'} mt={'6'} mx="auto">
        Ever wanted to throw a dart at the map and fly wherever it lands? 🎯
        <br />
        With{' '}
        <Text as={'span'} color="brand.100" fontWeight={'600'}>
          Flybondi Adventures
        </Text>
        , you get to know Argentina by traveling to a random location based on
        your budget.
      </Text>
      <Stack
        align={'center'}
        direction={['column', 'row', 'row', 'row']}
        gap={2}
        pb={4}
        pt={'2rem'}
      >
        <Image
          alt="plane"
          boxSize={'30px'}
          src="./search-box/plane.svg"
          transform={'rotate(-45deg)'}
        />
        <Heading size={'md'} textAlign={['center', 'left', 'left', 'left']}>
          Find your next adventure!
        </Heading>
      </Stack>

      <Grid
        action="/api/flightSearch"
        alignItems={'center'}
        as={'form'}
        gap={8}
        method="post"
        overflow={' hidden'}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)'
        ]}
      >
        <Stack>
          {/* :::::::::::::::::::::::FROM::::::::::::::::::::::::::::::: */}
          <Heading
            fontSize={'sm'}
            textAlign={['center', 'left', 'left', 'left']}
            textColor={isDark ? 'brand.300' : 'brand.400'}
            textTransform={'uppercase'}
          >
            From:
          </Heading>
          <Stack
            _hover={{
              borderColor: '#FDBE15'
            }}
            align={'center'}
            alignSelf={['center', 'stretch', 'stretch', 'stretch']}
            border={'solid 1px #E2E8F0'}
            direction={'row'}
            maxW={['90%', '95%', '95%', '95%']}
            px={2}
            rounded={'mds'}
          >
            <FaPlaneDeparture size={'30px'} />
            <Select
              _focus={{ border: 'none', boxShadow: 'none' }}
              border={'none'}
              name="airportId"
              textAlign={'center'}
              type="text"
              onChange={(e) => setAirportId(e.target.value)}
            >
              {props.airports.map((airport) => (
                <option key={airport.id} value={airport.id}>
                  {`${airport.city} (${airport.iata})`}
                </option>
              ))}
            </Select>
          </Stack>
        </Stack>
        {/* :::::::::::::::::::::::DATE::::::::::::::::::::::::::::::: */}
        <Stack>
          <Heading
            fontSize={'sm'}
            textAlign={['center', 'left', 'left', 'left']}
            textColor={isDark ? 'brand.300' : 'brand.400'}
            textTransform={'uppercase'}
          >
            Month:
          </Heading>
          <Stack
            _hover={{
              borderColor: '#FDBE15'
            }}
            align={'center'}
            alignSelf={['center', 'stretch', 'stretch', 'stretch']}
            border={'solid 1px #E2E8F0'}
            direction={'row'}
            maxW={['90%', '95%', '95%', '95%']}
            px={2}
            rounded={'md'}
          >
            <BsCalendar3 size={'30px'} />
            <Input
              _focus={{ border: 'none', boxShadow: 'none' }}
              border={'none'}
              defaultValue={`${year}-${month}`}
              max={`${year + 1}-${month}`}
              min={`${year}-${month}`}
              name="date"
              placeholder="Date"
              textAlign={'center'}
              type="month"
              onChange={(e) => setDate(e.target.value)}
            />
          </Stack>
        </Stack>
        {/* :::::::::::::::::::::::BUDGET::::::::::::::::::::::::::::::: */}
        <Stack>
          <Heading
            fontSize={'sm'}
            textAlign={['center', 'left', 'left', 'left']}
            textColor={isDark ? 'brand.300' : 'brand.400'}
            textTransform={'uppercase'}
          >
            Budget:
          </Heading>
          <Stack
            _hover={{
              borderColor: '#FDBE15'
            }}
            align={'center'}
            alignSelf={['center', 'stretch', 'stretch', 'stretch']}
            border={'solid 1px #E2E8F0'}
            direction={'row'}
            justify={'space-between'}
            maxW={['90%', '95%', '95%', '95%']}
            px={2}
            rounded={'md'}
          >
            <FaMoneyBillAlt size={'30px'} />
            <NumberInput
              defaultValue={30000}
              max={5000000}
              min={1500}
              step={1000}
              value={budget}
              w={'100%'}
              onChange={(e) =>
                setBudget(
                  new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(e)
                )
              }
            >
              <NumberInputField
                _focus={{ border: 'none', boxShadow: 'none' }}
                border={'none'}
                flexGrow={1}
                name="budget"
                textAlign={'center'}
              />
              <NumberInputStepper>
                <NumberIncrementStepper border={'none'} />
                <NumberDecrementStepper border={'none'} />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
        </Stack>
        {/* :::::::::::::::::::::::PASSENGERS::::::::::::::::::::::::::::::: */}
        <Stack>
          <Heading
            fontSize={'sm'}
            textAlign={['center', 'left', 'left', 'left']}
            textColor={isDark ? 'brand.300' : 'brand.400'}
            textTransform={'uppercase'}
          >
            Passengers:
          </Heading>
          <Stack
            _hover={{
              borderColor: '#FDBE15'
            }}
            align={'center'}
            alignSelf={['center', 'stretch', 'stretch', 'stretch']}
            border={'solid 1px #E2E8F0'}
            direction={'row'}
            justify={'space-between'}
            maxW={['90%', '95%', '95%', '95%']}
            px={2}
            rounded={'md'}
          >
            <BsFillPersonFill size={'30px'} />
            <NumberInput
              defaultValue={1}
              max={9}
              min={1}
              step={1}
              w={'100%'}
              onChange={(e) => setPassengers(e)}
            >
              <NumberInputField
                _focus={{ border: 'none', boxShadow: 'none' }}
                border={'none'}
                flexGrow={1}
                name="passengers"
                textAlign={'center'}
              />
              <NumberInputStepper>
                <NumberIncrementStepper border={'none'} />
                <NumberDecrementStepper border={'none'} />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
        </Stack>
        {/* :::::::::::::::::::::::THROW::::::::::::::::::::::::::::::: */}
        {loading && (
          <Button
            isLoading
            _hover={{
              backgroundColor: 'brand.500',
              border: '1px solid',
              borderColor: 'brand.100'
            }}
            aria-label={'Throw'}
            bg={'brand.100'}
            gridColumn={['1', '1', '1', '1/3']}
            loadingText="Finding your next adventure..."
            mx={'auto'}
            px={12}
            rounded={'100'}
            textColor={'black'}
            transition={'all .3s ease'}
            type="submit"
          >
            Throw🎯
          </Button>
        )}
        {!loading && (
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
            onClick={handleThrow}
          >
            Throw🎯
          </Button>
        )}
      </Grid>
    </Stack>
  );
}
