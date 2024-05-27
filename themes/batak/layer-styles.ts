import { defineLayerStyles } from '@chakra-ui/react';

export const layerStyles = defineLayerStyles({
  gradientText: {
    value: {
      backgroundClip: 'text',
      backgroundImage: 'linear-gradient(90deg, #fc4a1a 0%, #f7b733 100%)',
    },
  },
});
