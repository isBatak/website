import { NextSeo } from 'next-seo';
// import { Canvas } from '@react-three/fiber';
import { NextPage } from 'next';
import { Suspense } from 'react';

import { Chakra } from 'lib/Chakra';
import { Layout } from 'components/shared/layouts/MainLayout/MainLayout';
import { HomeHeader } from 'components/features/home/home-header/HomeHeader';
// import { AnimatedGradient } from 'components/shared/3d/AnimatedGradient';

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <Chakra>
      <Layout
      // background={
      //   <Canvas style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      //     <Suspense fallback={null}>{/* <AnimatedGradient /> */}</Suspense>
      //   </Canvas>
      // }
      >
        <NextSeo title="Personal Blog" />
        <HomeHeader />
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
