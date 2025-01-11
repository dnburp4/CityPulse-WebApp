<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const tickets = ref([]);

const loadTickets = async () => {
  try {
    console.log('Order ID für Abfrage:', route.query.orderId); // Debugging

    const response = await axios.get('/ticketkauf', {
      params: { orderId: route.query.orderId }, // Abfrage basierend auf orderId
    });

    tickets.value = response.data;
    console.log('Geladene Tickets:', tickets.value); // Debugging
  } catch (error) {
    console.error('Fehler beim Laden der Tickets:', error);
  }
};




onMounted(loadTickets);
</script>

<template>
    <div class="rechnung-view">
      <Header title="Ihre Rechnung" />
  
      <main class="rechnung-container">
        <h1>Ihre Rechnung</h1>
  
        <div v-if="tickets.length === 0">Keine Tickets gefunden oder Lade...</div>

<div v-else>
  <div v-for="ticket in tickets" :key="ticket.id" class="ticket">
    <p><strong>Event:</strong> {{ ticket.eventName }}</p>
    <p><strong>Name:</strong> {{ ticket.buyerName }}</p>
    <p><strong>Adresse:</strong> {{ ticket.buyerAddress }}</p>
    <p><strong>Hausnummer:</strong> {{ ticket.buyerHouseNumber }}</p>
    <p><strong>Preis:</strong> {{ ticket.totalPrice }} €</p>
  </div>
</div>

      </main>
  
      <Footer />
    </div>
  </template>

<style scoped>
.rechnung-view {
  background-color: #000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.invoice-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: white;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.8rem;
  color: #57164a;
}

ul {
  text-align: left;
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}

hr {
  border: 0;
  border-top: 1px solid #ddd;
  margin: 10px 0;
}
</style>
