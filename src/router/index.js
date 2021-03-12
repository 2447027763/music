import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Recommend',
    component: () => import("../views/Recommend"),
    meta:{showNav:true}
  },
  { 
    path:"/hot",
    name:"Hot",
    component:()=> import("../views/Hot"),
    meta:{showNav:true}
  },
  {
    path:"/search",
    name:"Search",
    component:()=> import("../views/Search"),
    meta:{showNav:true}
  },
  {
    path:"/songlist/:songListId",
    name:"SongList",
    props:true,
    component:()=>import("../views/SongList"),
    meta:{showNav:false}
  }
  
]

const router = new VueRouter({
  mode:"hash",
  routes
})

export default router
