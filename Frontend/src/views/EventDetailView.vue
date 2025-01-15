<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 
import EventCard from '@/components/EventCard.vue'; 
import StarRating from '@/components/StarRating.vue';
import { useUserStore } from '@/stores/user';

const route = useRoute(); // Zugriff auf die Routenparameter
const router = useRouter(); // Router für Navigation
const event = ref(null); // Speichert das aktuelle Event
const userStore = useUserStore(); // Speichert die Benutzerdaten
const userRating = ref(0); // Bewertung des Benutzers

// Lade die Daten des Events basierend auf der ID
const loadEvent = async () => {
  try {
    const response = await axios.get(`/event/${route.params.id}`);
    event.value = response.data; // Speichere die Eventdaten
  } catch (error) {
    console.error('Fehler beim Laden des Events:', error);
  }
};

// Sende die Bewertung an den Server
const updateRating = async () => {
  const feedbackData = {
    emailAddress: userStore.user?.emailAddress,
    bewertung: userRating.value,
    bewertungEventOf: event.value?.id,
  };

  console.log('Gesendete Daten:', feedbackData);

  try {
    await axios.post('/feedback', feedbackData);
    console.log('Feedback erfolgreich gesendet');
  } catch (error) {
    console.error('Fehler beim Senden des Feedbacks:', error);
  }
};

// Navigation zur Ticketkauf-Ansicht
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

onMounted(loadEvent); // Lade die Eventdaten, wenn die Komponente gemountet wird
</script>

<template>
  <div class="event-detail-view">
    <Header title="Event-Details" />

    <main class="event-container">
      <h1>Event-Details</h1>

      <div v-if="!event">Lädt...</div>

      <div v-else>
        <EventCard
          :id="event.id"
          :name="event.name"
          :bild="event.bild"
          :datum="event.datum"
          :ort="event.ort"
          :bewertung="event.bewertung"
        />

        <button class="ticket-button" @click="navigateToTicketKauf">
          Ticket kaufen
        </button>
      
        <p>Bewertung abgeben:</p>
        <!-- Sternebewertungskomponente -->

        <div class="stars-container">
          <star-rating v-model="userRating" :max-stars="5" />
        </div>
        <button id="Feedback" class="send-feedback-button" @click="updateRating">
          Feedback senden
        </button>
        
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>


#Feedback {
  background-color: #390bb9;
}
.event-detail-view {
  background-color: #000000; 
  color: #ffffff; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.stars-container {
  display: flex;
  flex-direction: column;
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

.ticket-button,
.send-feedback-button {
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

#Feedback:hover,
.ticket-button:hover {
  background-color: #7d2d6b;
}
</style>
