import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Schedule from '@/components/Schedule.vue'
import Notebook from '@/components/Notebook.vue'
import Salary from '@/components/Salary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule,
    },
    {
      path: '/notebook',
      name: 'notebook',
      component: Notebook,
    },
    {
      path: '/salary',
      name: 'salary',
      component: Salary,
    }
  ],
})

export default router
