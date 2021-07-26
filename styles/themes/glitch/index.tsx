import { extendTheme, ThemeComponents } from '@chakra-ui/react';
import styles from './styles';

import Button from './components/button';

const theme = extendTheme({
  fonts: {
    heading: 'Chakra Petch',
    body: 'Chakra Petch',
  },
  components: {
    Button,
  } as ThemeComponents,
  styles,
});

export default theme;
