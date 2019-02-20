import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import o1 from '@/components/01.vue'
import o2 from '@/components/02.vue'
import o3 from '@/components/03.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		  {
      path: '/01',
      name: 'o1',
      component: o1
    },
		   {
      path: '/02',
      name: 'o2',
      component: o2
    },
		   {
      path: '/03',
      name: 'o3',
      component: o3
    }
  ]
})
