import {
  Box,
  Flex,
  Text,
  IconButton,
  VStack,
  HStack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  Container,
  Image,
  Heading,
  useColorMode,
  Button,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { IoMoon, IoSunny, IoClose, IoMenu, IoArrowDown } from 'react-icons/io5';

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
  {
    label: 'CV',
    href: '/about',
  },
];

const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <HStack spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink href={navItem.href ?? '#'} passHref>
            <Link
              p={2}
              fontSize={'sm'}
              fontWeight="black"
              color={linkColor}
              _hover={{
                textDecoration: 'underline',
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Link>
          </NextLink>
        </Box>
      ))}
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <VStack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <NextLink key={navItem.label} href={navItem.href ?? '#'} passHref>
          <Button as="a" w="full">
            {navItem.label}
          </Button>
        </NextLink>
      ))}
    </VStack>
  );
};

const ModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="icon"
      onClick={toggleColorMode}
      aria-label="Toggle dark mode"
      icon={colorMode === 'light' ? <IoMoon /> : <IoSunny />}
    />
  );
};

export const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      w="full"
      position="sticky"
      top="0"
      backdropFilter="blur(5px)"
      zIndex="sticky"
      borderBottomWidth="1px"
    >
      <Container py="0" px="0" flex="0">
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

          <HStack flex={{ base: 1, md: 0 }} justify={'flex-end'} align="center" spacing={6}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
            <ModeToggle />
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
};
