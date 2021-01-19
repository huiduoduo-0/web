import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import index from '../views/index.vue'
const router = new VueRouter({
  mode: 'history',
  //登录
  routes: [{
    path: '/',
    name: 'Container',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: "/",
        name: "goods",
        component: () => import('../components/index_goods.vue'),

      },
      {
        path: "/Mall",
        name: "Mall",
        component: () => import('../components/Mall.vue'),

      },
      {
        path: "/Recharge",
        name: "Recharge",
        component: () => import('../components/Recharge.vue'),

      },
      {
        path: "/usercenter",
        name: "usercenter",
        component: () => import('../components/usercenter.vue'),

      },
      {
        path: "/history",
        name: "history",
        component: () => import('../components/history.vue'),
      },
      {
        path: "/rank",
        name: "rank",
        component: () => import('../admin/rank.vue'),
        children: [
          {
            path: "/ranks",
            name: "ranks",
            component: () => import('../admin/ranks.vue'),
    
          },
          {
            path: "/business",
            name: "business",
            component: () => import('../admin/business.vue'),
    
          },
           {
            path: "/user",
            name: "user",
            component: () => import('../admin/user.vue'),
    
          },
          {
            path: "/page",
            name: "page",
            component: () => import('../admin/page.vue'),
    
          },
        ]
      }
    ]
  },





  ]


})

export default router