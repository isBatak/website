import { NextSeo } from 'next-seo';
import { NextPage } from 'next';

import { Chakra } from 'lib/Chakra';
import { Layout } from 'components/shared/layouts/MainLayout/MainLayout';
import { HomeHeader } from 'components/features/home/home-header/HomeHeader';
import { AnimatedGradient } from 'components/shared/3d/AnimatedGradient';

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <Chakra>
      <Layout background={<AnimatedGradient />}>
        <NextSeo title="Personal Blog" />
        <HomeHeader />
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
