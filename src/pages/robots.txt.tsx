import type { NextPageContext } from 'next';
import config from '@config/config';

const robotsTxt = `# robotstxt.org

User-agent: *

Sitemap: ${config.appUrl}sitemap.xml`;

const RobotsTxt = (): string => '';

RobotsTxt.getInitialProps = async ({ res }: NextPageContext): Promise<{}> => {
  if (res?.write) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(robotsTxt);
    res.end();
  }
  return {};
};

export default RobotsTxt;
