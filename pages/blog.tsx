import { NextSeo } from 'next-seo';
import { Container, StackDivider, VStack } from '@chakra-ui/react';

import MoreStories from 'components/more-stories';
import { getAllPosts } from 'lib/api';
import Post from 'types/post';
import { Chakra } from 'lib/Chakra';
import Layout from 'components/shared/layouts/main/layout';
import { NextPage } from 'next';
import PostPreview from 'components/post-preview';

type BlogPageProps = {
  allPosts: Post[];
};

const BlogPage: NextPage<BlogPageProps> = ({ allPosts }) => {
  return (
    <Chakra>
      <Layout>
        <NextSeo title="Personal Blog" />
        <Container maxW="2xl" py="5">
          {allPosts.length > 0 && (
            <VStack as="section" align="stretch" spacing={8} py={5} divider={<StackDivider borderColor="gray.200" />}>
              {allPosts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              ))}
            </VStack>
          )}
        </Container>
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

export default BlogPage;
