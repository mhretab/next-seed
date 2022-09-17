import * as React from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import config from '@config/config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render = (): JSX.Element => (
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
}
