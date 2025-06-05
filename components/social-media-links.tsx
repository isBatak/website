import { Group, IconButton } from '@chakra-ui/react';
import { ComponentProps } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export const SocialMediaLinks = (props: ComponentProps<typeof Group>) => (
  <Group color="gray.600" {...props}>
    <IconButton variant="ghost" colorPalette="brand" asChild>
      <a href="https://github.com/isBatak" aria-label="GitHub">
        <FaGithub fontSize="20px" />
      </a>
    </IconButton>
    <IconButton variant="ghost" colorPalette="brand">
      <a href="https://twitter.com/_isBatak" aria-label="Twitter">
        <FaTwitter fontSize="20px" />
      </a>
    </IconButton>
  </Group>
);
