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
      <Container
        as={Stack}
        m={'0 auto'}
        maxW={['90vw', '90vw', '90vw', '1200px']}
        px={0}
        py={10}
      >
        <Grid gap={12} templateColumns={['1fr', '1fr', '1fr 2fr', '1fr 2fr']}>
          <Stack align={'flex-start'}>
            <ListHeader>We Are Flybondi</ListHeader>
            <Text>
              {`We are the ones that don't let distance separete us. We are the
              ones that are here today, but could be anywhere tomorrow. We are a
              team working toghether with the goal of making flying accesible for all`}
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
      <Container
        as={Stack}
        m={'0 auto'}
        maxW={['90vw', '90vw', '90vw', '1200px']}
        px={0}
        py={10}
      >
        <Box
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderStyle={'solid'}
          borderTopWidth={1}
        >
          <Stack
            align={['center', 'center', 'flex-end', 'flex-end']}
            direction={{ base: 'column', md: 'row' }}
            justify={{ md: 'space-between' }}
            m={'0 auto'}
            maxW={['90vw', '90vw', '90vw', '1200px']}
            px={0}
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
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
