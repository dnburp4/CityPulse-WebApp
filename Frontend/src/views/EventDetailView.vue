<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import EventCard from '@/components/EventCard.vue'; 

const route = useRoute(); 
const event = ref(null); 


const loadEvent = async () => {
  try {
    const response = await axios.get(`http://localhost:1337/event/${route.params.id}`);
    event.value = response.data; 
  } catch (error) {
    console.error('Fehler beim Laden des Events:', error);
  }
};

onMounted(loadEvent); 
</script>



<template>
  <div class="event-detail-view">
   
    <Header title="Event Details" />


    <main class="event-container">
      <h1>Event Details</h1>

 
      <div v-if="!event">Loading...</div>

   
      <div v-else>
       
        <EventCard
          :id="event.id"
          :name="event.name"
          :bild="event.bild"
          :datum="event.datum"
          :ort="event.ort"
          :bewertung="event.bewertung"
        />
      </div>
    </main>

    
    <Footer />
  </div>
</template>


<style scoped>
.event-detail-view {
  background-color: #f4f4f4; 
  color: #333; 
  min-height: 100vh; 
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
</style>

