import type { AppProps } from 'next/app';
import PageHead from '@components/PageHead';

import '@styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { title, description, thumbnail } = pageProps;
  return (
    <>
      <PageHead description={description} thumbnail={thumbnail} title={title} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
