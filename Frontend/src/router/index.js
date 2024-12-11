import { createRouter, createWebHistory } from 'vue-router';


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



  ],
});

export default router;
