<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue';
import HeaderStartseite from '@/components/HeaderStartseite.vue';

import HomeView from './views/HomeView.vue';


</script>

<template>

    
<HeaderStartseite />
    
  
<HomeView />




<Footer />


  
  <RouterView />
</template>

<style scoped>



</style>
