export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}
import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';
import '../styles/prism.css';

import { GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps }: AppRenderProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-NH6BLTL7X0" />
      <Component {...pageProps} />
    </>
  );
}
