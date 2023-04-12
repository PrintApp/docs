import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Print.App Docs',
    description: 'Print.App Documentation Site',
    head: [
        ['link', { rel: "icon", type: "image/x-icon", href: "/favicon.svg"}],
        ['link', { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.svg"}],
        ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"}],
    ],
    lastUpdated: true,
    cleanUrls: true,
    appearance: false,
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
                text: '🚀 Getting started',
                items: [
                    { text: 'What is Print.App', link: '/what-is-printapp' },
                    { text: 'Installation', link: '/installation/index' },
                ],
            },
            {
                text: '📚 Guides',
                items: [
                    { text: 'How to create a design', link: '/guides/create-design' },
                    { text: 'Smart Texts', link: '/guides/smart-texts' },
                    { text: 'Display modes', link: '/guides/display-modes' },
                    { text: 'Colors', link: '/guides/colors' },
                    { text: 'Fonts', link: '/guides/fonts' },
                    { text: 'Graphics', link: '/guides/graphics' },
                ]
            },
            {
                text: '✍️ Solutions',
                items: [
                    { text: 'Stationeries', link: '/solutions/stationeries' },
                    { text: 'Photo Prints', link: '/solutions/photo-prints' },
                    { text: 'Garment prints', link: '/solutions/garment-prints' },
                    { text: 'Large banner prints', link: '/solutions/large-banner-prints' },
                    { text: 'Process printing', link: '/solutions/process-printing' },
                    { text: 'DTF, DTG, Sublimation', link: '/solutions/dtf-dtg-sublimation' },
                    { text: 'Calendars', link: '/solutions/calendars' },
                ]
            },
            {
                text: '🎨 Customization',
                items: [
                    { text: 'Webhooks', link: '/customization/webhooks' },
                    { text: 'Configuration', link: '/customization/configuration' },
                ]
            },
            {
                text: '🛠️ Installation',
                items: [
                    { text: 'Wordpress', link: '/installation/wordpress' },
                    { text: 'Opencart', link: '/installation/opencart' },
                    { text: 'Prestashop', link: '/installation/prestashop' },
                    { text: 'Shopify', link: '/installation/shopify' },
                    { text: 'Etsy', link: '/installation/etsy' },
                    { text: 'Squarespace', link: '/installation/squarespace' },
                    { text: 'BigCommerce', link: '/installation/bigcommerce' },
                    { text: 'Wix', link: '/installation/wix' },
                    { text: 'Custom installation', link: '/installation/custom-installation' },
                ]
            },
            {
                text: '🎁 Modules',
                items: [
                    { text: 'Calendars', link: '/modules/calendars' },
                    { text: 'Canvas Resize', link: '/modules/canvas-resize' },
                    { text: 'Page Selector', link: '/modules/page-selector' },
                    { text: 'Product Colors', link: '/modules/product-colors' },
                    { text: 'Variable Data', link: '/modules/variable-data' },
                ]
            }
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
