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
        outline: {
            level: [2,3] // 全局设置，显示 <h2> 和 <h3> 标题
        },
        nav: [
            {text: '主页', link: '/'},
            {text: '面向过程', link: '/process/hello-world'},
            {text: '面向对象', link: '/object/python-object'},
            {text: '高级特性', link: '/characteristics/advanced-features'},
        ],
        sidebar: {
            '/process/': [
                {
                    text: '面向过程',
                    items: [
                        { text: 'Python 你好世界', link: '/process/hello-world' },
                        { text: 'Python 简介', link: '/process/python-intro' },
                        { text: 'Python 基础语法', link: '/process/python-basic-syntax' },
                        { text: 'Python 基本数据类型', link: '/process/python-data-type' },
                        { text: 'Python 数据类型转换', link: '/process/python-type-conversion' },
                        { text: 'Python 注释', link: '/process/python-comment' },
                        { text: 'Python 运算符', link: '/process/python-basic-operators' },
                        { text: 'Python 数字', link: '/process/python-number' },
                        { text: 'Python 字符串', link: '/process/python-string' },
                        { text: 'Python 列表', link: '/process/python-list' },
                        { text: 'Python 元组', link: '/process/python-tuple' },
                        { text: 'Python 字典', link: '/process/python-dictionary' },
                        { text: 'Python 集合', link: '/process/python-set' },
                        { text: 'Python 条件控制', link: '/process/python-conditional-statements' },
                        { text: 'Python 循环语句', link: '/process/python-loop' },
                        { text: 'Python 函数', link: '/process/python-function' },
                        { text: 'Python 匿名函数', link: '/process/python-lambda' },
                        { text: 'Python 模块', link: '/process/python-module' },
                        { text: 'Python 文件', link: '/process/python-file' },
                        { text: 'Python 错误和异常', link: '/process/python-errors-execptions' },
                        { text: 'Python 标准库', link: '/process/python-stdlib' },
                        { text: 'Python 第三方库', link: '/process/python-third-party-libraries' },
                    ]
                }
            ],
            '/object/': [
                {
                    text: '面向对象',
                    items: [
                        { text: 'Python 面向对象', link: '/object/python-object' },
                        { text: 'Python 类的定义', link: '/object/python-class-definition' },
                        { text: 'Python 类的对象', link: '/object/python-class-object' },
                        { text: 'Python 类的方法', link: '/object/python-methods-of-the-class' },
                        { text: 'Python 类的继承', link: '/object/python-class-inheritance' },
                        { text: 'Python 类的多继承', link: '/object/python-multiple-inheritance-of-classes' },
                        { text: 'Python 类的方法重写', link: '/object/python-method-overrides-of-the-class' },
                        { text: 'Python 类属性与方法', link: '/object/python-class-properties-and-methods' },
                        { text: 'Python 类运算符重载', link: '/object/python-class-operator-overloading' },
                    ]
                }
            ],
            '/characteristics/': [
                {
                    text: '高级特性',
                    items: [
                        { text: 'Python 高级特性', link: '/characteristics/advanced-features' },
                        { text: 'Python 列表推导式', link: '/characteristics/list-derivation' },
                        { text: 'Python 生成器', link: '/characteristics/generator' },
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
