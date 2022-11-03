import { Image, Heading, Text, Stack, Grid, Box } from '@chakra-ui/react';

const images = [
  {
    alt: 'ultra pases',
    src: './fly-your-way/ultra-pases.png'
  },
  {
    alt: 'club flybondi',
    src: './fly-your-way/club-flybondi.png'
  },
  {
    alt: 'revista somos',
    src: './fly-your-way/revista-somos.png'
  },
  {
    alt: 'blog',
    src: './fly-your-way/blog.png'
  }
];

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
        {images.map((image, idx) => (
          <Box key={idx} overflow={'hidden'} rounded={'3px'}>
            <Image
              _hover={{
                transform: 'scale(1.1)',
                cursor: 'pointer'
              }}
              alt={image.alt}
              src={image.src}
              transition={'all 1s ease'}
            />
          </Box>
        ))}
      </Grid>
    </Stack>
  );
}
