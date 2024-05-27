import { defineGlobalStyles } from '@chakra-ui/react';

export const globalCss = defineGlobalStyles({
  'body, html': {
    h: '100%',
  },
  '#__next': {
    h: '100%',
  },
  '.markdown': {
    // @ts-ignore
    'p, ul, ol, blockquote': {
      my: 6,
    },
    h2: {
      fontSize: '3xl',
      mt: 12,
      mb: 4,
    },
    h3: {
      fontSize: '2xl',
      mt: 8,
      mb: 4,
    },
    code: {
      bg: 'gray.100',
      p: '2px',
      borderRadius: 3,
      _dark: {
        bg: 'whiteAlpha.400',
      },
    },
    pre: {
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
    ul: {
      pl: 5,
    },
    a: {
      textDecor: 'underline',
      color: 'brand.400',
    },
  },
});
