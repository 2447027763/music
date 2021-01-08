import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Recommend',
    component: () => import("../views/Recommend")
  },
  { 
    path:"/hot",
    name:"Hot",
    component:()=> import("../views/Hot")
  }
  
]

const router = new VueRouter({
  mode:"hash",
  routes
})

export default router
