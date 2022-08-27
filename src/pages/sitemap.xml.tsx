import { NextPageContext } from 'next';
import config from '@config/config';

const createSitemap = (pagePaths: string[]): string => {
  const newDate = new Date();
  const date = `${newDate.getFullYear()}-${('0' + (newDate.getMonth() + 1)).slice(-2)}-${(
    '0' + newDate.getDate()
  ).slice(-2)}`;

  const urlset = pagePaths.map(
    path => `
      <url>
        <loc>
          ${config.appUrl}
          ${path.substr(1)}
        </loc>
        <lastmod>${date}</lastmod>
      </url>
    `,
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlset}
    </urlset>`;
};

const getPagePaths = (): string[] => ['/'];

const Sitemap = (): string => '';

export async function getServerSideProps({ res }: NextPageContext): Promise<{ props: {} }> {
  if (res?.write) {
    const pagePaths = getPagePaths();
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(pagePaths));
    res.end();
  }
  return { props: {} };
}

export default Sitemap;
