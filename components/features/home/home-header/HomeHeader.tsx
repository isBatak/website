import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface IHomeHeaderProps {}

export const HomeHeader: FC<IHomeHeaderProps> = () => {
  return (
    <Container py="5" maxW="2xl" h="calc(100vh - 60px - 66px)">
      <Flex align="center" position="relative" h="100%" /* From https://css.glass */>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap="5"
          py="4"
          px="8"
          bg="whiteAlpha.300"
          borderRadius="xl"
          boxShadow="sm"
          blur="md"
          backdropBlur="md"
          backdropFilter="auto"
          border="1px solid rgba(255, 255, 255, 0.3)"
        >
          <Box flexShrink={0}>
            <Image src="/assets/logo.svg" alt="isBatak" />
          </Box>
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Heading mb={2} textStyle={{ base: '3xl', md: '4xl' }}>
              Hello! 👋
            </Heading>
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
        </Flex>
      </Flex>
    </Container>
  );
};
