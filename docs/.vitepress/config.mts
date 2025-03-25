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
            {text: '面向过程', link: '/process/hello-world'},
            {text: '面向对象', link: '/object/python-object'},
        ],
        sidebar: {
            // 当用户位于 `process` 目录时，会显示此侧边栏
            '/process/': [
                {
                    text: 'process',
                    items: [
                        { text: 'Python 简介', link: '/process/python-intro' },
                        { text: 'Python 基础语法', link: '/process/python-basic-syntax' },
                        { text: 'Python 基本数据类型', link: '/process/python-data-type' }
                    ]
                }
            ],
            // 当用户位于 `config` 目录时，会显示此侧边栏
            '/object/': [
                {
                    text: 'object',
                    items: [
                        { text: 'Python 类定义', link: '/object/python-class-definition' },
                        { text: 'Python 类对象', link: '/object/python-class-object' },
                        { text: 'Python 类的方法', link: '/object/python-methods-of-the-class' }
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
