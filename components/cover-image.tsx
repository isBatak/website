import { Box, Image, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug, ...rest }: Props) => {
  const image = (
    <Image src={src} alt={`Cover Image for ${title}`} bg={useColorModeValue('gray.200', 'gray.700')} {...rest} />
  );

  return slug ? (
    <Link href={`/posts/${slug}`} aria-label={title}>
      {image}
    </Link>
  ) : (
    image
  );
};

export default CoverImage;
