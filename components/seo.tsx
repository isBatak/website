import Head from 'next/head';
import PostType from 'types/post';

const getAbsoluteURL = (path: string) => {
  const baseURL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  return baseURL + path;
};

const Seo = ({ post }: { post: PostType }) => {
  return (
    <Head>
      <title>{post.title} | isBatak</title>
      <meta property="og:image" content={getAbsoluteURL(`/api/si/${post.slug}.jpg`)} />
      <meta property="og:image:secure_url" content={getAbsoluteURL(`/api/si/${post.slug}.jpg`)} />
      <meta name="twitter:image:src" content={getAbsoluteURL(`/api/si/${post.slug}.jpg`)} />
    </Head>
  );
};

export default Seo;
