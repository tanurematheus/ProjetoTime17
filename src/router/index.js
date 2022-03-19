import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import CadastroView from '../views/CadastroView'
import LoginView from '../views/LoginView'
import LojasView from '../views/LojasView'
import LojaView from '../views/LojaView'
import ProductView from "../views/ProductView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/cadastro',
    name: 'CadastroView',
    component: CadastroView
  },
  {
    path: '/lojas',
    name: 'LojasView',
    component: LojasView
  },
  {
    path: '/loja/:id',
    name: 'LojaView',
    component: LojaView
  },
  {
    path: '/produto/:id',
    name: 'ProductView',
    component: ProductView
  },
]

const router = new VueRouter({
  routes
})

export default router
