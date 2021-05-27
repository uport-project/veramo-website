const version = require('./package.json').version

module.exports = {
  title: 'Performant and modular APIs for Verifiable Data and SSI',
  tagline:
    'Create and manage decentralized identifiers + verifiable credentials without worrying about interop and vendor lock-in.',
  url: 'https://veramo.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'uport-project', // Usually your GitHub org/user name.
  projectName: 'veramo', // Usually your repo name.
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
          to: 'docs/api/core',
          activeBasePath: 'docs',
          label: 'API',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/uport-project/veramo/discussions',
          label: 'Community',
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
              to: 'docs/react_native_tutorials/react_native_setup_identifers',
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
              label: 'GitHub',
              href: 'https://github.com/uport-project/veramo',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/uport-project/veramo/discussions',
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/uport-project/veramo-website/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/uport-project/veramo-website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
