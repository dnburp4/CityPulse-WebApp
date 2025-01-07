<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from "../stores/user";
import Footer from '@/components/Footer.vue';

// Daten und Router
const userStore = useUserStore();
const router = useRouter();

// Referenzen für Eingaben
let email = ref("");
let password = ref("");
let errorMessage = ref("");

// Login-Funktion
async function login() {
  try {
    // Benutzer anmelden
    await userStore.signIn(email.value, password.value);

    // Wenn Benutzer erfolgreich angemeldet ist, weiterleiten
    if (userStore.user) {
      console.log("Logged in");
      router.push('/restricted'); // Weiterleitung zur Restricted View
    }
  } catch (error) {
    console.error("Login failed:", error);
    errorMessage.value = "Login fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.";
  }
}
</script>

<template>
  <div class="main-container">
    <!-- Logo -->
    <img src="@/assets/LogoSVG_CityPulse.svg" alt="CityPulseLogo" id="CityPulseLogo" />

    <!-- Login-Container -->
    <div class="log-in-container">
      <form @submit.prevent="login">
        <h1>Login</h1>

        <!-- Fehlermeldung -->
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

        <!-- Eingabe Benutzername -->
        <div class="input-container">
          <label for="email">Nutzername:</label>
          <input id="email" type="email" v-model="email" placeholder="E-Mail eingeben" required />
        </div>

        <!-- Eingabe Passwort -->
        <div class="input-container">
          <label for="password">Passwort:</label>
          <input id="password" type="password" v-model="password" placeholder="Passwort eingeben" required />
        </div>

        <!-- Login-Button -->
        <button type="submit" class="form-button">Login</button>
      </form>

      <!-- Registrierung-Link -->
      <RouterLink to="/signup" class="account-registrieren-text">
        <h2>Noch kein Account?</h2>
        <h2>Jetzt registrieren</h2>
      </RouterLink>
    </div>
  </div>

  <!-- Footer -->
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
