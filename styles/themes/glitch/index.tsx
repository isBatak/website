import { extendTheme, ThemeComponents } from '@chakra-ui/react';
import styles from './styles';

import Button from './components/button';
import Container from './components/container';

const theme = extendTheme({
  fonts: {
    heading:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    body:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  components: {
    Button,
    Container,
  } as ThemeComponents,
  styles,
});

export default theme;
