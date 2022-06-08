import { Container, Heading, Icon, StackDivider, VStack } from '@chakra-ui/react';
import { CompanyCard } from 'components/features/home/home-career/HomeCareer.elements';
import { GeneralSecurity } from 'components/shared/svg/GeneralSecurity';
import { Infinum } from 'components/shared/svg/Infinum';
import { Videa } from 'components/shared/svg/Videa';
import { FC } from 'react';
import { BsBriefcase } from 'react-icons/bs';

export interface IHomeEducationProps {}

export const HomeCareer: FC<IHomeEducationProps> = () => {
  return (
    <Container maxW="xl">
      <Heading as="h3" size="lg">
        Career <Icon as={BsBriefcase} display="inline" verticalAlign="middle" />
      </Heading>

      <VStack mt={5} spacing={3} align="stretch" divider={<StackDivider />}>
        <CompanyCard logo={<Infinum />} name="Infinum" position="Lead React Engineer" period="Jun 2015 - present">
          Writing clean and maintainable code improving development processes educating and facilitating the improvement
          of team members’ skills refining new features and sprint planning active, two-way discussion with clients to
          find the best solutions for their products actively participating in all parts of the development process -
          from feature refinement to testing working with SCRUM methodology
        </CompanyCard>
        <CompanyCard
          logo={<Videa />}
          name="Videa d.o.o."
          position="Web Developer / Android & iOS Developer / 3D Designer"
          period="Oct 2012 - Mar 2015"
        >
          Responsible for developing multi-touch supported applications, design of content management systems, 3D
          design, building a platform for ads distribution, development of WordPress themes, designing of advertising
          materials.
        </CompanyCard>
        <CompanyCard
          logo={<GeneralSecurity />}
          name="General Security"
          position="Web Developer / Web Administrator / Designer"
          period="Jun 2011 - Oct 2012"
        >
          Responsible for developing and constructing websites for the company&apos;s clients and in-house activities.
          In charge of designing promotional materials.
        </CompanyCard>
      </VStack>
    </Container>
  );
};
