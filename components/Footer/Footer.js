import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Image,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Heading,
  Grid
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsFillFilePersonFill } from 'react-icons/bs';

const ListHeader = ({ children }) => {
  return (
    <Heading
      fontSize={children === 'We Are Flybondi' ? '2xl' : 'xl'}
      fontWeight={children === 'We Are Flybondi' ? '600' : '500'}
      mb={2}
    >
      {children}
    </Heading>
  );
};
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      _hover={{
        transform: 'scale(1.1)'
      }}
      alignItems={'center'}
      as={'a'}
      bg={useColorModeValue('gray.100', 'gray.100')}
      color={'brand.200'}
      cursor={'pointer'}
      display={'inline-flex'}
      h={8}
      href={href}
      justifyContent={'center'}
      rel="noopener noreferrer"
      rounded={'full'}
      target="_blank"
      transition={'background 0.3s ease'}
      w={8}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      as={'footer'}
      bg={useColorModeValue('brand.200', 'gray.900')}
      color={useColorModeValue('gray.100', 'gray.100')}
    >
      <Container as={Stack} maxW={'8xl'} py={10}>
        <Grid gap={12} templateColumns={['1fr', '1fr', '1fr 2fr', '1fr 2fr']}>
          <Stack align={'flex-start'}>
            <ListHeader>We Are Flybondi</ListHeader>
            <Text>
              Somos los que no dejan que las distancias nos separen de los que
              más queremos. Somos los que hoy estamos acá y mañana podemos estar
              allá. Somos un equipo trabajando para que todos podamos volar.
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 1, sm: 3, md: 3 }} spacing={8}>
            <Stack align={['center', 'center', 'flex-end', 'flex-end']}>
              <ListHeader>Company</ListHeader>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                About Us
              </Text>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Blog
              </Text>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Careers
              </Text>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Contact Us
              </Text>
            </Stack>

            <Stack align={['center', 'center', 'flex-end', 'flex-end']}>
              <ListHeader>Support</ListHeader>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Help Center
              </Text>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Safety Center
              </Text>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Community Guidelines
              </Text>
            </Stack>

            <Stack align={['center', 'center', 'flex-end', 'flex-end']}>
              <ListHeader>Legal</ListHeader>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Cookies Policy
              </Text>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Privacy Policy
              </Text>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Terms of Service
              </Text>
              <Text _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Law Enforcement
              </Text>
            </Stack>
          </SimpleGrid>
        </Grid>
      </Container>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <Box
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderStyle={'solid'}
          borderTopWidth={1}
        >
          <Container
            align={['center', 'center', 'flex-end', 'flex-end']}
            as={Stack}
            direction={{ base: 'column', md: 'row' }}
            justify={{ md: 'space-between' }}
            maxW={'8xl'}
            py={4}
            spacing={4}
          >
            <Text>© 2022 Gonzalo Ariel Rossi</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                href={'https://www.gonzalorossi.dev'}
                label={'Portfolio'}
              >
                <BsFillFilePersonFill />
              </SocialButton>
              <SocialButton
                href={'https://github.com/GonzaloArielRossi'}
                label={'Twitter'}
              >
                <BsGithub />
              </SocialButton>
              <SocialButton
                href={'https://www.linkedin.com/in/gonzaloarossi/'}
                label={'YouTube'}
              >
                <BsLinkedin />
              </SocialButton>
            </Stack>
            <Image
              _hover={{ cursor: 'pointer' }}
              alt="flybondi logo"
              src="./flybondi-logo-white.svg"
            />
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
