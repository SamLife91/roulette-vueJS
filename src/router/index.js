import Vue from 'vue'
import Router from 'vue-router'
import Roulette from '@/components/Roulette'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Roulette',
      component: Roulette
    }
  ]
})
