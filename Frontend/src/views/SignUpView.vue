<script setup>
import { ref } from 'vue';
import { useUserStore } from "../stores/user";
import Footer from '@/components/Footer.vue';

const userStore = useUserStore();

// Reaktive Variablen
let email = ref("");
let password = ref("");
let fullName = ref("");
// let address = ref("");
// let phoneNumber = ref("");

async function register() {
  userStore.signUp( email.value, password.value, fullName.value,);
        if (useUserStore.user) {
          console.log("Logged in")
        }
  
}
</script>

<template>
  <div class="main-container">
    <img src="@/assets/LogoSVG_CityPulse.svg" alt="CityPulseLogo" id="CityPulseLogo">

    <div class="log-in-container">
      <form @submit.prevent="register">
        <h1>SignUp</h1>

        <div class="input-container">
          <label>Name: </label>
          <input v-model="fullName" placeholder="Ihr Name" />
        </div>

        <div class="input-container">
          <label>E-Mail: </label>
          <input type="email" v-model="email" placeholder="example@mail.com" />
        </div>

        <div class="input-container">
          <label>Password: </label>
          <input type="password" v-model="password" placeholder="Ihr Passwort" />
        </div>

        

        <!-- <div class="input-container">
          <label>Telefon-Nr: </label>
          <input v-model="phoneNumber" placeholder="015754241069" />
        </div>

        <div class="input-container">
          <label>Persönliche Adresse: </label>
          <input v-model="address" placeholder="Ihre Adresse" />
        </div> -->

        <button type="submit" class="form-button">SignUp</button>
      </form>
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
  height: auto;
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

.account-registrieren-text {
  text-decoration: none;
  color: black;
  font-size: 14px;
}
</style>
