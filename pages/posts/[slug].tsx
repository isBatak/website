import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Container, Heading } from '@chakra-ui/react';

import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import { Chakra } from '../../lib/Chakra';
import Seo from 'components/seo';
import { Layout } from 'components/shared/layouts/MainLayout/MainLayout';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Chakra>
      <Layout preview={preview}>
        {router.isFallback ? (
          <Container maxW="740px" pb={32}>
            <Heading textStyle={{ base: '3xl', md: '4xl' }}>Loading…</Heading>
          </Container>
        ) : (
          <Container maxW="740px" py={10}>
            <Seo post={post} />
            <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
            <PostBody content={post.content} />
          </Container>
        )}
      </Layout>
    </Chakra>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
