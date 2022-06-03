import DateFormater from './date-formater';
import NextLink from 'next/link';
import Author from '../types/author';
import { Avatar, Box, Button, chakra, Flex, useColorModeValue, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, author, slug, ...rest }: Props) => {
  return (
    <LinkBox {...rest}>
      <Box>
        <NextLink href={`/posts/${slug}`} passHref>
          <LinkOverlay
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
            _hover={{ color: 'gray.600', textDecor: 'underline' }}
          >
            {title}
          </LinkOverlay>
        </NextLink>

        <chakra.p mt={2} fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
          {excerpt}
        </chakra.p>
      </Box>

      <Flex mt={4} justify="space-between" gap={4} direction={{ base: 'column', sm: 'row' }}>
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

        <NextLink href={`/posts/${slug}`} passHref>
          <Button
            variant={'solid'}
            size={{ base: 'md', sm: 'sm' }}
            colorScheme="brand"
            w={{ base: 'full', sm: 'auto' }}
            as="a"
          >
            Read More
            <Text as="span" ml="1" display={{ base: 'none', sm: 'unset' }}>
              &gt;
            </Text>
          </Button>
        </NextLink>
      </Flex>
    </LinkBox>
  );
};

export default PostPreview;
