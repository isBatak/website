import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  Container,
  Image,
  Heading,
  useColorMode,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { IoMoonOutline, IoSunnyOutline, IoClose, IoMenu, IoArrowDown } from 'react-icons/io5';

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: 'Home',
  //   href: '/',
  // },
  {
    label: 'Blog',
    href: '/',
  },
  // {
  //   label: 'About',
  //   href: '/about',
  // },
];

const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('black', 'gray.200')}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const ModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
      icon={colorMode === 'light' ? <IoMoonOutline /> : <IoSunnyOutline />}
    />
  );
};

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container py="5" flex="0">
      <Flex minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <Icon as={IoClose} w={3} h={3} /> : <Icon as={IoMenu} w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <NextLink href="/" passHref>
            <Flex as="a" alignItems="flex-end" sx={{ gap: 10 }}>
              <Image src="/assets/logo.svg" alt="logo" w="30px" />
              <Heading color={useColorModeValue('gray.800', 'white')}>isBatak</Heading>
            </Flex>
          </NextLink>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} align="center" direction={'row'} spacing={6}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <ModeToggle />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container>
  );
};

export default Header;
