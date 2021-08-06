import { Container, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <Container py="5">
      <Link href="/" passHref>
        <Flex as="a" alignItems="flex-end" sx={{ gap: 10 }}>
          <Image src="/assets/logo.svg" alt="logo" w="50px" s />
          <Heading>isBatak</Heading>
        </Flex>
      </Link>
      <IconButton aria-label="Toggle dark mode" icon={<IoMoonOutline />} />
    </Container>
  );
};

export default Header;
