import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';
import News from '../components/News.vue';
import NotFount from '../components/NotFount.vue';
import Article from '../components/Article.vue';
import Films from '../components/Films.vue';
import User from '../components/User.vue';
import Hengban from '../components/Hengban.vue';
import Shuban from '../components/Shuban.vue';
import Page from '../components/Page.vue';
import ShowMain from '../components/ShowMain.vue';
import ShowFooter from '../components/ShowFooter.vue';
import ShowTop from '../components/ShowTop.vue';


// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/news/:id', component: News },
  { mame:'news',path: '/news/:id', component: News },
  { path: '/article/:id(\\d+)', component: Article },
  // +是至少会有1个参数
  // *是可有可没有，也可以任意多个
  // ？是有或者没有，不可以重复
  { path: '/films/:id+', component: Films },
  { path: '/:path(.*)', component: NotFount },
  { path: '/user',
    component: User,
    children:[
      {
        path:'hengban',
        component:Hengban
      },
      {
        path:'shuban',
        component:Shuban
      },
    ]
  },
  { 
    path: '/page', 
    component: Page,
    beforeEnter:(to,from,next)=>{
      console.log('beforeEnter');
    }
  },
  // 命名视图
  { 
    path: '/show',
    // 别名
    // alias:'/sueShow',
    alias:['/sueShow','/111'],
    components:{
      default:ShowMain,
      ShowTop:ShowTop,
      ShowFooter:ShowFooter
    }
  },
  // 重定向
  {
    path:'/mall',
    // redirect:(to)=>{return {path:'/show'}}
    redirect:'/show'
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router =  createRouter({
  // history:createWebHashHistory(),
  history:createWebHistory(),
  routes // short for `routes: routes`
})
// 路由守卫
router.beforeEach((to,from,next)=>{
  console.log(to);
  next();
  // 禁止跳转
  // return false;
})
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

// Now the app has started!

export default router;