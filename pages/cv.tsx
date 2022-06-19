import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Chakra } from 'lib/Chakra';
import { Layout } from 'components/shared/layouts/MainLayout/MainLayout';
import { AboutHeader } from 'components/features/cv/about-header/AboutHeader';
import { AboutContent } from 'components/features/cv/AboutContent';

const CVPage: NextPage = () => {
  return (
    <Chakra>
      <Layout>
        <NextSeo title="About" />
        <AboutHeader />
        <AboutContent />
      </Layout>
    </Chakra>
  );
};

export default CVPage;
