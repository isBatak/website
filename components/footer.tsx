import { Box, Container, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { SocialMediaLinks } from './social-media-links';
import { IoHeart } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box as="footer" py="5">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text color={useColorModeValue('gray.500', 'gray.200')} fontSize="sm">
              by{' '}
              <Text as="span" bgGradient="linear(to-l, #fc4a1a,#f7b733)" bgClip="text" fontSize="md" fontWeight="bold">
                Ivica Batinić
              </Text>{' '}
              with <Icon as={IoHeart} color="brand.400" />
            </Text>
          </Box>
          <Box>
            <SocialMediaLinks />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
