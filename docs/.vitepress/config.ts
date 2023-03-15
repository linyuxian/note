import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/note/",
  title: "Note",
  description: "This is note for front-end web developer",
  lastUpdated: true, // 最近更新时间,最后一条内容的更新时间会显示在页面右下角。要启用它，请将lastUpdated选项添加到您的配置中。
  themeConfig: {
    lastUpdatedText: "最后更新时间",
    footer: {
      message: "生命不息 跑路不止",
      copyright: "Copyright © 2023-present Yuxian Lin",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "面试整理", link: "/interview/" },
      { text: "常用网站", link: "/site/" },
      { text: "规范", link: "/standard/base/name/" },
    ],
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在GitHub上编辑此页面",
    },
    sidebar: {
      "/standard/": [
        {
          text: "基础规范",
          // collapsed: true,
          items: [
            { text: "命名规范", link: "/standard/base/name/" },
            { text: "html规范", link: "/standard/base/html/" },
            { text: "css规范", link: "/standard/base/css/" },
            { text: "javascript规范", link: "/standard/base/javascript/" },
          ],
        },
        {
          text: "框架规范",
          items: [{ text: "vue规范", link: "/standard/frame/vue/" }],
        },
        { text: "工作流规范", link: "/standard/workflow/" },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
