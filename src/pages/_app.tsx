import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import PageHead from '@components/PageHead';
import GlobalStyle from '@components/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { title, description, thumbnail } = pageProps;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageHead description={description} thumbnail={thumbnail} title={title} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
