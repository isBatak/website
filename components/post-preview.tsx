import DateFormater from './date-formater';
import CoverImage from './cover-image';
import NextLink from 'next/link';
import Author from '../types/author';
import { Avatar, Box, Button, chakra, Flex, Link, Image, useColorModeValue, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
  return (
    <Box mx="auto" rounded="lg" shadow="md" bg={useColorModeValue('white', 'gray.800')} maxW="2xl">
      <CoverImage roundedTop="lg" w="full" h={64} fit="cover" slug={slug} title={title} src={coverImage} />

      <Box p={6}>
        <Box>
          <chakra.span fontSize="xs" textTransform="uppercase" color={useColorModeValue('brand.600', 'brand.400')}>
            Blog
          </chakra.span>
          <NextLink as={`/posts/${slug}`} href="/posts/[slug]" passHref>
            <Link
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: 'gray.600', textDecor: 'underline' }}
            >
              {title}
            </Link>
          </NextLink>
          <chakra.p mt={2} fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            {excerpt}
          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              <Avatar size="sm" name={author.name} src={author.picture} />

              <Text mx={2} fontWeight="bold" color={useColorModeValue('gray.700', 'gray.200')}>
                {author.name}
              </Text>
            </Flex>
            <chakra.span mx={1} fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
              <DateFormater dateString={date} />
            </chakra.span>
          </Flex>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormater dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} src={author.picture} />
      <Button>READ</Button>
    </div>
  );
};

export default PostPreview;
