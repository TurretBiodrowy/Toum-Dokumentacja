// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Town Of Us: Mira',
  tagline: 'Nieoficjalna dokumentacja TOUM',
  favicon: 'img/toumpl.ico',
  
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://turretbiodrowy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Toum-Dokumentacja/',

  // GitHub pages deployment config.
  organizationName: 'TurretBiodrowy', // Usually your GitHub org/user name.
  projectName: 'Toum-Dokumentacja', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        navbar: {
          title: 'Town Of Us: Mira',
          logo: {
            alt: 'TouM Logo',
            src: 'img/ToumPL.png',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'roleSidebar',
              position: 'left',
              label: 'Role',
            },
            {
              type: 'docSidebar',
              sidebarId: 'modyfikatorySidebar',
              position: 'left',
              label: 'Modyfikatory',
            },
            {
              type: 'docSidebar',
              sidebarId: 'ustawieniaSidebar',
              position: 'left',
              label: 'Ustawienia',
            },
            {
              to: '/blog',
              label: 'Aktualizacje',
              position: 'left'
            },
            //{
            //    to: '',
            //  label: 'Instalowanie',
            //  position: 'left'},

            {
              href: 'https://github.com/TurretBiodrowy/Toum-Dokumentacja',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} TurretBiodrowy.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;