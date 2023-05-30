import { useState } from 'react';

import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@/styles/globals.css';

import { ThemeProvider } from '@mui/material/styles';

import theme from '@/lib/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { UIProvider } from '@/components/contexts/UI.context';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
            staleTime: 1000 * 10,
            retry: process.env.NODE_ENV === 'production',
            refetchOnWindowFocus: process.env.NODE_ENV === 'production',
          },
        },
      }),
  );
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Hydrate state={pageProps.dehydratedState}>
            <UIProvider>
              <Component {...pageProps} />
            </UIProvider>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
