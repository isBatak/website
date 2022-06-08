import { NextSeo } from 'next-seo';

import { Chakra } from 'lib/Chakra';
import Layout from 'components/shared/layouts/main/layout';
import { NextPage } from 'next';
import { HomeHeader } from 'components/features/home/home-header/HomeHeader';
import { HomeCareer } from 'components/features/home/home-career/HomeCareer';
import { HomeEducation } from 'components/features/home/home-education/HomeEducation';

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <Chakra>
      <Layout>
        <NextSeo title="Personal Blog" />
        <HomeHeader />
        <HomeCareer />
        <HomeEducation mt={10} />
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
