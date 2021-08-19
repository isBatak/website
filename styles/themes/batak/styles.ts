import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => ({
    'body, html': {
      h: '100%',
    },
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', '#010101')(props),
      transitionProperty: 'background-color',
      transitionDuration: 'normal',
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    '#__next': {
      h: '100%',
    },
    '.markdown': {
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
        bg: mode('gray.100', 'whiteAlpha.400')(props),
        p: '2px',
        borderRadius: 3,
      },
      pre: {
        p: 5,
        borderRadius: 5,
        bg: mode('gray.100', 'whiteAlpha.400')(props),
        overflow: 'auto',
        code: {
          bg: 'none',
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
  }),
};

export default styles;
