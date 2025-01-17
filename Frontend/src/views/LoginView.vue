<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from "../stores/user";
import Footer from '@/components/Footer.vue';

const userStore = useUserStore();
const router = useRouter();

let email = ref("");
let password = ref("");
let errorMessage = ref("");

async function login() {
  try {
    // Benutzer anmelden
    await userStore.signIn(email.value, password.value);
    // Wenn Benutzer erfolgreich angemeldet ist weiterleiten
    if (userStore.user) {
      console.log("Logged in");
      router.push('/restricted'); 
    }
  } catch (error) {
    console.error("Login failed:", error);
    errorMessage.value = "Login fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.";
  }
}
</script>

<template>
  <div class="main-container">
   
    <RouterLink to="/">
    <img src="@/assets/LogoSVG_CityPulse.svg" alt="CityPulseLogo" id="CityPulseLogo" />
    </RouterLink>

    <div class="log-in-container">
      <form @submit.prevent="login">
        <h1>Login</h1>

        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

        
        <div class="input-container">
          <label for="email">Email-Adresse:</label>
          <input id="email" type="email" v-model="email" placeholder="E-Mail eingeben" required />
        </div>

       
        <div class="input-container">
          <label for="password">Passwort:</label>
          <input id="password" type="password" v-model="password" placeholder="Passwort eingeben" required />
        </div>

       
        <button type="submit" class="form-button">Login</button>
      </form>

      
      <RouterLink to="/signup" class="account-registrieren-text">
        <h2>Noch kein Account?</h2>
        <h2>Jetzt registrieren</h2>
      </RouterLink>
    </div>
  </div>

  
  <Footer />
</template>

<style>
.main-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  flex-direction: column;
  padding-bottom: 15px;
}

#CityPulseLogo {
  width: 300px;
  height: auto;
  margin-bottom: 20px;
}

#CityPulseLogo:hover {
  transform: scale(1.1); /* Aumenta un poco el tamaño de la imagen */
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2); /* Sombra suave alrededor de la imagen */
}

.log-in-container {
  position: relative;
  max-width: 300px;
  width: 100%;
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.log-in-container h1,
.account-registrieren-text {
  text-align: center;
  padding: 5px;
}

.input-container {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-container input {
  padding: 10px;
  width: 100%;
  outline: none;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 14px;
}

.form-button {
  height: 40px;
  width: 100%;
  color: white;
  border: none;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 8px;
  background-color: blueviolet;
  font-size: 16px;
}

.form-button:hover {
  background-color: darkviolet;
}

.account-registrieren-text {
  text-decoration: none;
  color: black;
  font-size: 14px;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
