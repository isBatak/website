import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      ghost: {
        color: { base: 'colorPalette.600', _dark: 'colorPalette.400' },
        _hover: {
          bg: { base: 'colorPalette.100', _dark: 'colorPalette.400/10' },
        },
        _expanded: {
          bg: { base: 'colorPalette.100', _dark: 'colorPalette.400/10' },
        },
        _active: {
          bg: { base: 'colorPalette.200', _dark: 'colorPalette.400/20' },
        },
      },
    },
  },
});
