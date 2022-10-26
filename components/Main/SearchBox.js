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
  Image
} from '@chakra-ui/react';
import { FaPlaneDeparture, FaMoneyBillAlt } from 'react-icons/fa';
import { BsFillPersonFill, BsCalendar3 } from 'react-icons/bs';

export default function SearchBox({ props }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const handleThrow = (e) => {
    e.preventDefault();
  };
  const today = new Date(Date.now());
  const year = today.getFullYear();
  let month = today.getMonth() + 1;

  if (month < 10) {
    month = `0${month}`;
  }

  return (
    <Stack
      bg={
        isDark
          ? 'linear-gradient(90deg, #FDBE15 1.5%, #2D3748 1.5%)'
          : 'linear-gradient(90deg, #FDBE15 1.5%, #F4F4F4 1.5%)'
      }
      mt={'6rem'}
      px={12}
      py={6}
      rounded={'xl'}
    >
      <Stack alignItems={'center'} direction={'row'} gap={2} mb={4} pb={4}>
        <Image
          alt="plane"
          boxSize={'30px'}
          src="./search-box/plane.svg"
          transform={'rotate(-45deg)'}
        />
        <Heading size={'md'} textAlign={'left'}>
          Search Flights
        </Heading>
      </Stack>

      <Grid
        alignItems={'center'}
        as={'form'}
        gap={8}
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
              name="airport"
              textAlign={'center'}
              type="text"
            >
              {props.data.airports.map((airport) => (
                <option key={airport.id} value={airport.id}>
                  {`${airport.state.name} (${airport.iata})`}
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
            Date:
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
              placeholder="Date"
              textAlign={'center'}
              type="month"
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
              defaultValue={3500}
              max={100000}
              min={1500}
              step={500}
              w={'100%'}
            >
              <NumberInputField
                _focus={{ border: 'none', boxShadow: 'none' }}
                border={'none'}
                flexGrow={1}
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
            <NumberInput defaultValue={1} max={9} min={1} step={1} w={'100%'}>
              <NumberInputField
                _focus={{ border: 'none', boxShadow: 'none' }}
                border={'none'}
                flexGrow={1}
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

        <Button
          _hover={{ transform: 'scale(1.02)' }}
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
      </Grid>
    </Stack>
  );
}
