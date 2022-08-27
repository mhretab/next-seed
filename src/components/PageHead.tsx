import * as React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import config from '@config/config';
import manifest from '@public/manifest.json';

type Props = {
  title?: string;
  description?: string;
  thumbnail?: string;
};

const fonts: string[] = [];

const PageHead: React.FC<Props> = ({ title, description, thumbnail }) => {
  const pageTitle = title
    ? `${title} – ${config.appName}`
    : `${config.appName} – ${config.appTagline}`;

  const pageDescription = description || config.appDescription;

  const iconUrl = '/favicon.png';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta content={pageDescription} name="description" />

        <meta charSet="utf-8" />
        <meta content={config.locale.split('_')[0]} httpEquiv="content-language" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=5" name="viewport" />

        <meta content={config.appName} property="og:site_name" />
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content={config.locale} property="og:locale" />

        {thumbnail && (
          <>
            <meta content={thumbnail} property="og:image" />
            <meta content={thumbnail} name="twitter:image" />
          </>
        )}

        <meta content="summary" name="twitter:card" />
        <meta content={pageTitle} name="twitter:title" />
        <meta content={pageDescription} name="twitter:description" />

        <meta content={manifest.theme_color} name="theme-color" />
        <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
        <meta content={config.appName} name="apple-mobile-web-app-title" />

        {config.googleSiteVerification && typeof config.googleSiteVerification === 'string' ? (
          <meta content={config.googleSiteVerification} name="google-site-verification" />
        ) : null}

        <link href="/manifest.json" rel="manifest" />

        <link href={iconUrl} rel="shortcut icon" type="image/x-icon" />
        <link href={iconUrl} rel="apple-touch-icon" />
        {manifest.display === 'standalone' ? (
          <meta content="yes" name="apple-mobile-web-app-capable" />
        ) : null}

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

        {fonts.map(font => (
          // eslint-disable-next-line react/jsx-key
          <link href={font} rel="stylesheet" />
        ))}
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`}
        strategy="worker"
      />
    </>
  );
};
export default PageHead;
