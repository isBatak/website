import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="link" color="gray.600" {...props}>
    <IconButton
      variant="link"
      colorScheme="brand"
      as="a"
      href="https://github.com/isBatak"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      variant="link"
      colorScheme="brand"
      as="a"
      href="https://twitter.com/_isBatak"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
  </ButtonGroup>
);
