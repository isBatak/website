import { Avatar, Box, chakra, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';

import DateFormater from './date-formater';
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
      <Heading>{title}</Heading>

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

      <Image title={title} src={coverImage} w="100%" borderRadius="xl" alt={title} mt="5" />
    </Box>
  );
};

export default PostHeader;
