<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Header from '@/components/Header.vue'; // Header-Komponente
import Footer from '@/components/Footer.vue'; // Footer-Komponente
import EventCard from '@/components/EventCard.vue'; // EventCard-Komponente

const route = useRoute(); // Zugriff auf die Routenparameter
const router = useRouter(); // Router für Navigation
const event = ref(null); // Speichert das aktuelle Event

// Lade das Event basierend auf der ID in der URL
const loadEvent = async () => {
  try {
    const response = await axios.get(`http://localhost:1337/event/${route.params.id}`);
    event.value = response.data; // Speichert das geladene Event
  } catch (error) {
    console.error('Fehler beim Laden des Events:', error);
  }
};

onMounted(loadEvent); // Lädt die Eventdaten, wenn die Komponente gemountet wird

// Funktion zur Navigation zur TicketKaufView
const navigateToTicketKauf = () => {
  router.push({
    name: 'ticketkauf',
    query: {
      eventId: event.value.id,
      eventName: event.value.name,
      eventPrice: event.value.preis,
    },
  });
};
</script>

<template>
  <div class="event-detail-view">
    <!-- Header -->
    <Header title="Event Details" />

    <main class="event-container">
      <h1>Event Details</h1>

      <!-- Ladeanzeige -->
      <div v-if="!event">Loading...</div>

      <!-- Event anzeigen -->
      <div v-else>
        <EventCard
          :id="event.id"
          :name="event.name"
          :bild="event.bild"
          :datum="event.datum"
          :ort="event.ort"
          :bewertung="event.bewertung"
        />

        <!-- Ticket kaufen Button -->
        <button class="ticket-button" @click="navigateToTicketKauf">
          Ticket kaufen
        </button>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.event-detail-view {
  background-color: #f4f4f4; /* Hintergrundfarbe */
  color: #333; /* Textfarbe */
  min-height: 100vh; /* Mindestens die Höhe des Viewports */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.event-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.event-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.ticket-button {
  background-color: #57164a;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.ticket-button:hover {
  background-color: #7d2d6b;
}
</style>
