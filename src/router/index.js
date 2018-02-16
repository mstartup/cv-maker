import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Template from '@/pages/Template'
import DownloadPDF from '@/pages/DownloadPDF'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    },
    {
      path: '/downloadPDF',
      name: 'DownloadPDF',
      component: DownloadPDF
    }
  ],
  mode: 'history'
})
