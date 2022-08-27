import { Html, Head, Main, NextScript } from 'next/document';
import type {} from 'next/document';

const Document: React.FC = () => (
  <Html>
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
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
