import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import author from '@/components/author'
import Digest from '@/components/Digest'
import my from '@/components/my'
import register from '@/components/register'
import bookShelf from '@/components/bookShelf'
import Wen from '@/components/Wen'
import Science from '@/components/Science'
import Art from '@/components/Art'
import  Magazine from '@/components/Magazine'
import  Live from '@/components/Live'
import Travel from '@/components/Travel'
import Manage from '@/components/Manage'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path:'/author',
      component:author
    },
    {
      path:'/Digest',
      component:Digest
    },
    {
      path:'/my',
      component:my
    },
    {
      path:'/bookShelf',
      component:bookShelf
    },
    {
      path:'/Wen',
      name:'Wen',
      component:Wen
    } ,
    {
      path:'/Science',
      name:'Science',
      component:Science
    } ,
    {
      path:'/Art',
      name:'Art',
      component:Art
    },
    {
      path:'/Magazine',
      name:'Magazine',
      component:Magazine
    },
    {
      path:'/Live',
      name:'Live',
      component:Live
    },
    {
      path:'/Travel',
      name:'Travel',
      component:Travel
    },
    {
      path:'/Manage',
      name:'Manage',
      component:Manage
    },{
      path:'/History',
      name:'History',
      component:History
    }
  ]
})
