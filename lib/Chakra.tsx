import { ChakraProvider } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';
import { system as batakSystem } from '../themes/batak';
import Fonts from '../themes/batak/Fonts';
import { ThemeProvider } from 'next-themes';

interface ChakraProps {
  cookies?: string;
  children: ReactNode;
}

export const Chakra = ({ children, cookies }: ChakraProps) => {
  return (
    <ChakraProvider value={batakSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Fonts />
        {children}
      </ThemeProvider>
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
