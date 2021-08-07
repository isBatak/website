import { Avatar, Box, Button, chakra, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

import DateFormater from './date-formater';
import CoverImage from './cover-image';
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
    <SimpleGrid
      alignItems="start"
      columns={{ base: 1, md: 2 }}
      mb={24}
      spacingY={{ base: 10, md: 32 }}
      spacingX={{ base: 10, md: 24 }}
    >
      <Box>
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
        <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
          <Button as="a" w={{ base: 'full', sm: 'auto' }} size="lg">
            Read More
          </Button>
        </Link>
      </Box>
      <CoverImage title={title} src={coverImage} slug={slug} />
    </SimpleGrid>
  );
};

export default HeroPost;
