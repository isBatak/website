import {
  Box,
  Container,
  ContainerProps,
  Flex,
  Heading,
  Icon,
  StackDivider,
  StyleProps,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { IoSchoolOutline } from 'react-icons/io5';

const EducationCard = ({ period, name, title }) => (
  <Flex gap={3} align="flex-start">
    <Text whiteSpace="nowrap" borderBottom="2px solid" borderColor="brand.400">{period}</Text>
    <Box>
      <Heading as="h3" size="md">
        {name}{' '}
      </Heading>{' '}
      <Text>{title}</Text>
    </Box>
  </Flex>
);

export interface IHomeEducationProps extends StyleProps {}

export const HomeEducation: FC<IHomeEducationProps> = (props) => {
  return (
    <Container maxW="xl" {...props}>
      <Heading as="h3" size="lg">
        Education <Icon as={IoSchoolOutline} display="inline" verticalAlign="middle" />
      </Heading>

      <VStack mt={5} spacing={3} align="stretch" divider={<StackDivider />}>
        <EducationCard period="2010 - 2012" name="Faculty of Graphic Arts, Zagreb" title="Master of Science in Graphic Technology" />
        <EducationCard period="2007 - 2010" name="University of Applied Sciences, Zagreb" title="Bachelor of Engineering in Information Technology" />
        <EducationCard period="2003 - 2007" name="Electrical Engineering Vocational School, Zagreb" title="Computer engineering technician" />
      </VStack>
    </Container>
  );
};
