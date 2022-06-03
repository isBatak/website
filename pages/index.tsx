import { NextSeo } from 'next-seo';
import { Container } from '@chakra-ui/react';

import Post from 'types/post';
import { Chakra } from 'lib/Chakra';
import Layout from 'components/shared/layouts/main/layout';
import { NextPage } from 'next';

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <Chakra>
      <Layout>
        <NextSeo title="Personal Blog" />
        <Container maxW="2xl" py="5">
          index
        </Container>
      </Layout>
    </Chakra>
  );
};

export default IndexPage;
