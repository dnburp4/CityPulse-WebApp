<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const router = useRouter();
const route = useRoute();

import axios from 'axios';

const selectedEvent = ref(null);
const ticketCount = ref(route.query.ticketCount || 0);
const fullName = ref(route.query.fullName || '');
const totalPrice = ref(route.query.totalPrice || 0);

const loadEventDetails = async () => {
  console.log("Lade Event mit ID:", route.query.eventId); // Debugging
  try {
    const response = await axios.get(`/event/${route.query.eventId}`); // API-Call basierend auf der ID
    selectedEvent.value = response.data;
    console.log("Geladene Event-Details:", selectedEvent.value); // Debugging
  } catch (error) {
    console.error("Fehler beim Laden des Events:", error);
  }
};

onMounted(() => {
  if (route.query.eventId) {
    loadEventDetails(); // Event-Details laden
  }
});

const proceedToFinalTicket = async () => {
  try {
    const payload = {
      eventName: selectedEvent.value.name,
      ticketCount: ticketCount.value,
      totalPrice: totalPrice.value,
      buyerName: fullName.value,
      buyerAddress: route.query.address,
      buyerHouseNumber: route.query.houseNumber,
    };

    const response = await axios.post('/ticketkauf', payload); // Speichert die Tickets im Backend
    const orderId = response.data.orderId; // Erhalte die orderId aus der Backend-Antwort

    console.log('Order ID:', orderId); // Debugging

    router.push({
      name: 'Rechnung',
      query: {
        orderId, // Leite die orderId weiter
      },
    });
  } catch (error) {
    console.error('Fehler beim Speichern der Tickets:', error);
    alert('Fehler beim Ticketkauf. Bitte versuchen Sie es erneut.');
  }
};


</script>

<template>
  <div class="zahlung-view">
    <Header title="Zahlung" />

    <main class="payment-container">
      <h1>Zahlung</h1>

      <div class="payment-summary">
        <h2><i class="icon">&#9432;</i> Ticketkauf</h2>

        <p><strong>Event:</strong> {{ route.query.eventName || 'Nicht verfügbar' }}</p>

        <p><strong>Anzahl Tickets:</strong> {{ ticketCount }}</p>
        <p><strong>Name:</strong> {{ fullName }}</p>
        <p><strong>Preis:</strong> {{ totalPrice }} €</p>


        <button class="buy-button" @click="proceedToFinalTicket">Buy</button>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.zahlung-view {
  background-color: #000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.payment-container {
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  background: white;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #57164a;
}

.payment-summary {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
}

.payment-summary h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #57164a;
  display: flex;
  align-items: center;
  gap: 5px;
}

.payment-summary p {
  font-size: 1rem;
  margin-bottom: 8px;
}

.buy-button {
  background-color: #57164a;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
  width: 100%;
}

.buy-button:hover {
  background-color: #8a2be2;
}
</style>
