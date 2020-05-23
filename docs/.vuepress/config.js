module.exports = {
    title: '桌面运维管理指南',
    description: '如题所述，常见OA办公桌面环境故障解答',
    base: '/helpdesk-manual/', //项目文件夹设置目录
    plugins: [
      // https://vuepress.github.io/zh/plugins 插件下载
      ['@vuepress/plugin-back-to-top'],//安装不了插件,建议非全局安装vue      
      ['@vuepress/google-analytics',
      {
        'ga': 'UA-157837686-3' // UA-00000000-0
      }],
      ['copyright', {
        noSelect: false,
        authorName:{
          "zh-CN": "hoochanlon",
          "en-US": "hoochanlon"
        }
      }]
    ],
    themeConfig: {
      repo: 'https://github.com/hoochanlon/helpdesk-manual/',
      nav: [{ text: '跳转首页', link: '/' }],
      algolia: {
        apiKey: 'cb720d4380fe1a8f6fc0caeaccf225dc',
        indexName: 'hoochanlon_helpdesk'
      },
        sidebar: [
            {
                title: 'OA业务综合运营',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/oa-fault/oa','B/S端OA办公业务维护'],
                  ['/net-debug/net','OA办公网络接入层运营'],
                  ['/script/bat.md','Batch批量可并发业务编程']
                ]
              },
              {
                title: '软硬件基础维护',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/hard-bearkdown/hard','硬件设备调试处理'],
                  ['/sysdm-reset/cz.md','系统及主机装载'],
                  ['/software-issue/other','各类软件异常解决'],
                  ['notice/support','如何优化桌面维护工作？']
                ]
              },            
              {
                title: '程序及设备管理',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/star/centre','程序采集与资产管理'],

                ]
              },
              {
                title: '信息安全防治',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/secure/trojan','病毒防范及处理方案']
                ]
              },
              {
                title: '特别篇：社会工程',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['notice/interview','人力资源与面试者'],
                  ['notice/ti-analysis','培训机构分析报告'],
                  ['notice/law-sug','解构非规范型服务企业'],
                  ['/talk/3','客户、外包、驻场'],
                  ['notice/zufang-note','社会租房记录']
                ]
              },
              {
                title: '致谢',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['thanks','感谢有你们在！']]
              }
            ]
          }
  }