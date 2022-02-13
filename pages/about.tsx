import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Chakra } from 'lib/Chakra';
import Layout from 'components/shared/layouts/main/layout';
import { AboutHeader } from 'components/features/about/about-header/about-header';
import { AboutContent } from 'components/features/about/about-content';

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
