import { Box, Flex, IconButton, VStack, HStack, Collapse, Icon, Container, Button, Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { useTheme } from 'next-themes';

import NextLink from 'next/link';
import { IoMoon, IoSunny, IoClose, IoMenu } from 'react-icons/io5';

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

const DesktopNav = () => {
  return (
    <HStack gap={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink href={navItem.href ?? '#'} passHref>
            <Button as="a" p={3} fontSize={'sm'} fontWeight="black" variant="ghost" borderRadius="full" size="xs">
              {navItem.label}
            </Button>
          </NextLink>
        </Box>
      ))}
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <VStack bg="white" _dark={{ bg: 'gray.800' }} p={4} display={{ md: 'none' }}>
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
  const { theme, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton variant="ghost" onClick={toggleColorMode} aria-label="Toggle dark mode">
      {theme === 'light' ? <IoMoon /> : <IoSunny />}
    </IconButton>
  );
};

export const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="header" w="full" position="sticky" top="0" backdropFilter="blur(5px)" zIndex="sticky">
      <Container py="0" px="0" flex="0">
        <Flex minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
          <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
            <IconButton onClick={onToggle} variant={'ghost'} aria-label={'Toggle Navigation'}>
              {isOpen ? <Icon as={IoClose} w={3} h={3} /> : <Icon as={IoMenu} w={5} h={5} />}
            </IconButton>
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <NextLink href="/" passHref>
              <Text as="a" _dark={{ color: 'white' }} _light={{ color: 'gray.800' }} fontSize="2xl" fontWeight="bold">
                <Text as="span" layerStyle="gradientText">
                  _is
                </Text>
                Batak
              </Text>
            </NextLink>
          </Flex>

          <HStack flex={{ base: 1, md: 0 }} justify={'flex-end'} align="center" gap={6}>
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
