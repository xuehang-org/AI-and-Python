import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "AI & Python",
    description: "AI & Python",
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '示例', link: '/markdown-examples'},
            {text: '测试', link: '/test'}
        ],
        sidebar: [
            {
                text: '示例',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://ai-and-python.xuehang.org'},
        ]
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
