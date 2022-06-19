import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface IEducationCard {
  name?: string;
  period?: string;
  title?: string;
}

export const EducationCard: FC<IEducationCard> = ({ period, name, title }) => (
  <Flex gap={3} align="flex-start">
    <Text whiteSpace="nowrap" borderBottom="2px solid" borderColor="brand.400">
      {period}
    </Text>
    <Box>
      <Heading as="h3" size="md">
        {name}{' '}
      </Heading>{' '}
      <Text>{title}</Text>
    </Box>
  </Flex>
);
