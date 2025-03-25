import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BlogHome
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: ArticleDetail
    }
  ]
})
