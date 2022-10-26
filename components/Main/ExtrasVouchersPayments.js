import { Image, Heading, Text, Stack, Grid, Link } from '@chakra-ui/react';

export default function ExtrasVouchersPayments() {
  return (
    <Grid
      as={'section'}
      fontSize={14}
      mt={'8rem'}
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
          alt="extras"
          boxSize={'min'}
          objectFit="cover"
          src="./extras-vouchers-payments/extras.svg"
        />
        <Heading size={12} textTransform={'uppercase'}>
          Buy your tickets online
        </Heading>
        <Text>
          Wanna check baggage, choose seats or travel with your pet?{' '}
          <Link as={'span'} textColor={'brand.100'}>
            Click here.
          </Link>
        </Text>
      </Stack>
      <Stack>
        <Image
          alignSelf={'center'}
          alt="vouchers"
          boxSize={'min'}
          objectFit="cover"
          src="./extras-vouchers-payments/voucher.svg"
        />
        <Heading size={12} textTransform={'uppercase'}>
          Look-up your voucher
        </Heading>
        <Text>
          Insert your voucher details
          <Link as={'span'} textColor={'brand.100'}>
            {' '}
            here{' '}
          </Link>
          to know your funds
        </Text>
      </Stack>
      <Stack>
        <Image
          alignSelf={'center'}
          alt="promos"
          boxSize={'min'}
          objectFit="cover"
          src="./extras-vouchers-payments/promos.svg"
        />
        <Heading size={12} textTransform={'uppercase'}>
          discounts and payments
        </Heading>
        <Text>
          <Link as={'span'} textColor={'brand.100'}>
            Click here{' '}
          </Link>
          and check all of our discounts and payment options. Make your trip
          even cheaper!
        </Text>
      </Stack>
    </Grid>
  );
}
