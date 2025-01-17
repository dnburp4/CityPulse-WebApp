<script setup>
import { useRoute } from 'vue-router'; // Zugriff auf die aktuelle Route
import CookieBanner from "@/components/CookieBanner.vue";

// import HeaderStartseite from '@/components/HeaderStartseite.vue';
//import Header from '@/components/Header.vue';
//import Footer from '@/components/Footer.vue';

const route = useRoute(); // Aktuelle Route holen
</script>

<template>
  <div>
    <!-- Dynamisch Header wählen -->
    <!-- <HeaderStartseite v-if="route.name === 'home'" />
    <Header v-else /> -->

    
    <!-- Router-View für Seiteninhalte -->
    <router-view />


    <!-- Footer nur auf anderen Seiten -->
    <!-- <Footer v-if="route.name !== 'home'" /> -->
  </div>

  <CookieBanner />

</template>

<style scoped>
/* Globale Styles */
</style>
