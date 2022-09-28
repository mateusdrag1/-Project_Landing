import { GlobalStyle } from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { theme } from '@/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
