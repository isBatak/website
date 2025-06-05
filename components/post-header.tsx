import { Avatar, Box, chakra, Flex, Heading, Image, Text } from '@chakra-ui/react';

import DateFormatter from './date-formatter';
import Author from '../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <Box>
      <Heading textStyle={{ base: '3xl', md: '4xl' }}>{title}</Heading>

      <Flex alignItems="center">
        <Flex alignItems="center">
          <Avatar.Root size="xs">
            <Avatar.Image src={author.picture} />
            <Avatar.Fallback name={author.name} />
          </Avatar.Root>

          <Text mx={2} fontWeight="bold" color="gray.700" _dark={{ color: 'gray.200' }}>
            {author.name}
          </Text>
        </Flex>
        <chakra.span mx={1} fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }}>
          <DateFormatter dateString={date} />
        </chakra.span>
      </Flex>

      <Image title={title} src={coverImage} w="100%" borderRadius="xl" alt={title} mt="5" />
    </Box>
  );
};

export default PostHeader;
