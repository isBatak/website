import { extendTheme, ThemeComponents } from '@chakra-ui/react';
import styles from './styles';

import Container from './components/container';
import { typography } from './foundations/typography';
import { colors } from './foundations/colors';
import { layerStyles } from './foundations/layer-styles';

const theme = extendTheme({
  ...typography,
  colors,
  layerStyles,
  components: {
    Container,
  } as ThemeComponents,
  styles,
});

export default theme;
