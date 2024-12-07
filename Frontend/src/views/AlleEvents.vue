<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 
import EventCard from '@/components/EventCard.vue'; 

import { ref, onMounted } from 'vue'; 
import axios from 'axios'; 


const events = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:1337/event'); 
    events.value = response.data; 
  } catch (error) {
    console.error('Fehler beim Laden der Events:', error);
  }
});
</script>

<template>

<Header title="AlleEvents"/>
 

  <div class="alle-events-view">
    
    

    <main class="events-container">
      
      <div class="event-list">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :id="event.id"
          :name="event.name"
          :bild="event.bild"
          :datum="event.datum"
          :ort="event.ort"
          :bewertung="event.bewertung"
        />
      </div>
    </main>

    
    
  </div>

  <Footer/>

</template>

<style scoped>

.alle-events-view {
  background-color: #000; 
  color: white; /* Weißer Text */
  min-height: 100vh; /* Mindestens die Höhe des Bildschirms */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Hauptinhalt */
.events-container {
  padding: 20px;
  flex: 1;
}

h1 {
  color: white;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Grid für Event-Karten */
.event-list {
  display: flex;
  flex-direction: column; /* Stapelt die EventCards untereinander */
  gap: 20px;
}
</style>