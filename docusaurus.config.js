const version = require('./package.json').version

// @ts-check

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Performant and modular APIs for Verifiable Data and SSI',
  tagline:
    'Create and manage decentralized identifiers + verifiable credentials without worrying about interop and vendor lock-in.',
  url: 'https://veramo.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'uport-project', // Usually your GitHub org/username.
  projectName: 'veramo', // Usually your repo name.
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Veramo ' + '(v' + version + ')',
      logo: {
        alt: 'Veramo Logo',
        src: 'img/veramo.png',
      },
      items: [
        {
          to: 'docs/basics/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        // {
        //   to: 'developer_tools',
        //   activeBasePath: '/',
        //   label: 'Tools',
        //   position: 'right',
        // },
        {
          to: 'docs/veramo_agent/plugins',
          activeBasePath: 'docs',
          label: 'Plugins',
          position: 'right',
        },
        {
          to: 'docs/api',
          activeBasePath: 'docs',
          label: 'API',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://discord.gg/FRRBdjemHV',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/uport-project/veramo/discussions',
          label: 'Discussions',
          position: 'right',
        },
        {
          href: 'https://github.com/uport-project/veramo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/basics/introduction',
            },
            {
              label: 'Agent',
              to: 'docs/veramo_agent/introduction',
            },
          ],
        },
        {
          title: 'Tutorials',
          items: [
            {
              label: 'Node',
              to: 'docs/node_tutorials/node_setup_identifiers',
            },
            {
              label: 'React',
              to: 'docs/react_tutorials/react_setup_resolver',
            },
            {
              label: 'React Native',
              to: 'docs/react_native_tutorials/react_native_1_setup_identifiers',
            },
          ],
        },
        // {
        //   title: 'Developer Tools',
        //   items: [
        //     {
        //       label: 'CLI',
        //       to: 'docs/dev_tools/cli',
        //     },
        //     {
        //       label: 'NFT DevKit',
        //       to: 'docs/dev_tools/nft_devkit',
        //     },
        //     {
        //       label: 'DApp DevKit',
        //       to: 'docs/dev_tools/dapp_devkit',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/FRRBdjemHV',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/veramolabs',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/uport-project/veramo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Veramo`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/uport-project/veramo-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/uport-project/veramo-website/edit/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Veramo`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
