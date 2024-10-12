import { Box, Flex } from '@chakra-ui/react';

import PreviewAlert from 'components/preview-alert';
import Footer from 'components/footer';
import Meta from 'components/meta';
import { Navigation } from 'components/shared/navigations/main/navigation';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  background?: React.ReactNode;
};

export const Layout = ({ preview, children, background }: Props) => {
  return (
    <Flex minH="100dvh" direction="column" className="layout">
      <Meta />
      {background}
      <Navigation />
      <Box as="main" minH="0" flex="1" zIndex="1">
        {preview ? <PreviewAlert /> : null}
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};
