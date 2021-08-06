import { Box, Heading, Text } from '@chakra-ui/react';

const Intro = () => {
  return (
    <Box as="section">
      <Heading as="h1">
        <Text as="span" fontWeight="bold">
          Ivica
        </Text>{' '}
        Batinić
      </Heading>
    </Box>
  );
};

export default Intro;
