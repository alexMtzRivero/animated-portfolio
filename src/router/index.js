import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import Project from '../views/Project.vue'
import Intro from '../views/Intro.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Intro
  },
  {
    path: '/work/:project',
    name: 'Project',
    component: Project,
    props : (route) => ({
      description : route.params.description,
      images : route.params.images,
      colors : route.params.colors,
    })

  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
