import { Container, Heading, StackDivider, VStack } from '@chakra-ui/react';
import { CompanyCard } from 'components/features/home/home-career/HomeCareer.elements';
import NextImage from 'next/image';
import { FC } from 'react';

export interface IHomeEducationProps {}

export const HomeCareer: FC<IHomeEducationProps> = () => {
  return (
    <Container maxW="xl">
      <Heading as="h3" size="md">
        Career
      </Heading>

      <VStack spacing={2} align="stretch" divider={<StackDivider />}>
        <CompanyCard
          logo="/assets/career/infinum.png"
          name="Infinum"
          position="Lead React Engineer"
          description={`
          writing clean and maintainable code
improving development processes
educating and facilitating the improvement of team members’ skills
refining new features and sprint planning
active, two-way discussion with clients to find the best solutions for their products
actively participating in all parts of the development process - from feature refinement to testing
working with SCRUM methodology`}
          period="Jun 2015 - present"
        />
        <CompanyCard
          logo="/assets/career/videa.png"
          name=""
          position="Web Developer / Android & iOS Developer / 3D Designer"
          description={`Responsible for developing multi-touch supported applications, design of content management systems, 3D design, building a platform for ads distribution, development of WordPress themes, designing of advertising materials.`}
          period="Oct 2012 - Mar 2015"
        />
        <CompanyCard
          logo="/assets/career/geenral-security.jpeg"
          name="General Security"
          position="Web Developer / Web Administrator / Designer"
          description={`Responsible for developing and constructing websites for the company's clients and in-house activities. In
              charge of designing promotional materials.`}
          period="Jun 2011 - Oct 2012"
        />
      </VStack>
    </Container>
  );
};
