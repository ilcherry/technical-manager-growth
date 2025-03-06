import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "技术经理成长之路",
  base: "/technical-manager-growth/",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "我是什么样的人", link: "/我是什么样的人" },
    // ],

    sidebar: [
      {
        text: "",
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
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
