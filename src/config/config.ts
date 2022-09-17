/* eslint-disable @typescript-eslint/no-var-requires */
const manifest = require('public/manifest.json');
const appPackage = require('../../package.json');

const { name, description } = manifest;
const { name: appSlug, version } = appPackage;
const serverPort = process.env.PORT || 3000;

const completeConfig = {
  default: {
    appDescription: `${name} – ${description}`,
    appName: name,
    appSlug,
    appTagline: description,
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
    appVersion: version,
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false,
    locale: 'en_US',
    serverPort,
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`,
    googleAnalyticsId: null,
  },

  production: {},
  test: {},
};

const config = {
  ...completeConfig.default,
  ...completeConfig[process.env.NODE_ENV],
};

export default config;
