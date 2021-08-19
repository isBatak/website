import { Box, ChakraComponent } from '@chakra-ui/react';
import { FC } from 'react';

export const IsMelon: FC<ChakraComponent<'div'>> = (props) => {
  return (
    <Box w={400} h={400} position="relative" _hover={{ cursor: 'pointer' }} {...props}>
      <Box
        sx={{
          width: '100%',
          height: '50%',
          backgroundColor: 'red',
          marginTop: '25%',

          border: `40px solid`,
          borderColor: 'green',
          borderBottomLeftRadius: '100% 200%',
          borderBottomRightRadius: '100% 200%',
          borderTop: '0',

          WebkitBoxSizing: 'border-box',
          MozBoxSizing: 'border-box',
          boxSizing: 'border-box',
        }}
      />
      <Box
        sx={{
          width: '5%',
          height: '10%',
          backgroundColor: 'black',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          position: 'absolute',
          top: '40%',
          left: '48%',
          ':before': {
            width: '100%',
            height: '100%',
            content: '""',
            backgroundColor: 'black',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            position: 'absolute',
            top: '-90%',
            left: '-450%',
            transform: 'rotate(45deg)',
          },

          ':after ': {
            width: '100%',
            height: '100%',
            content: '""',
            backgroundColor: 'black',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            position: 'absolute',
            top: '-90%',
            left: '450%',
            transform: 'rotate(-45deg)',
          },
        }}
      />
    </Box>
  );
};
