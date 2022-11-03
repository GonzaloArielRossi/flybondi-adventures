import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Image,
  useDisclosure,
  useColorMode,
  Container
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      as={'nav'}
      backgroundColor={isDark ? '#1A202C' : '#FFFFFF'}
      boxShadow="lg"
      overflow={'hidden'}
      position={'fixed'}
      top={'0'}
      width={'100%'}
      zIndex={'10'}
    >
      <Container m={'0 auto'} maxW={['90vw', '90vw', '90vw', '1200px']} p={0}>
        <Flex
          align={'center'}
          bg={useColorModeValue('white', 'gray.800')}
          borderBottom={1}
          color={useColorModeValue('gray.600', 'white')}
          m={0}
          p={0}
        >
          <Flex
            display={{ base: 'flex', md: 'none' }}
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
          >
            <IconButton
              aria-label={'Toggle Navigation'}
              icon={
                isOpen ? (
                  <CloseIcon h={3} w={3} />
                ) : (
                  <HamburgerIcon h={5} w={5} />
                )
              }
              variant={'ghost'}
              onClick={onToggle}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Link href="/">
              <Image
                alt="flybondi logo"
                h={9}
                objectFit="fit"
                src="./flybondi-logo.svg"
              />
            </Link>
          </Flex>

          <Stack
            direction={'row'}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            spacing={6}
          >
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
            <IconButton
              alignSelf={'center'}
              aria-label={'Toggle Dark Mode'}
              display={{ base: 'flex', md: 'inline-flex' }}
              icon={isDark ? <SunIcon h={3} w={3} /> : <MoonIcon h={5} w={5} />}
              variant="ghost"
              onClick={toggleColorMode}
            />
          </Stack>
        </Flex>

        <Collapse animateOpacity in={isOpen}>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} mr={'3rem'} my={4} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} minWidth={'fit-content'}>
          <Popover placement={'bottom-start'} trigger={'hover'} width={'5rem'}>
            <PopoverTrigger>
              <Text
                _hover={{
                  textDecoration: 'underline',
                  color: linkHoverColor,
                  cursor: 'pointer'
                }}
                color={linkColor}
                fontSize={'sm'}
                fontWeight={500}
                p={2}
              >
                {navItem.label}
              </Text>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                bg={popoverContentBgColor}
                border={0}
                boxShadow={'xl'}
                minW={'sm'}
                p={4}
                rounded={'xl'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
      display={'block'}
      href={href}
      p={2}
      role={'group'}
      rounded={'md'}
    >
      <Stack align={'center'} direction={'row'}>
        <Box>
          <Text
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
            transition={'all .3s ease'}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          align={'center'}
          flex={1}
          justify={'flex-end'}
          opacity={0}
          transform={'translateX(-10px)'}
          transition={'all .3s ease'}
        >
          <Icon as={ChevronRightIcon} color={'pink.400'} h={5} w={5} />
        </Flex>
      </Stack>
    </Link>
  );
};
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      display={{ md: 'none' }}
      p={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        _hover={{
          textDecoration: 'none'
        }}
        align={'center'}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        py={2}
      >
        <Text
          color={useColorModeValue('gray.600', 'gray.200')}
          fontWeight={600}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            h={6}
            transform={isOpen ? 'rotate(180deg)' : ''}
            transition={'all .25s ease-in-out'}
            w={6}
          />
        )}
      </Flex>

      <Collapse animateOpacity in={isOpen} style={{ marginTop: '0!important' }}>
        <Stack
          align={'start'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderLeft={1}
          borderStyle={'solid'}
          mt={2}
          pl={4}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href} py={2}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
const NAV_ITEMS = [
  {
    label: 'Chek in'
  },
  {
    label: 'Bookings'
  },
  {
    label: 'Flight Status'
  },
  {
    label: 'Groups'
  },
  {
    label: 'Club'
  },
  {
    label: 'Blog'
  },
  {
    label: 'FAQ'
  }
];
