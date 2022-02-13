import { Avatar, Box, chakra, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

const ChakraImage = chakra(Image, {
  shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop),
});

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
          p="5"
          align="center"
        >
          <Box>
            <Avatar w={{ base: '200px' }} h={{ base: '200px' }} src="/assets/blog/authors/isbatak.jpg" />
          </Box>
          <Box ml="6">
            <Heading as="h1" color="white">
              Ivica Batinić
            </Heading>
            <Text color="white" fontWeight="bold">
              Lead React Engineer
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
