import { Box, type BoxProps, Heading, VStack, StackSeparator } from '@chakra-ui/react';
import { EducationCard } from 'components/features/about/education/Education.elements';

export interface IEducationProps extends BoxProps {}

export const Education = (props: IEducationProps) => {
  return (
    <Box {...props}>
      <Heading as="h3" size="lg">
        Education
      </Heading>

      <VStack mt={5} gap={3} align="stretch" separator={<StackSeparator />}>
        <EducationCard
          period="2010 - 2012"
          name="Faculty of Graphic Arts, Zagreb"
          title="Master of Science in Graphic Technology"
        />
        <EducationCard
          period="2007 - 2010"
          name="University of Applied Sciences, Zagreb"
          title="Bachelor of Engineering in Information Technology"
        />
        <EducationCard
          period="2003 - 2007"
          name="Electrical Engineering Vocational School, Zagreb"
          title="Computer engineering technician"
        />
      </VStack>
    </Box>
  );
};
