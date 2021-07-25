import { extendTheme, ThemeComponents } from '@chakra-ui/react';

import Button from './components/button';

const theme = extendTheme({
  fonts: {
    heading: 'Chakra Petch',
    body: 'Chakra Petch',
  },
  components: {
    Button,
  } as ThemeComponents,
});

export default theme;
