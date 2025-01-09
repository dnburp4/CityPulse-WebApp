<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useUserStore } from "../stores/user";
import Header from '@/components/Header.vue';


const userStore = useUserStore();
let secret = ref("");
// let isLoading = ref(true); // Ladezustand hinzufügen

function getSecret() {
  axios.get('/restricted/').then((response) => {
    secret.value = response.data.message;
  });
}


// onMounted(async () => {
//   try {
//     await userStore.loadUserData(); // Benutzerdaten laden
//     console.log('Aktueller Benutzer:', userStore.user);
//     console.log('Fullname:', userStore.user?.fullName);
//     console.log('E-Mail-Adresse:', userStore.user?.emailAddress);
//     console.log('isAdmin:', userStore.user.isSuperAdmin)
//   } catch (error) {
//     console.error('Fehler beim Laden der Benutzerdaten:', error);
//   } finally {
//     isLoading.value = false; // Ladezustand aktualisieren
//   }
// });

console.log('Aktueller Benutzer:', userStore.user);
console.log('Fullname:', userStore.user?.fullName);
console.log('E-Mail-Adresse:', userStore.user?.emailAddress);
console.log('isAdmin:', userStore.user?.isSuperAdmin)


const headerTitle = `Welcome ${userStore.user?.fullName || 'User'}`;
const isSuperAdmin = userStore.user?.isSuperAdmin || false; 


</script>

<template>


  <Header :title="headerTitle"/> 

  <main class="restricted-container">
    <!-- <p v-if="isLoading">Loading...</p> Ladezustand anzeigen -->
    <!-- <p v-else> -->


      <div class="info-box">Name: <p>'{{ userStore.user?.fullName || 'User' }}'</p> </div>
        <div class="info-box">Nutzername/Email: <p>{{ userStore.user?.emailAddress || 'No Email' }}</p></div>
        
        <div v-if="!isSuperAdmin">
        <div class="info-box">Addresse: <p>{{ userStore.user?.address }}</p></div>
        <div class="info-box">Handy-Nummer:  <p>{{ userStore.user.phoneNumber }}</p></div>
        </div>

    <!-- <h2 @click="getSecret">C{{ secret }}</h2> -->

<div v-if="isSuperAdmin" class="info-box">
        <p class="status-text">Sie sind als Admin registriert</p>
        <RouterLink to="/AdminCenter" class="btn-custom">AdminCenter</RouterLink> <!-- Klasse aus dem Komponent StartSeiteHeader -->
</div>

    <a href="/" class="log-out-btn" @click = "userStore.logout()">Ausloggen</a>
  </main>
</template>



<style>


.restricted-container {
  background-color: #000; 
  color: white; 
  min-height: 100vh; 
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
}

.info-box {
    background-color: #ffffff;
    color: black;
    padding: 20px;
    margin: 10px ;
    border-radius: 8px;
    font-size: 16px;
    width: 300px;
    height: auto;
    font-family: "Rubik", sans-serif;
    font-weight: bold;
}


.status-text {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    padding: 10px;
}

.log-out-btn {
background-color: #d71010; 
    color: #ffffff; 
    border: none; 
    padding: 10px 20px; 
    border-radius: 50px; 
    font-size: 1.4rem; 
    margin-top: 100px; 
    text-decoration: none;
    margin-bottom: 100px;
    font-family: "Rubik", sans-serif;
}

.log-out-btn:hover {
    background-color: #787369; 
    color: #fff; 
}

</style>