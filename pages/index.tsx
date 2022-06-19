import { NextSeo } from 'next-seo';

import { Chakra } from 'lib/Chakra';
import { Layout } from 'components/shared/layouts/MainLayout/MainLayout';
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
