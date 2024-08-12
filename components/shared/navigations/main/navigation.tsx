import {
  Box,
  Flex,
  IconButton,
  VStack,
  HStack,
  Icon,
  Container,
  Button,
  Text,
  Collapsible,
  ClientOnly,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { useTheme } from 'next-themes';

import NextLink from 'next/link';
import { IoMoon, IoSunny, IoClose, IoMenu } from 'react-icons/io5';
import { CgSpinner } from 'react-icons/cg';

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
    <VStack p={4} hideFrom="md" gap={2} backdropFilter="blur(5px)">
      {NAV_ITEMS.map((navItem) => (
        <Button key={navItem.label} w="full" asChild>
          <NextLink href={navItem.href ?? '#'}>{navItem.label}</NextLink>
        </Button>
      ))}
    </VStack>
  );
};

const MobileToggleFallback = () => {
  return (
    <IconButton variant="ghost" aria-label="Toggle dark mode">
      <Icon asChild animation="spin 0.5s linear infinite">
        <CgSpinner />
      </Icon>
    </IconButton>
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
  const { open, onToggle } = useDisclosure();

  return (
    <Box as="header" w="full" position="sticky" top="0" backdropFilter="blur(5px)" zIndex="sticky" flex="0">
      <Container py="0" px="0" flex="0">
        <Flex minH={'60px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
          <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
            <IconButton onClick={onToggle} variant={'ghost'} aria-label={'Toggle Navigation'}>
              {open ? (
                <Icon asChild boxSize={5}>
                  <IoClose />
                </Icon>
              ) : (
                <Icon asChild boxSize={5}>
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
            <ClientOnly fallback={<MobileToggleFallback />}>
              <ModeToggle />
            </ClientOnly>
          </HStack>
        </Flex>
        <Collapsible.Root open={open}>
          <Collapsible.Content>
            <MobileNav />
          </Collapsible.Content>
        </Collapsible.Root>
      </Container>
    </Box>
  );
};
