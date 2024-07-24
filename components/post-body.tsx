import { Box } from '@chakra-ui/react';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <Box
      className="prose"
      css={{
        mt: 10,

        '& p, & ul, & ol, & blockquote': {
          my: 6,
        },
        '& h2': {
          fontSize: '3xl',
          mt: 12,
          mb: 4,
        },
        '& h3': {
          fontSize: '2xl',
          mt: 8,
          mb: 4,
        },
        '& p code': {
          bg: 'gray.100',
          p: '2px',
          borderRadius: 3,
          _dark: {
            bg: 'whiteAlpha.400',
          },
        },
        '& pre': {
          p: 5,
          borderRadius: 5,
          bg: 'gray.100',
          overflow: 'auto',
          code: {
            bg: 'none',
          },
          _dark: {
            bg: 'whiteAlpha.400',
          },
        },
        '& ul': {
          pl: 5,
          my: 6,
        },
        '& a': {
          textDecor: 'underline',
          color: 'brand.400',
        },
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default PostBody;
