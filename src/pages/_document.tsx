import { Html, Head, Main, NextScript } from 'next/document';
import type {} from 'next/document';
import config from '@config/config';

const Document: React.FC = () => (
  <Html lang={config.locale.split('_')[0]}>
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                debug: true
              };
            `,
        }}
        data-partytown-config
      />
      {config.googleAnalyticsId ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
      
                  gtag('config', '${config.googleAnalyticsId}', { 
                      page_path: window.location.pathname,
                  });
              `,
          }}
          type="text/partytown"
        />
      ) : null}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
