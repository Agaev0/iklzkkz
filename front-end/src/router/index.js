import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Smth from '../views/Smth.vue'
import User from '../views/User.vue'
import Users from '../views/Users.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/smth',
    name: 'Smth',
    component: Smth
  },
  {
    path: '/users',
    name: 'User',
    component: Users
  },
  {
    path: '/users/:id',
    name: 'UserId',
    component: User
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router