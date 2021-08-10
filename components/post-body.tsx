import { Box } from '@chakra-ui/react';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <Box mt="10">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default PostBody;
