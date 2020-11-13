module.exports = {
  title: 'Veramo',
  tagline: 'A JavaScript Framework for Verifiable Data',
  url: 'https://veramo.herokuapp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'uport-project', // Usually your GitHub org/user name.
  projectName: 'daf', // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: 'Veramo',
      logo: {
        alt: 'My Site Logo',
        src: 'img/veramo.png',
      },
      items: [
        {
          to: 'docs/fundamentals/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'docs/plugins/introduction',
          activeBasePath: 'docs',
          label: 'Plugins',
          position: 'right',
        },
        {
          to: 'docs/api/index',
          activeBasePath: 'docs',
          label: 'API',
          position: 'right',
        },
        {to: 'community', label: 'Community', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/uport-project/daf',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
