import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface IHomeHeaderProps {}

export const HomeHeader: FC<IHomeHeaderProps> = () => {
  return (
    <Container py={{ base: '7', md: '8' }} px={{ base: '6', md: '8' }} maxW="2xl" h="calc(100vh - 60px - 66px)">
      <Box
        as="section"
        display="flex"
        alignItems="center"
        position="relative"
        flexDirection={{ base: 'column', md: 'row' }}
        gap="5"
        py={{ base: '8', md: '10' }}
        px={{ base: '6', md: '10' }}
        border="1px solid"
        borderRadius={{ base: '3xl', md: '48px' }}
        boxShadow="var(--chakra-shadows-home-header-frame)"
        backdropFilter="blur(12px)"
        _light={{
          bg: 'rgba(255, 255, 255, 0.88)',
          borderColor: 'rgba(252, 124, 33, 0.18)',
        }}
        _dark={{
          bg: 'rgba(8, 8, 8, 0.88)',
          borderColor: 'rgba(252, 124, 33, 0.16)',
        }}
      >
        <Box flexShrink={0}>
          <Image src="/assets/logo.svg" alt="isBatak" />
        </Box>
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Heading mb={2}>Hello! 👋</Heading>
          <Text>
            My name is{' '}
            <Text as="span" layerStyle="gradientText" fontSize="md" fontWeight="bold">
              Ivica Batinić
            </Text>{' '}
            and I&apos;m a React Developer from Croatia 🇭🇷
          </Text>
          <Text>
            This is my personal website, where I write about the things I&apos;m working on and share what I&apos;ve
            learned.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};
