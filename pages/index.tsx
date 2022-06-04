import { NextSeo } from 'next-seo';

import { Chakra } from 'lib/Chakra';
import Layout from 'components/shared/layouts/main/layout';
import { NextPage } from 'next';
import { HomeHeader } from 'components/features/home/home-header/HomeHeader';

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <Chakra>
      <Layout>
        <NextSeo title="Personal Blog" />
        <HomeHeader />
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
