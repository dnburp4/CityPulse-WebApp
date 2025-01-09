<script setup>
import { ref, computed, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter(); 


const events = ref([]); 
const selectedEvent = ref(null); 
const ticketCount = ref(1); 
const paymentMethod = ref(''); 
const price = computed(() => {
  if (selectedEvent.value) {
    return selectedEvent.value.preis * ticketCount.value;
  }
  return 0;
}); 

const loadEvents = async () => {
  try {
    const response = await axios.get('/event');
    events.value = response.data;
  } catch (error) {
    console.error('Fehler beim Laden der Events:', error);
  }
};

onMounted(loadEvents);

const proceedToNext = () => {
  if (selectedEvent.value && paymentMethod.value) {
    router.push({
      name: 'pDaten', 
      query: {
        eventId: selectedEvent.value?.id,
        ticketCount: ticketCount.value,
        paymentMethod: paymentMethod.value,
        totalPrice: price.value,
      },
    });
  } else {
    alert('Bitte wählen Sie ein Event und eine Zahlungsmethode aus.');
  }
};
</script>

<template>
  <div class="ticket-kauf-view">
    
    <Header title="Ticketkauf" />

    
    <main class="ticket-container">
      <h1>Tickets kaufen</h1>
      <p>Wählen Sie Bitte Ihr Event und die Anzahl der Tickets aus.</p>

      <div class="form-group">
        <label for="event">Event</label>
        <select id="event" v-model="selectedEvent" :value="null">
          <option value="" disabled selected>Wählen Sie ein Event</option>
          <option v-for="event in events" :key="event.id" :value="event">
            {{ event.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="ticket-count">Anzahl Tickets</label>
        <select id="ticket-count" v-model="ticketCount">
          <option v-for="count in 10" :key="count" :value="count">
            {{ count }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="payment-method">Zahlungsmethode</label>
        <select id="payment-method" v-model="paymentMethod">
          <option value="" disabled selected>Zahlungsmethode wählen</option>
          <option value="paypal">PayPal</option>
          <option value="bank">Bank</option>
          <option value="handy">Handy</option>
        </select>
      </div>

      <div class="form-group">
        <label for="price">Preis</label>
        <input id="price" type="text" :value="price" readonly />
      </div>

      <button class="next-button" @click="proceedToNext">Weiter</button>
    </main>

    
    <Footer />
  </div>
</template>

<style scoped>
.ticket-kauf-view {
  background: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ticket-container {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  background: white;
  color: #333;
  border-radius: 8px;
  
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #57164a;
}

p {
  margin-bottom: 20px;
  font-size: 1rem;
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

select,
input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

select:focus,
input:focus {
  outline: none;
  border-color: #8a2be2;
  box-shadow: 0 0 4px rgba(138, 43, 226, 0.6);
}

.next-button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  background: #57164a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
 
}

.next-button:hover {
  background: #8a2be2;
}
</style>
