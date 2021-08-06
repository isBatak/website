import { Box } from '@chakra-ui/react';

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
    <>
      <Meta />
      <Header />
      <Box minH="full">
        {preview ? <PreviewAlert /> : null}
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
