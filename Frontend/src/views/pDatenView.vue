<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


const route = useRoute();
const router = useRouter();


const fullName = ref('');
const address = ref('');
const houseNumber = ref('');


const proceedToPayment = () => {
  router.push({
    name: 'Zahlung',
    query: {
      eventId: route.query.eventId,
      eventName: route.query.eventName,
      ticketCount: route.query.ticketCount,
      paymentMethod: route.query.paymentMethod,
      totalPrice: route.query.totalPrice,
      fullName: fullName.value,
      address: address.value,
      houseNumber: houseNumber.value,
    },
  });
};
</script>


<template>
  <div class="personal-data-view">
    <Header title="Persönliche Daten" />

    <main class="personal-data-container">
      <h1>Persönliche Daten</h1>

      <div class="form-group">
        <label for="full-name">Vor- und Nachname</label>
        <input
          id="full-name"
          type="text"
          v-model="fullName"
          placeholder="Ihr voller Name"
        />
      </div>

      <div class="form-group">
        <label for="address">Adresse</label>
        <input
          id="address"
          type="text"
          v-model="address"
          placeholder="Ihre Adresse"
        />
      </div>

      <div class="form-group">
        <label for="house-number">Hausnr.</label>
        <input
          id="house-number"
          type="text"
          v-model="houseNumber"
          placeholder="Ihre Hausnummer"
        />
      </div>

      <button class="submit-button" @click="proceedToPayment">Pay Now</button>
    </main>

    <Footer />
  </div>
</template>


<style scoped>
.personal-data-view {
  background-color: #000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.personal-data-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: white;
  color: #333;
  border-radius: 8px;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #57164a;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #57164a;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #7d2d6b;
}
</style>
