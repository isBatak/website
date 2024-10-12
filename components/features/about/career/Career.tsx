import { Box, Flex, Heading, StackSeparator, type BoxProps, VStack } from '@chakra-ui/react';
import { CompanyCard } from 'components/features/about/career/Career.elements';
import { GeneralSecurity } from 'components/shared/svg/GeneralSecurity';
import { Infinum } from 'components/shared/svg/Infinum';
import { MochaLabs } from 'components/shared/svg/MochaLabs';
import { Videa } from 'components/shared/svg/Videa';

export interface ICareerProps extends BoxProps {}

export const Career = (props: ICareerProps) => {
  return (
    <Box {...props}>
      <Heading as="h3" textStyle={{ base: '2xl', md: '3xl' }}>
        Career
      </Heading>

      <VStack mt={5} gap={3} align="stretch" separator={<StackSeparator />}>
        <CompanyCard
          logo={
            <Flex aspectRatio="120/80" p="2">
              <MochaLabs w="full" mt="-2" />
            </Flex>
          }
          name="Infinum"
          position="Senior React Engineer"
          period="Aug 2023 - present"
        >
          Writing clean, maintainable code and enhancing development processes. Working on a product, implementing
          critical features. Conducting code reviews and working with real-time data.
        </CompanyCard>
        <CompanyCard
          logo={<Infinum css={{ aspectRatio: '120/80' }} preserveAspectRatio="xMaxYMid slice" />}
          name="Infinum"
          position="Lead React Engineer"
          period="Jun 2015 - Aug 2023"
        >
          Writing clean and maintainable code improving development processes educating and facilitating the improvement
          of team members’ skills refining new features and sprint planning active, two-way discussion with clients to
          find the best solutions for their products actively participating in all parts of the development process -
          from feature refinement to testing working with SCRUM methodology.
        </CompanyCard>
        <CompanyCard
          logo={<Videa css={{ aspectRatio: '120/80' }} />}
          name="Videa d.o.o."
          position="Web Developer / Android & iOS Developer / 3D Designer"
          period="Oct 2012 - Mar 2015"
        >
          Responsible for developing multi-touch supported applications, design of content management systems, 3D
          design, building a platform for ads distribution, development of WordPress themes, designing of advertising
          materials.
        </CompanyCard>
        <CompanyCard
          logo={<GeneralSecurity css={{ aspectRatio: '120/80' }} />}
          name="General Security"
          position="Web Developer / Web Administrator / Designer"
          period="Jun 2011 - Oct 2012"
        >
          Responsible for developing and constructing websites for the company&apos;s clients and in-house activities.
          In charge of designing promotional materials.
        </CompanyCard>
      </VStack>
    </Box>
  );
};
