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
            { text: '面试', link: 'https://cjhyy.github.io/InterView/'},
            {
                text: '算法',
                items: [
                    // { text: '算法与数据结构', link: 'https://github.com/cjhyy' },
                    { text: 'leetcode题解', link: 'https://cjhyy.github.io/myleetcode/' }
                ]
            },

            // {
            //     text: '学习笔记',
            //     items: [
            //         { text: '数学', link: 'https://github.com/cjhyy' },
            //         {
            //             text: '计算机',
            //             link: 'https://github.com/cjhyy'
            //         },
            //         {
            //             text: '英语',
            //             link: 'https://github.com/cjhyy'
            //         },
            //         {
            //             text: '日语',
            //             link: 'https://github.com/cjhyy'
            //         },
            //         {
            //             text: '其他',
            //             link: 'https://github.com/cjhyy'
            //         },
            //     ]
            // },
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
                title: '计算机基础',
                children: [
                    '/cs/编译原理',
                    '/cs/设计模式',
                    '/cs/网络协议'       
                ]
            },
            {
                title: '数据结构与算法',
                children: [
                    '/Algorithms/手动实现前端轮子',
                    '/Algorithms/数据结构',
                    '/Algorithms/算法',
                    '/Algorithms/JavaScript编码能力'
                ]
            },
            {
                title: '运行环境',
                children: [
                     '/enviroment/浏览器原理',
                     '/enviroment/浏览器API',                
                     '/enviroment/Node'
                    ]
                                },
            {
                title: '框架和类库',
                children: [
                '/libary/TypeScript',
                '/libary/React',
                '/libary/Vue',
                '/libary/多端开发',
                '/libary/数据流管理',
                '/libary/实用库',
                '/libary/开发和调试'                
                ]
            },
            {
                title: '前端工程',
                children: [
                '/Engineering/项目构建',
                '/Engineering/nginx',
                '/Engineering/开发提速',
                '/Engineering/版本控制',
                '/Engineering/持续集成'             
                ]
            },
            {
                title: '项目和业务',
                children:[
                '/optimization/前端安全',
                '/optimization/性能优化'
                ]
            }
        ]


    }
}