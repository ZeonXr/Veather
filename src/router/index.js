import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const CityChoose = () => import('@/views/CityChoose')
const About = () => import('@/views/About')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/CityChoose',
    name: 'CityChoose',
    component: CityChoose
  },
]

const router = new VueRouter({
  routes
})

export default router
