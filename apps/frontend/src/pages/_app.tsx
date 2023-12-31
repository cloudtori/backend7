import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { AppProps } from 'next/app';
import { theme, toastOptions } from '@/utils/chakra';
import { configs } from '@/utils/swr';
import { SWRConfig } from 'swr';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: toastOptions }}
      >
        <SWRConfig value={configs}>
          <Component {...pageProps} />
        </SWRConfig>
      </ChakraProvider>
    </SessionProvider>
  );
}
