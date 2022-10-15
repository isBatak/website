import Head from 'next/head';
import PostType from 'types/post';
import { format } from 'date-fns';
import { baseURL } from 'constants/env';

const Seo = ({ post }: { post: PostType }) => {
  const createdAt = format(new Date(post.date), 'LLLL dd, yyyy');
  return (
    <Head>
      <title>{post.title} | isBatak</title>
      <meta
        property="og:image"
        content={encodeURI(`${baseURL}/api/og?title=${post.title}&author=${post.author.name}&createdAt=${createdAt}`)}
      />
      <meta name="og:type" content="summary_large_image" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content={post.title} />
    </Head>
  );
};

export default Seo;
