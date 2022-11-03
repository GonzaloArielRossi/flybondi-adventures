import {
  Image,
  Heading,
  Text,
  Stack,
  Box,
  useColorMode
} from '@chakra-ui/react';

export default function Step(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box bg={isDark ? 'gray.700' : 'brand.300'} px={12} py={2} rounded={'lg'}>
      <Stack gap={6}>
        <Heading size={'sm'} textTransform={'uppercase'}>
          {props.step.title}
        </Heading>
        <Stack
          alignItems={'center'}
          columnGap={12}
          direction={['column', 'column', 'row', 'row']}
        >
          <Image alt={props.step.alt} boxSize={'65px'} src={props.step.img} />
          <Text
            fontSize={'sm'}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {props.step.description}
          </Text>
        </Stack>
        <Text
          _hover={{ cursor: 'pointer', textDecoration: 'underline 2px' }}
          color={'brand.100'}
        >
          {props.step.link}
        </Text>
      </Stack>
    </Box>
  );
}
