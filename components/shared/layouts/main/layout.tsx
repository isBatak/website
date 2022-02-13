import { Box, Flex } from '@chakra-ui/react';

import PreviewAlert from 'components/preview-alert';
import Footer from 'components/footer';
import Meta from 'components/meta';
import { Navigation } from 'components/shared/navigations/main/navigation';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <Flex minH="fill-available" direction="column" className="layout">
      <Meta />
      <Navigation />
      <Box as="main" minH="0" flex="1">
        {preview ? <PreviewAlert /> : null}
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
