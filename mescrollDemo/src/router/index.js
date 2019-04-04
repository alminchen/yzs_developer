import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/pages/login/Login'], resolve)
const Index = resolve => require(['@/pages/index/Index'], resolve)
const Home = resolve => require(['@/pages/home/Home'], resolve)
const TabSwiper = resolve => require(['@/components/tabSwiper/tabSwiper'], resolve)
// const PullToRefresh = resolve => require(['@/components/scrollPage/PullToRefresh'], resolve)
const LoadMore = resolve => require(['@/pages/loadMore/ScrollMore'], resolve)
const Classify = resolve => require(['@/pages/classify/Classify'], resolve)
const Nav = resolve => require(['@/components/Nav/nav'], resolve)
const MescrollCom = resolve => require(['@/components/MscrollComponent/MscrollComponent'], resolve)
const BscrollLeftToRight = resolve => require(['@/components/BscrollLeftToRight/BscrollLeftToRight'], resolve)
const mescrollSwiper = resolve => require(['@/components/mescrollSwiper/mescrollSwiper'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/swiper',
      name: 'swiper',
      component: TabSwiper
    }, {
      path: '/pull',
      name: 'pull',
      component: LoadMore
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    }, {
      path: '/mescroll',
      name: 'mescroll',
      component: MescrollCom
    },
    {
      path: '/bscroll',
      name: 'bscroll',
      component: BscrollLeftToRight
    }
    ]
  },
  {
    path: '/nav',
    name: 'nav',
    component: Nav
  }, {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      index: 0
    }
  }, {
    path: '/msswiper',
    name: 'mescrollSwiper',
    component: mescrollSwiper
  }
  ]
})
