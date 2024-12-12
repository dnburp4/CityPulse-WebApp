import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from "../stores/user";
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

import RestrictedView from '../views/RestrictedView.vue'


import HomeView from '../views/HomeView.vue';

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
      
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/alleevents',
      name: 'alleevents',
      component: () => import('../views/AlleEvents.vue'),
    },
    {
      path: '/crud-test', 
      name: 'crudTest',
      component: () => import('../views/CrudTestView.vue'), 
    },
    {
      path: '/news', 
      name: 'news',
      component: () => import('../views/NewsView.vue'), 
    },
    {
      path: '/AdminNews', 
      name: 'AdminNews',
      component: () => import('../views/AdminNewsView.vue'), 
    },

    {
      path: '/login', 
      name: 'login',
      component: () => import('../views/LoginView.vue'), 
    },


  ],
})


router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (
    to.name !== "login" &&
    to.name !== "signup" &&
    to.name !== "home" &&
    to.name !== "about" &&
    userStore.user == null
  ) {
    next({ name: "login" });
  } else {
    next();
  }
})

export default router;