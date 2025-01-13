<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useUserStore } from "../stores/user";
import Header from '@/components/Header.vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
let secret = ref("");

function getSecret() {
  axios.get('/restricted/').then((response) => {
    secret.value = response.data.message;
  });
}

console.log('Aktueller Benutzer:', userStore.user);
console.log('Fullname:', userStore.user?.fullName);
console.log('E-Mail-Adresse:', userStore.user?.emailAddress);
console.log('isAdmin:', userStore.user?.isSuperAdmin);

const headerTitle = `Welcome ${userStore.user?.fullName || 'User'}`;
const isSuperAdmin = userStore.user?.isSuperAdmin || false; 

const goToTickets = () => {
  router.push('/rechnung'); 
};

</script>

<template>
  <Header :title="headerTitle"/> 

  <main class="restricted-container">
    <div class="info-box">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>

      <p> Name: {{ userStore.user?.fullName || 'User' }}</p>
      <p> Email: {{ userStore.user?.emailAddress || 'No Email' }}</p>
      <p v-if="!isSuperAdmin"> Addresse: {{ userStore.user?.address }}</p>
      <p v-if="!isSuperAdmin"> Handy-Nummer: {{ userStore.user.phoneNumber }}</p>

      <button class="btn-ticket" @click="goToTickets">Tickets</button>

      <div v-if="isSuperAdmin">
        <p class="status-text">Sie sind als Admin registriert</p>
        <RouterLink to="/AdminCenter" class="btn-white">AdminCenter</RouterLink>
      </div>
    </div>

    <a href="/" class="log-out-btn" @click="userStore.logout()">Ausloggen</a>
  </main>
</template>

<style scoped>
.restricted-container {
  background-color: #000; 
  color: white; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}

.info-box {
  background-color: #8A2BE2;
  color: rgb(255, 255, 255);
  padding: 40px;
  border-radius: 8px;
  font-size: 16px;
  width: auto;
  height: auto;
  max-width: 400px;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  text-align: left;
  margin-bottom: 20px; 
}

.info-box p,
.status-text {
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}

.log-out-btn {
  background-color: #d71010; 
  color: #ffffff; 
  border: none; 
  padding: 10px 20px; 
  border-radius: 50px; 
  font-size: 1.2rem; 
  text-decoration: none;
  margin-top: 20px; 
  font-family: "Rubik", sans-serif;
  align-self: center; 
}

.log-out-btn:hover {
  background-color: #787369; 
  color: #fff; 
}

.btn-white {
  background-color: #ffffff; 
  color: #000000; 
  border: none; 
  padding: 10px 20px; 
  border-radius: 50px; 
  font-size: 1.2rem; 
  text-decoration: none;
  margin-top: 40px; 
  font-family: "Rubik", sans-serif;
}



.btn-ticket {
  background-color: #57164a;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1.2rem;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  margin-top: 20px;
}

.btn-white:hover {
  background-color: #e9cb8f; 
  color: #000000; 
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-box {
    padding: 20px;
    font-size: 14px;
    max-width: 300px;
  }

  .info-box p,
  .status-text {
    font-size: 16px;
  }

  .btn-ticket, .btn-white {
    font-size: 1rem;
    padding: 8px 16px;
  }

  .log-out-btn {
    font-size: 1rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .info-box {
    padding: 15px;
    font-size: 12px;
  }

  .info-box p,
  .status-text {
    font-size: 14px;
  }

  .btn-ticket, .btn-white {
    font-size: 0.9rem;
    padding: 6px 12px;
  }

  .log-out-btn {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
}
</style>
