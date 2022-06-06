import { NextSeo } from 'next-seo';

import { Chakra } from 'lib/Chakra';
import Layout from 'components/shared/layouts/main/layout';
import { NextPage } from 'next';
import { HomeHeader } from 'components/features/home/home-header/HomeHeader';
import { HomeCareer } from 'components/features/home/home-career/HomeCareer';

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <Chakra>
      <Layout>
        <NextSeo title="Personal Blog" />
        <HomeHeader />
        <HomeCareer />
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
