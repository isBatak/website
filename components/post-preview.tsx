import DateFormater from './date-formater';
import NextLink from 'next/link';
import Author from '../types/author';
import { Avatar, Box, Button, chakra, Flex, Link, useColorModeValue, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, author, slug, ...rest }: Props) => {
  return (
    <Box {...rest}>
      <Box>
        <NextLink as={`/posts/${slug}`} href="/posts/[slug]" passHref>
          <Link
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
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
            <Avatar size="xs" name={author.name} src={author.picture} />

            <Text mx={2} fontWeight="bold" color={useColorModeValue('gray.700', 'gray.200')}>
              {author.name}
            </Text>
          </Flex>
          <chakra.span mx={1} fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
            <DateFormater dateString={date} />
          </chakra.span>
        </Flex>
      </Box>

      <NextLink href={`/posts/${slug}`} passHref>
        <Button colorScheme="brand" as="a" w={{ base: 'full', sm: 'auto' }} size="md" mt="4">
          Read More
        </Button>
      </NextLink>
    </Box>
  );
};

export default PostPreview;
