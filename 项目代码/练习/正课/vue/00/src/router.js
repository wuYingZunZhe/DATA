import Vue from 'vue'
import Router from 'vue-router'
import product from './components/product'
import foot from './components/foot'
import index from './components/index'
// import main from  './components/main'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/product',component:product},
    {path:'/foot',component:foot},
    {path:'/index',component:index},
    // {path:"/main",component:main}
   
  ]
})

