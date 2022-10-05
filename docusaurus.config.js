// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const LOGO_IMAGE = 'img/logo.svg';
const GITHUB_BASE_URL = 'https://github.com/kube-green/kube-green.github.io/'
const GITHUB_EDIT_BASE_URL = `${GITHUB_BASE_URL}edit/main/`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kube-green',
  tagline: 'An operator to reduce CO2 footprint of your clusters',
  url: 'https://kube-green.dev',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  organizationName: 'kube-green',
  projectName: 'kube-green.github.io',
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: function({docPath, versionDocsDirPath}) {
            if (docPath.match(/^apireference_[a-zA-Z0-9]+.md$/)) {
              return undefined;
            }
            return `${GITHUB_EDIT_BASE_URL}${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: `${GITHUB_EDIT_BASE_URL}blog/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'kubernetes, green-software, autoscaling, downscale, cloud-native'}],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'img/kube-green-cover.png',
      announcementBar: {
        id: 'support-us',
        content: 'If you like kube-green, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kube-green/kube-green">GitHub</a> ⭐',
      },
      navbar: {
        title: 'kube-green',
        logo: {
          alt: 'kube-green Logo',
          src: LOGO_IMAGE,
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/tutorial', label: 'Tutorial', position: 'left'},
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/kube-green/kube-green',
            position: 'right',
            label: 'GitHub',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'OO5LH8JODS',
        apiKey: '14bdbb6df2e9dae96120ac4f1ec23a92',
        indexName: 'kube-green'
      }
    }),
};

module.exports = config;
