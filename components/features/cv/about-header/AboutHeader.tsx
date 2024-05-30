import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Background } from 'components/shared/3d/Background';
import { FC } from 'react';

export interface IAboutHeaderProps {}

export const AboutHeader: FC<IAboutHeaderProps> = () => {
  return (
    <Box>
      <Container py="5">
        <Flex
          bg="orange.200"
          w="full"
          borderRadius="3xl"
          bgGradient="linear(to-l, #fc4a1a,#f7b733)"
          py="4"
          px="8"
          align="center"
          position="relative"
          direction={{ base: 'column', md: 'row' }}
          gap="5"
        >
          <Box position="absolute" inset="0" zIndex="0" borderRadius="3xl" overflow="hidden">
            <Background />
          </Box>
          <Box zIndex="1" filter="drop-shadow(0 2px 5px rgba(0, 0, 0, 0.5))">
            <Image
              alt="profile"
              w={{ base: '200px' }}
              h={{ base: '200px' }}
              src="/assets/blog/authors/isbatak.jpg"
              clipPath="polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)"
            />
          </Box>
          <Box zIndex="1" textAlign={{ base: 'center', md: 'left' }}>
            <Heading
              as="h1"
              color="white"
              textShadow="0 1px 5px rgba(0,0,0,0.5)"
              textStyle={{ base: '3xl', md: '4xl' }}
            >
              Ivica Batinić
            </Heading>
            <Text color="white" fontWeight="bold" textShadow="0 1px 5px rgba(0,0,0,0.5)">
              Lead React Engineer
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
