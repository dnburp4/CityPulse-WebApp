<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useUserStore } from "../stores/user";
import Header from '@/components/Header.vue';


const userStore = useUserStore();
let secret = ref("");
let isLoading = ref(true); // Ladezustand hinzufügen

function getSecret() {
  axios.get('/restricted/').then((response) => {
    secret.value = response.data.message;
  });
}


onMounted(async () => {
  try {
    await userStore.loadUserData(); // Benutzerdaten laden
    console.log('Aktueller Benutzer:', userStore.user);
    console.log('Benutzername:', userStore.user?.fullName);
    console.log('E-Mail-Adresse:', userStore.user?.emailAddress);
    console.log('isAdmin:', userStore.user.isSuperAdmin)
  } catch (error) {
    console.error('Fehler beim Laden der Benutzerdaten:', error);
  } finally {
    isLoading.value = false; // Ladezustand aktualisieren
  }
});

const headerTitle = `Welcome Admin ${userStore.user?.fullName || 'User'}`;


</script>

<template>


  <Header :title="headerTitle"/> 

  <main>
    <h1>Restricted Area</h1>
    <p v-if="isLoading">Loading...</p> <!-- Ladezustand anzeigen -->
    <p v-else>
      for {{ userStore.user?.fullName || 'User' }} ( {{ userStore.user?.emailAddress || 'No Email' }} )
    </p>
    This is a restricted area, e.g., for registered customers or admins.
    <h2 @click="getSecret">Click here to see Protected Message: {{ secret }}</h2>
  </main>
</template>