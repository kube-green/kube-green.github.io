// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const LOGO_IMAGE = 'img/logo.png';
const BASE_URL = 'https://github.com/kube-green/kube-green.github.io/edit/main/website/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kube-green',
  tagline: 'Make your Kubernetes clusters more green',
  url: 'https://kube-green.github.io',
  baseUrl: '/',
  favicon: LOGO_IMAGE,
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
          // Please change this to your repo.
          editUrl: `${BASE_URL}edit/main/docs/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `${BASE_URL}edit/main/blog/`,
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: LOGO_IMAGE,
      announcementBar: {
        id: 'support-us',
        content: 'If you like kube-green, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kube-green/kube-green">GitHub</a> ⭐',
      },
      navbar: {
        title: 'kube-green',
        logo: {
          alt: 'kube-green Logo',
          src: LOGO_IMAGE,
          srcDark: 'img/logo-dark.png',
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
    }),
};

module.exports = config;
