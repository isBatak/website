import { Box, Container, Flex, HStack, Select, Text } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.50" borderTop="solid 1px" borderTopColor="gray.200" py="5" color="gray.600">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text>Copyright © 2021. All rights reserved.</Text>
          </Box>
          <Box>
            <HStack>
              <IoLogoGithub />
              <IoLogoTwitter />
            </HStack>
          </Box>
          <Box>
            <Select size="sm">
              <option value="option1">Dark</option>
              <option value="option2">Light</option>
            </Select>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
