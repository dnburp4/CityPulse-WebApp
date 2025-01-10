import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from "../stores/user";
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

import RestrictedView from '../views/RestrictedView.vue'


import HomeView from '../views/HomeView.vue';
import AdminUserView from '@/views/AdminUserView.vue';

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
    {
      path: '/restricted',
      name: 'restricted',
      component: RestrictedView,
    },
    {
      path: '/adminUser',
      name: 'adminsUser',
      component: AdminUserView,
    },


  ],
})


// Liste der öffentlichen Seiten
const publicPages = ['home', 'news', 'kontakt', 'login', 'signup', 'alleevents', 'events', 'eventDetail', 'Impressum', 'Datenschutz', 'ticketkauf', 'pDaten', 'Zahlung', 'AGB'];
const superAdminPages = ["AdminCenter", "AdminNews", "crud-test"];

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const isLoggedIn = userStore.user; 
  const isSuperAdmin = userStore.isSuperAdmin; // Ueberpruefung der Rolle von Amdin
console.log("Am I logged in: " + isLoggedIn)

  if (superAdminPages.includes(to.name) && !isSuperAdmin) {
    // Wenn eine superAdmin Page offnen mochte und der User kein Super Admin ist, dann geht man automatisch zu der Startseite
    console.warn("You must be a SuperAdmin to see this page!");
    return next({ name: "home" });
  }
  if (!publicPages.includes(to.name) && !isLoggedIn) {
    console.warn("You must log in to continue here!");
    alert("You must log in to continue here!");
    return next({ name: "login" });
  }

  next();

});

export default router;