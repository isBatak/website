import PostPreview from './post-preview';
import Post from '../types/post';
import { VStack } from '@chakra-ui/react';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <VStack as="section" align="stretch" spacing={8} py={5}>
      {posts.map((post) => (
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
  );
};

export default MoreStories;
