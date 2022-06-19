import { Box, Heading, Icon, StackDivider, StyleProps, VStack } from '@chakra-ui/react';
import { EducationCard } from 'components/features/about/education/Education.elements';
import { FC } from 'react';
import { IoSchoolOutline } from 'react-icons/io5';

export interface IEducationProps extends StyleProps {}

export const Education: FC<IEducationProps> = (props) => {
  return (
    <Box {...props}>
      <Heading as="h3" size="lg">
        Education
        {/* <Icon as={IoSchoolOutline} display="inline" verticalAlign="middle" /> */}
      </Heading>

      <VStack mt={5} spacing={3} align="stretch" divider={<StackDivider />}>
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
