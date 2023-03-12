import { defineConfig } from 'vitepress'
import { getNav } from './config/nav'
import { getSidebar } from './config/sidebar'

export default defineConfig({
  title: 'antd-tiny-vue',
  themeConfig: {
    nav: getNav(),
    sidebar: getSidebar()
  }
})
