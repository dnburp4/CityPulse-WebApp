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
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>

      <p class="user-name">Name: {{ userStore.user?.fullName || 'User' }}</p>
      <p class="user-email">Email: {{ userStore.user?.emailAddress || 'No Email' }}</p>
      <p v-if="!isSuperAdmin">Adresse: {{ userStore.user?.address }}</p>
      <p v-if="!isSuperAdmin">Handy-Nummer: {{ userStore.user.phoneNumber }}</p>

      <button class="btn-ticket" @click="goToTickets">Tickets</button>

      <div v-if="isSuperAdmin" class="admin-section">
        <p class="status-text">Sie sind als Admin registriert</p>
        <RouterLink to="/AdminCenter" class="btn-white">AdminCenter</RouterLink>
      </div>
    </div>

    <a href="/" class="log-out-btn" @click="userStore.logout()">Ausloggen</a>
  </main>
</template>

<style scoped>
.restricted-container {
  background-color: #0e0e0e; 
  color: white; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
}

.info-box {
  background-color: #6c3483;
  color: rgb(255, 255, 255);
  padding: 50px 10px 100px;
  border-radius: 12px;
  font-size: 18px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px; 
  position: relative;
}

.info-box p {
  margin: 15px 0;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
}

.log-out-btn {
  background-color: #e74c3c; 
  color: #ffffff; 
  border: none; 
  padding: 12px 30px; 
  border-radius: 50px; 
  font-size: 1.2rem; 
  text-decoration: none;
  margin-top: 30px; 
  font-family: "Rubik", sans-serif;
  align-self: center; 
  transition: background-color 0.3s ease;
}

.log-out-btn:hover {
  background-color: #c0392b; 
  color: #fff; 
}

.btn-white {
  background-color: #ffffff; 
  color: #000000; 
  border: none; 
  font-weight: bold;
  padding: 12px 30px; 
  border-radius: 50px; 
  font-size: 1.2rem; 
  text-decoration: none;
  position: relative;
  position: relative;
  top: 30px; 

  font-family: "Rubik", sans-serif;
  transition: background-color 0.3s ease;
}

.btn-ticket {
  background-color: #ffffff;
  color: #000000;
  border: none;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.btn-ticket:hover {
  background-color: #732d91;
}

.btn-white:hover {
  background-color: #732d91; 
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-box {
    padding: 30px;
    font-size: 16px;
    max-width: 350px;
    min-height: 400px;
  }

  .info-box p {
    font-size: 18px;
  }

  .btn-ticket, .btn-white {
    font-size: 1rem;
    padding: 10px 20px;
    margin-top: 15px;
  }

  .btn-white {
    position: relative;
    margin-top: 20px;
  }

  .log-out-btn {
    font-size: 1rem;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  .info-box {
    padding: 20px;
    font-size: 14px;
    min-height: 350px;
  }

  .info-box p {
    font-size: 16px;
  }

  .btn-ticket, .btn-white {
    font-size: 0.9rem;
    padding: 8px 16px;
    margin-top: 15px;
  }

  .btn-white {
    position: relative;
    margin-top: 20px;
  }

  .log-out-btn {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}
</style>