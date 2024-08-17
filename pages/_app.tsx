export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}
import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';
import '../styles/prism.css';

export default function App({ Component, pageProps }: AppRenderProps) {
  return <Component {...pageProps} />;
}
