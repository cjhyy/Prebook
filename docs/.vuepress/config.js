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
        ],
        sidebar: [{
                title: '前言',
                children: [
                    '/main/'
                ]
            }, {
                title: 'Javascript',
                children: [
                    '/JavaScript/变量和类型',
                    '/JavaScript/原型和原型链',
                    '/JavaScript/作用域和闭包',
                    '/JavaScript/执行机制',
                    '/JavaScript/语法和API',
                ]
            },
            {
                title: 'Html和Css',
                children: [
                    '/Html/Html',
                    '/Html/CSS',
                    '/Html/handWrite'       
                ]
            },
            {
                title: '微信小程序',
                children: [
                    '/wechat/',
                    '/wechat/小程序checkbox样式的修改',
                    '/wechat/小程序input原有样式改进',
                    '/wechat/小程序picker组件',
                    '/wechat/小程序setData',
                    '/wechat/小程序中checkbox问题',
                    '/wechat/小程序中多个不同时间倒计时实现',
                    '/wechat/小程序中的页面跳转',
                    '/wechat/小程序中的页面间数据传递',
                    '/wechat/小程序列表排序',
                    '/wechat/小程序回到顶部',
                    '/wechat/小程序微信自带卡劵功能',
                    '/wechat/小程序通知滚动小提示',
                    '/wechat/小程序点击样式切换',
                ]
            },
            {
                title: 'TypeScript',
                children: [

                ]
            }
        ]


    }
}