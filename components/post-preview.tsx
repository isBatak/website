import DateFormatter from './date-formatter';
import NextLink from 'next/link';
import Author from '../types/author';
import { Avatar, Box, Button, chakra, Flex, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

type PostPreviewProps = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, author, slug, ...rest }: PostPreviewProps) => {
  return (
    <LinkBox {...rest}>
      <Box>
        <LinkOverlay
          display="block"
          color="gray.800"
          _dark={{
            color: 'white',
          }}
          fontWeight="bold"
          fontSize="2xl"
          _hover={{ color: 'gray.600', textDecor: 'underline' }}
          asChild
        >
          <NextLink href={`/posts/${slug}`}>{title}</NextLink>
        </LinkOverlay>

        <chakra.p
          mt={2}
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: 'gray.400',
          }}
        >
          {excerpt}
        </chakra.p>
      </Box>

      <Flex mt={4} justify="space-between" gap={4} direction={{ base: 'column', sm: 'row' }}>
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Avatar.Root size="xs">
              <Avatar.Image src={author.picture} />
              <Avatar.Fallback name={author.name} />
            </Avatar.Root>

            <Text
              mx={2}
              fontWeight="bold"
              color="gray.700"
              _dark={{
                color: 'gray.200',
              }}
            >
              {author.name}
            </Text>
          </Flex>
          <chakra.span
            mx={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: 'gray.300',
            }}
          >
            <DateFormatter dateString={date} />
          </chakra.span>
        </Flex>

        <Button
          variant={'solid'}
          size={{ base: 'md', sm: 'sm' }}
          colorPalette="brand"
          w={{ base: 'full', sm: 'auto' }}
          asChild
        >
          <NextLink href={`/posts/${slug}`}>
            Read More
            <Text as="span" ml="1" display={{ base: 'none', sm: 'unset' }}>
              &gt;
            </Text>
          </NextLink>
        </Button>
      </Flex>
    </LinkBox>
  );
};

export default PostPreview;
