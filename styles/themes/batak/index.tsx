import { extendTheme, ThemeComponents } from '@chakra-ui/react';
import styles from './styles';

import Container from './components/container';
import { typography } from './foundations/typography';
import { colors } from './foundations/colors';
import { layerStyles } from './foundations/layer-styles';
import { semanticTokens } from './foundations/semantic-tokens';

const theme = extendTheme({
  ...typography,
  colors,
  layerStyles,
  semanticTokens,
  components: {
    Container,
  } as ThemeComponents,
  styles,
});

export default theme;
