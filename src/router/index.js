import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/Layout'

import Home from '@/views/Home'

import Login from '@/views/Login'
import Register from '@/views/Register'

import Settings from '@/views/Settings'

import Profile from '@/views/Profile'

import Editor from '@/views/Editor'

import Article from '@/views/Article'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', name: 'home', component: Home },
        { path: '/login', name: 'login', component: Login },
        { path: '/register', name: 'register', component: Register },
        {
          path: '/profile/:username',
          name: 'profile',
          component: Profile
        },
        {
          path: '/profile/:username/favorites',
          name: 'profile-favorites',
          component: Profile
        },
        { path: '/settings', name: 'settings', component: Settings },
        { path: '/editor', name: 'editor', component: Editor },
        { path: '/editor/:slug', name: 'editor-edit', component: Editor },
        { path: '/article/:slug', name: 'article', component: Article }
      ]
    }
  ]
})

export default router
