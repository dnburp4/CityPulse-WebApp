<script setup>
import EventCard from '@/components/EventCard.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Footer from '@/components/Footer.vue';


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
  
  <main class="content">
    <div class="events-container">
      
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
  <Footer/>
</template>

<style>

.content {
  background-color: black;
  color: white;
  padding: 20px;
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 1); 
}

.events-container {
  margin-top: 30px;
  display: grid;
  gap: 20px;
  padding: 30px;
  padding-top: 80px;
}


@media (max-width: 768px) {
  .events-container {
    grid-template-columns: 1fr; /* 1 Spalte für Handy */
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .events-container {
    grid-template-columns: repeat(3, 1fr); /* Drei Spalten Tablets */
  }
}

@media (min-width: 992px) {
  .events-container {
    grid-template-columns: repeat(4, 1fr); /* Vier Spalten im Desktop */
  }
}
</style>
