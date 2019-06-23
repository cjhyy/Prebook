module.exports = {
    title: '前端',
    description: '春江花月夜的前端仓库',
    base: '/Prebook/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {

        lastUpdated: '最后更新时间',
        // 2.设置true，开启最后更新时间
        lastUpdated: true,
        nav: [
            { text: '前端', link: '/' },
            {
                text: '算法',
                items: [
                    { text: '算法与数据结构', link: 'https://github.com/cjhyy' },
                    { text: 'leetcode题解', link: 'https://cjhyy.github.io/myleetcode/' }
                ]
            },

            {
                text: '学习笔记',
                items: [
                    { text: '数学', link: 'https://github.com/cjhyy' },
                    {
                        text: '计算机',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '英语',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '日语',
                        link: 'https://github.com/cjhyy'
                    },
                    {
                        text: '其他',
                        link: 'https://github.com/cjhyy'
                    },
                ]
            },
            { text: 'Github', link: 'https://github.com/cjhyy' },
        ]


    }
}