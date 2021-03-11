import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import login from '../views/login.vue'
import index from '../views/index.vue'
import register from '../views/register.vue'
import ForgetThePassword from '../views/ForgetThePassword.vue'
import verification from '../views/verification.vue'
const router = new VueRouter({
  mode: 'history',
  //登录
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
     
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue'),
    },
    {
      path: '/ForgetThePassword',
      name: 'ForgetThePassword',
      component: () => import('../views/ForgetThePassword.vue'),
    },
    {
      path: '/verification',
      name: 'verification',
      component: () => import('../views/verification.vue'),
    },
    
    {
    path: '/index',
    name: 'Container',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: "/goods",
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
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      alert('您登录的用户已过期或请重新登录')
      next('/login');
    } else {
      next();
    }
  }
});
export default router