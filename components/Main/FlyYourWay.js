import { Image, Heading, Text, Stack, Grid, Box } from '@chakra-ui/react';

export default function FlyYourWay() {
  return (
    <Stack
      alignItems={'center'}
      as={'section'}
      direction={'column'}
      gap={4}
      mt={'8rem'}
    >
      <Heading size={'md'}>Fly your way</Heading>
      <Text>
        Choose the option that best fits for you and get ready to take off!
      </Text>
      <Grid
        flex-basis={'100%'}
        gap={4}
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(4, 1fr)',
          'repeat(4, 1fr)'
        ]}
      >
        <Box overflow={'hidden'} rounded={'md'}>
          <Image
            _hover={{
              transform: 'scale(1.1)',
              cursor: 'pointer'
            }}
            alt="ultra pases"
            src="./fly-your-way/ultra-pases.png"
            transition={'all 1s ease'}
          />
        </Box>
        <Box overflow={'hidden'} rounded={'md'}>
          <Image
            _hover={{
              transform: 'scale(1.1)',
              cursor: 'pointer'
            }}
            alt="club flybondi"
            src="./fly-your-way/club-flybondi.png"
            transition={'all 1s ease'}
          />
        </Box>
        <Box overflow={'hidden'} rounded={'md'}>
          <Image
            _hover={{
              transform: 'scale(1.1)',
              cursor: 'pointer'
            }}
            alt="revista somos"
            src="./fly-your-way/revista-somos.png"
            transition={'all 1s ease'}
          />
        </Box>
        <Box overflow={'hidden'} rounded={'md'}>
          <Image
            _hover={{
              transform: 'scale(1.1)',
              cursor: 'pointer'
            }}
            alt="blog"
            src="./fly-your-way/blog.png"
            transition={'all 1s ease'}
          />
        </Box>
      </Grid>
    </Stack>
  );
}
