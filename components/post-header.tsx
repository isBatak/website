import { Avatar, Box, Image } from '@chakra-ui/react';

import DateFormater from './date-formater';
import CoverImage from './cover-image';
import PostTitle from './post-title';
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
      <Image title={title} src={coverImage} w="100%" h="400px" objectFit="cover" />

      <PostTitle>{title}</PostTitle>

      <div>
        <div>
          <Avatar name={author.name} src={author.picture} />
        </div>
        <div>
          <DateFormater dateString={date} />
        </div>
      </div>
    </Box>
  );
};

export default PostHeader;
