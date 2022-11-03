import { Image, Heading, Text, Stack, Grid, Button } from '@chakra-ui/react';

export default function LowPrices() {
  return (
    <Stack as={'section'} direction={'column'} gap={4} mt={'10rem'}>
      <Heading size={'md'}>How do we manage to have such low prices?</Heading>
      <Text>
        Our business model is not a secret. It already works in docens of
        countries. These are some of our principles
      </Text>
      <Grid
        alignItems={'space-between'}
        as={'section'}
        fontSize={14}
        gap={12}
        mt={24}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)'
        ]}
      >
        <Stack>
          <Image
            alignSelf={'center'}
            alt="our fleet"
            boxSize={'min'}
            g={0}
            objectFit="cover"
            src="./low-prices/our-fleet.svg"
          />
          <Heading size={12} textTransform={'uppercase'}>
            Our Fleet
          </Heading>
          <Text>
            One type of plane, one type of seat. We say yes to unique class!{' '}
          </Text>
        </Stack>
        <Stack>
          <Image
            alignSelf={'center'}
            alt="pay what you need"
            boxSize={'min'}
            objectFit="cover"
            src="./low-prices/pay-what-you-need.svg"
          />
          <Heading size={12} textTransform={'uppercase'}>
            Pay only what you need
          </Heading>
          <Text>
            Window or aisle? Carry-on or handbag? We let you choose what to pay
            for
          </Text>
        </Stack>
        <Stack>
          <Image
            alignSelf={'center'}
            alt="buy online"
            boxSize={'min'}
            objectFit="cover"
            src="./low-prices/buy-online.svg"
          />
          <Heading size={12} textTransform={'uppercase'}>
            Buy Online
          </Heading>
          <Text>
            Buy your ticket through our web, wherever you are. No commissions!
          </Text>
        </Stack>
      </Grid>
      <Button
        _hover={{
          backgroundColor: 'brand.500',
          border: '1px solid',
          borderColor: 'brand.100'
        }}
        alignSelf={'center'}
        aria-label={'Wanna know more about our low prices?'}
        bg={'brand.100'}
        color={'black'}
        fontSize={['xs', 'sm', 'md', 'md']}
        fontWeight={300}
        maxW={'80%'}
        px={24}
        rounded={100}
      >
        Wanna know more about our low prices?
      </Button>
    </Stack>
  );
}
