<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 
import EventCard from '@/components/EventCard.vue'; 

import { ref, onMounted } from 'vue'; 
import axios from 'axios'; 

//mann soll nach Name und nach Typ filtern können -müssen wir später noch erweitern
const events = ref([]); 
const searchParams = ref({
  name: '',
  typ: ''
}); 


const loadEvents = async () => {
  try {
    const response = await axios.get('/event/filter', { params: searchParams.value });
    events.value = response.data; 
  } catch (error) {
    console.error('Fehler beim Laden der Events:', error);
  }
};


onMounted(loadEvents);

//können wir später noch mit anderen Parametern erweitern - Aufgabe e)
const resetFilters = () => {
  searchParams.value = { name: '', typ: '' }; 
  loadEvents(); 
};
</script>

<template>

  <Header title="Alle Events"/>

  <div class="alle-events-view">

    <div class="search-form">
      <input
        v-model="searchParams.name"
        type="text"
        placeholder="Suche nach Name"
        @input="loadEvents"
      />

      
      <select v-model="searchParams.typ" @change="loadEvents">
        <option value="">Alle Typen</option>
        <option value="Konzert">Konzert</option>
        <option value="Theater">Theater</option>
        <option value="Familie">Familie</option>
        <option value="Club">Club</option>
        <option value="Fasching">Fasching</option>
        <option value="Sport">Sport</option>

        
      </select>
      <button @click="resetFilters">Filter zurücksetzen</button>
    </div>

    



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
  color: white; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.search-form {
  padding: 20px;
  background-color: #222;
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.search-form input,
.search-form select,
.search-form button {
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
}

.search-form input,
.search-form select {
  flex: 1;
  max-width: 300px;
}

.search-form button {
  background-color: #57164a;
  color: white;
  cursor: pointer;
}

.search-form button:hover {
  background-color: #7d2d6b;
}

.events-container {
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: flex-start; 
  align-items: center; 
  padding: 20px;
  min-height: auto; 
}

.event-list {
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 20px; 
  max-width: 1200px; 
  margin-top: 0; 
  width: 100%; 
  min-height: auto; 
}

</style>
