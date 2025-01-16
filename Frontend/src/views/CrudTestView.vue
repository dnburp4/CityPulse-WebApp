<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

//Hilft die Daten aus dem geklickten Event zu nehmen und scrollt zu dem form 
const startEdit = (event) => {
  editEvent.value = { ...event };
  window.scrollTo(0, 0)
};

const events = ref([]); 
const newEvent = ref({
  id: '',
  name: '',
  bild: '',
  datum: '',
  typ: '',
  preis: '',
  bewertung: 1,
  ort: '',
});

const editEvent = ref(null); 

//read
const loadEvents = async () => {
  try {
    const response = await axios.get('/event');
    events.value = response.data;
  } catch (error) {
    console.error('Fehler beim Laden der Events:', error);
  }
};

//create
const createEvent = async () => {
  try {
    await axios.post('/event', newEvent.value);
    alert('Event erfolgreich erstellt');
    loadEvents(); 
    newEvent.value = {
      id: '',
      name: '',
      availableTickets: '', 
      bild: '',
      datum: '',
      typ: '',
      preis: '',
      bewertung: 1,
      ort: '',
    };
  } catch (error) {
    console.error('Fehler beim Erstellen des Events:', error);
  }
};

//update
const updateEvent = async () => {
  if (!editEvent.value) return;
  try {
    await axios.put(`/event/${String(editEvent.value.id)}`, editEvent.value);

    alert('Event erfolgreich aktualisiert');
    loadEvents(); 
    editEvent.value = null; 
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Events:', error);
  }
};

//delete
const deleteEvent = async (id) => {
  try {
    await axios.delete(`/event/${id}`);
    alert('Event erfolgreich gelöscht');
    loadEvents(); 
  } catch (error) {
    console.error('Fehler beim Löschen des Events:', error);
  }
};

onMounted(loadEvents);
</script>




<template>
<Header title="Events bearbeiten" />


  <div class="crud-test-view">
  
    <!--create -->
    <section v-if="!editEvent">
      <h2>Neues Event erstellen</h2>
      <form @submit.prevent="createEvent">
        <input v-model="newEvent.id" type="text" placeholder="id" required />
        <input v-model="newEvent.name" type="text" placeholder="Name" required />
        <input v-model="newEvent.availableTickets" type="number" placeholder="Verfügbare Tickets || Dieser Wert ist fest und kann nicht verändert werden" />
        <input v-model="newEvent.bild" type="text" placeholder="/src/assets/images/" />
        <input v-model="newEvent.datum" type="text" placeholder="Datum" />

        
        <select v-model="newEvent.typ">

        <option value="" disabled selected hidden>Typ der Veranstaltung wählen</option>
        <option value="Konzert">Konzert</option>
        <option value="Theater">Theater</option>
        <option value="Familie">Familie</option>
        <option value="Club">Club</option>
        <option value="Fasching">Fasching</option>
        <option value="Sport">Sport</option>

        </select>


        <input v-model="newEvent.preis" type="text" placeholder="Preis" />
        <input v-model="newEvent.bewertung" type="number" min="1" max="5" placeholder="Bewertung" />
        <input v-model="newEvent.ort" type="text" placeholder="Ort" />
        <button type="submit">Erstellen</button>
      </form>
    </section>

    <!--update-->
    <section v-if="editEvent">
      <h2>Event bearbeiten</h2>
      <form @submit.prevent="updateEvent">
        <input v-model="editEvent.id" type="text" placeholder="id" required />
        <input v-model="editEvent.name" type="text" placeholder="Name" required />
        <input v-model="editEvent.bild" type="text" placeholder="Bild-URL" />
        <input v-model="editEvent.datum" type="text" placeholder="Datum" />


        <select v-model="editEvent.typ">
          <option value="" disabled selected hidden>Typ der Veranstaltung wählen</option>
          <option value="Konzert">Konzert</option>
          <option value="Theater">Theater</option>
          <option value="Familie">Familie</option>
          <option value="Club">Club</option>
          <option value="Fasching">Fasching</option>
          <option value="Sport">Sport</option>
        </select>




        <input v-model="editEvent.preis" type="text" placeholder="Preis" />
        <input v-model="editEvent.bewertung" type="number" min="1" max="5" placeholder="Bewertung" />
        <input v-model="editEvent.ort" type="text" placeholder="Ort" />
        <button type="submit">Speichern</button>
        <button type="button" @click="editEvent = null">Abbrechen</button>
      </form>
    </section>

    <!--read+delete-->
    <section>
      <h2>Alle Events</h2>
      <ul>
        <li v-for="event in events" :key="event.id">
          <h3>{{ event.name }}</h3>
          <p>id: {{ event.id }}</p>
          <p>Datum: {{ event.datum }}</p>
          <p>Verfügbare Tickets: {{ event.availableTickets }}</p>
          <p>Ort: {{ event.ort }}</p>
          <p>Typ: {{ event.typ }}</p>
          <p>Preis: {{ event.preis }}€</p>
          <p>Bewertung: {{ event.bewertung }} Sterne</p>
          <button @click="startEdit(event)">Bearbeiten</button>
          <button @click="deleteEvent(event.id)">Löschen</button>
        </li>
      </ul>
    </section>
  </div>

  <Footer/>
</template>

<style scoped>
.crud-test-view {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  padding: 20px; 
}

h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

input, button, select {
  padding: 10px;
  font-size: 1rem;
}

button {
  background-color: #57164a;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #7d2d6b;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
