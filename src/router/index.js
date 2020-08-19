import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import elementui from '@/components/element-ui'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'elementui',
      component: elementui
    }
  ]
})
