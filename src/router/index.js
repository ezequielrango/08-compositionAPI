import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Counter.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (users.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Users.vue')
    },
    {
      path: '/pokemon-search',
      name: 'pokemon-search',
      // route level code-splitting
      // this generates a separate chunk (pokemon-search.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchPokemon.vue')
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-id',
      // route level code-splitting
      // this generates a separate chunk (pokemon-search.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Pokemon.vue')
    },
  ]
})

export default router
