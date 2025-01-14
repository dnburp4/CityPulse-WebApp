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
    const response = await axios.get('/ticketkauf'); 
    tickets.value = response.data;
    console.log('Geladene Tickets:', tickets.value);
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
      

      <div v-if="tickets.length === 0">Keine Tickets gefunden oder Lade...</div>

      <div v-else class="tickets-container">
        <div v-for="ticket in tickets" :key="ticket.id" class="ticket">
          <div class="ticket-header">
            <h2>{{ ticket.eventName }}</h2>
          </div>
          <div class="ticket-body">
            <p><strong>Name:</strong> {{ ticket.buyerName }}</p>
            <p><strong>Adresse:</strong> {{ ticket.buyerAddress }}</p>
            <p><strong>Hausnummer:</strong> {{ ticket.buyerHouseNumber }}</p>
          </div>
          <div class="ticket-footer">
            <p><strong>Preis:</strong> {{ ticket.totalPrice }} €</p>
          </div>
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

.rechnung-container {
  padding: 20px;
  max-width: 900px;
  margin: 20px auto;
  text-align: center;
  background: rgb(0, 0, 0);
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 1.8rem;
  color: #57164a;
  margin-bottom: 20px;
}

.tickets-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;
}

.ticket {
  background: #f8f9fa;
  border: 2px dashed #ddd;
  border-radius: 10px;
  width: 280px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.ticket-header {
  background: #57164a;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 1.2rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.ticket-body {
  padding: 10px 0;
  font-size: 0.9rem;
}

.ticket-footer {
  background: #f1f1f1;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.rechnung-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
