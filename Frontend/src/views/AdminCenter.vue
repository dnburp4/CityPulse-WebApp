<script setup>

import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 

   
</script>

<template>
<Header title="AdminCenter"/>

<main class = "alle-news-view">

<RouterLink to="/AdminNews" class="btn-custom">News bearbeiten</RouterLink>
<RouterLink to="/crud-test" class="btn-custom">Events bearbeiten</RouterLink>
<RouterLink to="/adminUser" class="btn-custom">Users bearbeiten</RouterLink>

</main>
<Footer />

</template>




<style scoped>
.alle-news-view {
  background-color: #000; 
  color: white; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
}

.btn-custom {
  background-color: #8A2BE2; 
  color: #ffffff; 
  padding: 30px; 
  text-align: center; 
  border-radius: 10px; 
  font-size: 1.4rem; 
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  width: 100%;
  max-width: 300px; 
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .alle-news-view {
    flex-direction: row; 
    gap: 10px; 
  }

  .btn-custom {
    width: auto; 
  }
}


</style>