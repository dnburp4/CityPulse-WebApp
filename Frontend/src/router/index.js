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
      path: '/admincenter', 
      name: 'AdminCenter',
      component: () => import('../views/AdminCenter.vue'), 
    },

    {
      path: '/login', 
      name: 'login',
      component: () => import('../views/LoginView.vue'), 
    },

    {
      path: '/signup', 
      name: 'signup',
      component: () => import('../views/SignUpView.vue'), 
    },

    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/KontaktView.vue'),
    },

    {
      path: '/event/:id', 
      name: 'eventDetail',
      component: () => import('../views/EventDetailView.vue'), 
    },

    {
      path: '/Impressum', 
      name: 'Impressum',
      component: () => import('../views/ImpressumView.vue'), 
    },

    {
      path: '/AGB', 
      name: 'AGB',
      component: () => import('../views/AGBView.vue'), 
    },

    {
      path: '/Datenschutz', 
      name: 'Datenschutz',
      component: () => import('../views/DatenschutzView.vue'), 
    },

    {
      path: '/ticketkauf', 
      name: 'ticketkauf',
      component: () => import('../views/TicketkaufView.vue'), 
    },

    {
      path: '/pDaten', 
      name: 'pDaten',
      component: () => import('../views/pDatenView.vue'), 
    },


    {
      path: '/Zahlung', 
      name: 'Zahlung',
      component: () => import('../views/ZahlungView.vue'), 
    },


  ],
})


// Liste der öffentlichen Seiten
const publicPages = [ 'AdminCenter','home', 'news', 'kontakt', 'login', 'signup', 'alleevents', 'events', 'crudTest', 'eventDetail', 'AdminNews', 'Impressum', 'AGB', 'Datenschutz', 'ticketkauf', 'pDaten', 'Zahlung'];

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isPublicPage = publicPages.includes(to.name);

  console.log('Navigating to:', to.name);
  console.log('Is public page:', isPublicPage);

  if (!isPublicPage && userStore.user == null) {
    // Weiterleitung zur Login-Seite
    next({ name: "login" });
  } else {
    next(); // Zugriff erlauben
  }
});

export default router;