// router/index.js (o router.js si estás usando la estructura por defecto)
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Catalogo from '@/views/Catalogo.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo,
  },
  {
    path: '/',
    redirect: '/home', // Redirige al home por defecto
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
