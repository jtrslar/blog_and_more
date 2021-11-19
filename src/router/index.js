import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Loading from '@/views/Loading.vue'
import BlogDetail from '@/views/blog/BlogDetail.vue'
import BlogList from '@/views/blog/BlogList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BlogList',
    component: BlogList,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,
  },
  {
    path: '/blogDetail',
    name: 'BlogDetail',
    component: BlogDetail,
  },
]

const router = new VueRouter({
  routes,
})

export default router
