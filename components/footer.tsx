import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react';
import { SocialMediaLinks } from './social-media-links';
import { IoHeart } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box as="footer" flex="0" zIndex="1">
      <Container py="5">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text color="gray.500" _dark={{ color: 'gray.200' }} fontSize="sm">
              by{' '}
              <Text
                as="span"
                bgGradient="to-l"
                gradientFrom="#fc4a1a"
                gradientTo="#f7b733"
                bgClip="text"
                color="transparent"
                fontSize="md"
                fontWeight="bold"
              >
                Ivica Batinić
              </Text>{' '}
              with <Icon as={IoHeart} color="brand.600" />
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
