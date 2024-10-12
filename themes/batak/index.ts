import { createSystem, defaultConfig, defineConfig, mergeConfigs } from '@chakra-ui/react';
import { globalCss } from './global-css';

import { colors } from './tokens/colors';
import { fonts } from './tokens/fonts';
import { recipes } from './recipes';
import { layerStyles } from './layer-styles';

const config = defineConfig({
  globalCss: globalCss,
  theme: {
    recipes,
    layerStyles,
    tokens: {
      colors,
      fonts,
    },
  },
});

export const system = createSystem(defaultConfig, config);
