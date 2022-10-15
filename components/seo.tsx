import Head from 'next/head';
import PostType from 'types/post';
import { format } from 'date-fns';

const Seo = ({ post }: { post: PostType }) => {
  const baseURL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  const createdAt = format(new Date(post.date), 'LLLL dd, yyyy');
  return (
    <Head>
      <title>{post.title} | isBatak</title>
      <meta
        property="og:image"
        content={encodeURI(`${baseURL}/api/og?title=${post.title}&author=${post.author.name}&createdAt=${createdAt}`)}
      />
    </Head>
  );
};

export default Seo;
