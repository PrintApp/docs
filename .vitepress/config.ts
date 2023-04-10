import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Print.App Docs',
    description: 'Print.App Documentation Site',
    themeConfig: {
        siteTitle: '',
        logo: {
            light: '/assets/logo.svg',
            dark: '/assets/logo-white.svg',
            alt: 'Print.App Logo'
        },
        nav: [
            { text: 'Roadmap', link: 'https://roadmap.print.app' },
            { text: 'Dashboard', link: 'https://admin.print.app' },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/printapp' },
            { icon: 'instagram', link: 'https://instagram.com/prin_dot_app' },
        ],
        footer: {
            copyright: 'Copyright © 2023 Print.App'
        },
        lastUpdatedText: 'Last updated '
    },
});
