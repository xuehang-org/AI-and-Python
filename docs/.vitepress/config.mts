import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'zh',
    title: "AI & Python",
    description: "AI & Python",
    head: [
        ['link', { rel: 'icon', href: '/favicon-32x32.png' }]
    ],
    lastUpdated: true,
    themeConfig: {
        logo: '/favicon.ico',
        nav: [
            {text: '主页', link: '/'},
        ],
        sidebar: {
            // 当用户位于 `guide` 目录时，会显示此侧边栏
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Index', link: '/guide/' },
                        { text: 'One', link: '/guide/one' },
                        { text: 'Two', link: '/guide/two' }
                    ]
                }
            ],
            // 当用户位于 `config` 目录时，会显示此侧边栏
            '/config/': [
                {
                    text: 'Config',
                    items: [
                        { text: 'Index', link: '/config/' },
                        { text: 'Three', link: '/config/three' },
                        { text: 'Four', link: '/config/four' }
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/xuehang-org/AI-and-Python'},
            { icon: 'twitter', link: 'https://x.com/xuehang_org' },
        ],
        footer: {
            message: '基于 MIT 许可发布',
            copyright: '版权所有 © 2025 xuehang.org'
        },
        search: {
            provider: 'local'
        },
    },
    markdown: {
        math: true,
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息',
        }
    }
})
