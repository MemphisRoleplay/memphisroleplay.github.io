// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Memphis Roleplay',
  tagline: 'Roleplay focado em criar experiências enriquecedoras para jogadores de Grand Theft Auto V.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://memphisroleplay.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MemphisRoleplay', // Usually your GitHub org/user name.
  projectName: 'MemphisRoleplay.github.io', // Usually your repo name.
  deploymentBranch: 'deploy',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: 'https://github.com/MemphisRoleplay/memphisroleplay.github.io/tree/main/',
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/MemphisRoleplay/memphisroleplay.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-rules',
        path: 'docs-rules',
        routeBasePath: 'regras',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/memphis-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Memphis Roleplay',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            to: '/regras',
            label: 'Regras',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/memphisroleplay',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Introdução',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/q3g4wPfDAU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MemphisRoleplay',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/MemphisRoleplay',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/memphisroleplay',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Memphis Roleplay.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
