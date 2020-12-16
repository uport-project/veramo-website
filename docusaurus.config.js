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
          to: 'docs/agent/plugins_list',
          activeBasePath: 'docs',
          label: 'Plugins',
          position: 'right',
        },
        {
          to: 'docs/api/daf-core',
          activeBasePath: 'docs',
          label: 'API',
          position: 'right',
        },
        { href: 'https://github.com/uport-project/daf/discussions', label: 'Community', position: 'right' },
        // { to: 'blog', label: 'Blog', position: 'right' },
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
              label: 'Getting Started',
              to: 'docs/fundamentals/introduction',
            },
            {
              label: 'Agent',
              to: 'docs/agent/introduction',
            },
          ],
        },
        {
          title: 'Guides',
          items: [
            {
              label: 'CLI',
              to: 'docs/guides/cli',
            },
            {
              label: 'React Native',
              to: 'docs/guides/react_native',
            },
            {
              label: 'Node',
              to: 'docs/guides/nodejs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/uport-project/daf',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/uport-project/daf/discussions',
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
          editUrl: 'https://github.com/uport-project/daf-website/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/uport-project/daf-website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
