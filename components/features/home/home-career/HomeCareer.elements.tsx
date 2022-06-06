import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Image } from 'components/core/Image';

export const CompanyCard = ({ logo, name, period, position, description }) => (
  <Flex p={2} gap={2} borderColor="chakra-border-color">
    <Image src={logo} width="100px" height="100px" borderRadius="md" />
    <Box>
      <Heading as="h3" size="md">
        {name}
      </Heading>
      <Text>{position}</Text>
      <Text fontSize="sm" mt={2}>
        {description}
      </Text>
    </Box>
    <Text fontSize="xs">{period}</Text>
  </Flex>
);
