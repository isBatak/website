import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface ICompanyCard {
  logo?: ReactNode;
  name?: string;
  period?: string;
  position?: string;
  children?: ReactNode;
}

export const CompanyCard: FC<ICompanyCard> = ({ logo, name, period, position, children }) => (
  <Flex gap={3} align={{ base: 'stretch', md: 'flex-start' }} direction={{ base: 'column', md: 'row' }}>
    <Box
      flexBasis={{ base: 'none', md: '120px' }}
      flexShrink="0"
      minW="0"
      bg="radial-gradient(69.35% 73.5% at 46.87% 74.75%, #F7B733 0%, #FC4A1A 100%)"
      borderRadius="md"
    >
      {logo}
    </Box>
    <Box>
      <Heading as="h3" size="md">
        {name}
      </Heading>
      <Text fontSize="sm">{position}</Text>
      <Text fontSize="sm" mt={2}>
        {children}
      </Text>
    </Box>
    <Text fontSize="xs" whiteSpace="nowrap">
      {period}
    </Text>
  </Flex>
);
