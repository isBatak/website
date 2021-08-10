import { Box, Button, chakra, useColorModeValue } from '@chakra-ui/react';

import DateFormater from './date-formater';
import Link from 'next/link';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({ title, coverImage, date, slug, excerpt }: Props) => {
  return (
    <Box p={6} mx="auto" rounded="lg" shadow="md" bg={useColorModeValue('white', 'gray.800')} maxW="2xl">
      <chakra.h2
        mb={4}
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="extrabold"
        letterSpacing="tight"
        textAlign={{ base: 'center', md: 'left' }}
        color={useColorModeValue('gray.900', 'gray.400')}
        lineHeight={{ md: 'shorter' }}
        textShadow="2px 0 currentcolor"
      >
        {title}
      </chakra.h2>
      <DateFormater dateString={date} />
      <chakra.p
        mb={5}
        textAlign={{ base: 'center', sm: 'left' }}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={{ md: 'lg' }}
      >
        {excerpt}
      </chakra.p>
      <Link href={`/posts/${slug}`} passHref>
        <Button as="a" w={{ base: 'full', sm: 'auto' }} size="lg">
          Read More
        </Button>
      </Link>
    </Box>
  );
};

export default HeroPost;
