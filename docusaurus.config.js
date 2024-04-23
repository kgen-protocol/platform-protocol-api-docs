// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KGeN Economy Protocols',
  tagline:
    'KGeN Economy protocols create a virtuous cycle of adoption for all stakeholders in the KGeN network - the gamer, game developers and the advertiser. Powering the transition to a transparent player centric economy.',
  favicon: 'img/kgen_logo.webp',

  // Set the production url of your site here
  url: 'https://api-docs.indi.gg',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'indi.gg', // Usually your GitHub org/user name.
  projectName: 'api-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: 'apiDocs',
    //     docsPluginId: 'classic',
    //     config: {
    //       petstore: {
    //         // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
    //         specPath: 'examples/petstore.yaml', // Path to designated spec file
    //         outputDir: 'api/petstore', // Output directory for generated .mdx docs
    //         sidebarOptions: {
    //           groupPathsBy: 'tag',
    //         },
    //       },
    //       burgers: {
    //         specPath: 'examples/food/burgers/openapi.yaml',
    //         outputDir: 'api/food/burgers',
    //       },
    //     },
    //   },
    // ],
  ],

  // themes: ['docusaurus-theme-openapi-docs'], // Allows use of @theme/ApiItem and other components

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        // defaultMode: 'light',
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'KGeN',
        logo: {
          alt: 'IndiGG Logo',
          src: 'img/kgen_logo.webp',
        },
        items: [
          {
            to:'docs/Esport Protocol V1/introduction',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://kgen.io',
            label: 'KGeN',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'KGeN Loyalty Protocol',
                to: 'docs/Loyalty Protocol V1/introduction',
              },
              {
                label: 'KGeN ESports Protocol',
                to: 'docs/Esport Protocol V1/introduction',
              },
            ],
          },
          
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/kgen',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/KGeN_IO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'KGeN',
                href: 'https://kgen.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KGeN.io, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      languageTabs: [
        {
          highlight: 'bash',
          language: 'curl',
          logoClass: 'bash',
        },
        {
          highlight: 'python',
          language: 'python',
          logoClass: 'python',
          variant: 'http.client',
        },
        {
          highlight: 'go',
          language: 'go',
          logoClass: 'go',
        },
        {
          highlight: 'javascript',
          language: 'nodejs',
          logoClass: 'nodejs',
          variant: 'axios',
        },
        {
          highlight: 'csharp',
          language: 'csharp',
          logoClass: 'csharp',
          variant: 'httpclient',
        },
        {
          highlight: 'java',
          language: 'java',
          logoClass: 'java',
          variant: 'unirest',
        },
      ],
    }),
};

module.exports = config;
