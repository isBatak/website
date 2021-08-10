import { NextSeo } from 'next-seo';
import { Container } from '@chakra-ui/react';

import MoreStories from '../components/more-stories';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import { Chakra } from '../lib/Chakra';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Chakra>
      <Layout>
        <NextSeo title="Personal Blog" />
        <Container maxW="2xl">{allPosts.length > 0 && <MoreStories posts={allPosts} />}</Container>
      </Layout>
    </Chakra>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};

export default Index;
