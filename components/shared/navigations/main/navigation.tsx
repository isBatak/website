import { Box, Flex, IconButton, VStack, HStack, Icon, Container, Button, Text, Collapsible } from '@chakra-ui/react';
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
          <Button asChild p={3} fontSize={'sm'} fontWeight="black" variant="ghost" borderRadius="full" size="xs">
            <NextLink href={navItem.href ?? '#'}>{navItem.label}</NextLink>
          </Button>
        </Box>
      ))}
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <VStack bg="white" _dark={{ bg: 'gray.800' }} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Button key={navItem.label} w="full" asChild>
          <NextLink href={navItem.href ?? '#'}>{navItem.label}</NextLink>
        </Button>
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
              {isOpen ? (
                <Icon asChild w={3} h={3}>
                  <IoClose />
                </Icon>
              ) : (
                <Icon asChild w={5} h={5}>
                  <IoMenu />
                </Icon>
              )}
            </IconButton>
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text asChild _dark={{ color: 'white' }} _light={{ color: 'gray.800' }} fontSize="2xl" fontWeight="bold">
              <NextLink href="/">
                <Text
                  as="span"
                  bgGradient="to-l"
                  gradientFrom="#fc4a1a"
                  gradientTo="#f7b733"
                  bgClip="text"
                  color="transparent"
                >
                  _is
                </Text>
                Batak
              </NextLink>
            </Text>
          </Flex>

          <HStack flex={{ base: 1, md: 0 }} justify={'flex-end'} align="center" gap={6}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
            {/* <ModeToggle /> */}
          </HStack>
        </Flex>
        <Collapsible.Root open={isOpen}>
          <Collapsible.Content
            overflow="hidden"
            _open={{
              animation: 'collapse-in 250ms',
            }}
            _closed={{
              animation: 'collapse-out 250ms',
            }}
          >
            <MobileNav />
          </Collapsible.Content>
        </Collapsible.Root>
      </Container>
    </Box>
  );
};
