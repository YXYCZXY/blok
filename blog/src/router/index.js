import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Right from '../view/Right/blog.vue'
import Music from '../view/Right/music.vue'
import Photo from '../view/Right/photo.vue'
import Author from '../view/Right/author.vue'
import Beijing from '../view/Right/beijing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      children:[
        {
          path:'/Right',
          components:{
            blg:Right
            }
        },
        {
          path:'/Music',
          components: {
            mic:Music
          }
        },
        {
          path:'/Photo',
          components: {
            mic:Photo
          },
          children:[
            {
              path:'/Photo/Beijing',
              name:'beijing',
              component:Beijing
            }
          ]
        },
        {
          path:'/Author',
          components: {
            mic:Author
          }
        },
      ]
    },
  ]
})
