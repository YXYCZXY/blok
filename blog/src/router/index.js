import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Right from '../view/Right/blog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      children:[
        {
          path:'Right',
          components:{
            blg:Right
            }
        }
      ]
    },
  ]
})
