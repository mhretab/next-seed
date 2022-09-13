import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import PageHead from '@components/PageHead';
import globalStyles from '@components/globalstyles';

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { title, description, thumbnail } = pageProps;
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <PageHead description={description} thumbnail={thumbnail} title={title} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
