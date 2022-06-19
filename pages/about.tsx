import { Container } from '@chakra-ui/react';
import { Career } from 'components/features/about/career/Career';
import { Education } from 'components/features/about/education/Education';
import { Layout } from 'components/shared/layouts/MainLayout/MainLayout';
import { Chakra } from 'lib/Chakra';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <Chakra>
      <Layout>
        <Container maxW="3xl" py={{ base: 3, md: 10 }}>
          <Career />
          <Education mt={10} />
        </Container>
      </Layout>
    </Chakra>
  );
};

export default AboutPage;
