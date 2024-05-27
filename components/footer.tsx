import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react';
import { SocialMediaLinks } from './social-media-links';
import { IoHeart } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box as="footer" py="5" flex="0">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text color="gray.500" _dark={{ color: 'gray.200' }} fontSize="sm">
              by{' '}
              <Text as="span" layerStyle="gradientText" fontSize="md" fontWeight="bold">
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
