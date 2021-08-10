import { Box, Flex } from '@chakra-ui/react';

import PreviewAlert from './preview-alert';
import Footer from './footer';
import Meta from './meta';
import Header from './header';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <Flex minH="full" direction="column">
      <Meta />
      <Header />
      <Box minH="0" flex="1">
        {preview ? <PreviewAlert /> : null}
        <main>{children}</main>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
