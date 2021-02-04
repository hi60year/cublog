import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Main from '../views/main/main.vue'
import Register from '../views/main/Register.vue'
import Article from '../views/main/Article/Article.vue'
import NewArticle from '../views/main/NewArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'main_layout',
    component: Main,
    children: [
      {
        path: 'register',
        name: 'register',
        component: Register
      },
      {
        path: 'article',
        name: 'article',
        component: Article
      },
      {
        path: 'new',
        name: 'newArticle',
        component: NewArticle
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
