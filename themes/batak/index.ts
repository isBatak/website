import { createSystem, defaultConfig, mergeConfigs } from '@chakra-ui/react';
import { globalCss } from './global-css';

import { fonts } from './tokens/fonts';
import { recipes } from './recipes';
import { layerStyles } from './layer-styles';

const config = mergeConfigs(defaultConfig, {
  globalCss: globalCss,
  theme: {
    recipes,
    layerStyles,
    tokens: {
      fonts,
    },
  },
});

export const system = createSystem(config);
