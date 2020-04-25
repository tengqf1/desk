module.exports = {
    title: '桌面运维管理指南',
    description: '如题所述，常见OA办公桌面环境故障解答',
    base: '/helpdesk-manual/', //项目文件夹设置目录
    plugins: [
      // https://vuepress.github.io/zh/plugins 插件下载
      ['@vuepress/plugin-back-to-top'],//安装不了插件,建议非全局安装vue
      ['copyright', {
        noSelect: true,
        authorName:{
          "zh-CN": "hoochanlon"
        }
      }]
    ],
    themeConfig: {
      repo: 'https://github.com/hoochanlon/helpdesk-manual/',
      nav: [{ text: '跳转首页', link: '/' }],
      algolia: {
        apiKey: '23DA271QW6',
        indexName: 'helpdesk_manual'
      },
        sidebar: [
            {
                title: 'OA办公',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/oa-fault/oa','OA办公故障问题']]
              },
              {
                title: 'OA网络',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/net-debug/net','OA网络环境维护']]
              },
              {
                title: '软件故障',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/software-issue/other','办公软件使用异常']]
              },
              {
                title: '办公硬件',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/hard-bearkdown/hard','硬件调试处理']]
              },
              {
                title: '系统重装',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/sysdm-reset/cz.md','重装系统概要']]
              },
              {
                title: '安全防护',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/secure/trojan','病毒防范处理']]
              },
              {
                title: '资产管理',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/means/zichang','资产管理技巧']]
              },
              {
                title: '协商沟通',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['/talk/3','客户、外包、驻场']]
              },
              {
                title: '注意事项',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['notice/support','维护细节注意说明'],
                  ['notice/law-sug','外包涉及到的法律知识']
                ]
              },
              {
                title: '特别篇：社会工程',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['notice/interview','人力资源与面试者'],
                  ['notice/ti-analysis','培训机构分析报告'],
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