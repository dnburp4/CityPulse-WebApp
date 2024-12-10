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
      // Lazy-loaded Route
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/alleevents',
      name: 'alleevents',
      component: () => import('../views/AlleEvents.vue'),
    },
    {
      path: '/crud-test', // Route für die CRUD-Test-View
      name: 'crudTest',
      component: () => import('../views/CrudTestView.vue'), // Lazy-loaded
    },
    {
      path: '/news', // Route für die CRUD-Test-View
      name: 'news',
      component: () => import('../views/NewsView.vue'), // Lazy-loaded
    },
    {
      path: '/AdminNews', // Route für die CRUD-Test-View
      name: 'AdminNews',
      component: () => import('../views/AdminNewsView.vue'), // Lazy-loaded
    },



  ],
});

export default router;
