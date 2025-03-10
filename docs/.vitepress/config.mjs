import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "技术经理成长之路",
  base: "/technical-manager-growth/",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "本文原创请见",
        link: "https://juejin.cn/column/7196570893153370170",
      },
    ],

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "章节目录",
    },

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "目录",
        items: [
          { text: "我是什么样的人", link: "/我是什么样的人" },
          { text: "发现团队的瓶颈", link: "/发现团队的瓶颈" },
          { text: "处理线上问题", link: "/处理线上问题" },
          { text: "大重构", link: "/大重构" },
          { text: "要懂一些项目管理的知识", link: "/要懂一些项目管理的知识" },
          {
            text: "对自己开发的模块要认真负责",
            link: "/对自己开发的模块要认真负责",
          },
          {
            text: "功能模块提测前要做的几件事",
            link: "/功能模块提测前要做的几件事",
          },
          {
            text: "产品研发要配合好",
            link: "/产品研发要配合好",
          },
          {
            text: "简单聊聊产品规划的流程",
            link: "/简单聊聊产品规划的流程",
          },
          {
            text: "聊聊加班",
            link: "/聊聊加班",
          },
          {
            text: "聊聊跳槽",
            link: "/聊聊跳槽",
          },
          {
            text: "聊聊核心骨干",
            link: "/聊聊核心骨干",
          },
          {
            text: "核心骨干主动离职的影响",
            link: "/核心骨干主动离职的影响",
          },
          {
            text: "激励",
            link: "/激励",
          },
          {
            text: "关于晋升",
            link: "/关于晋升",
          },
          {
            text: "领导力",
            link: "/领导力",
          },
          {
            text: "关于团队",
            link: "/关于团队",
          },
          {
            text: "文档",
            link: "/文档",
          },
          {
            text: "关于招聘",
            link: "/关于招聘",
          },
          {
            text: "技术目标",
            link: "/技术目标",
          },
          {
            text: "管理风格",
            link: "/管理风格",
          },
          {
            text: "搞清楚团队的基本职能",
            link: "/搞清楚团队的基本职能",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ilcherry/technical-manager-growth",
      },
    ],
  },
});
