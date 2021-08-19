import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';
import batak from '../styles/themes/batak';
import Fonts from '../styles/themes/batak/Fonts';

interface ChakraProps {
  cookies?: string;
  children: ReactNode;
}

export const Chakra = ({ children, cookies }: ChakraProps) => {
  return (
    <ChakraProvider theme={batak} colorModeManager={cookies ? cookieStorageManager(cookies) : localStorageManager}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>;

export function getServerSideProps({ req }: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
