<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import EventCard from '@/components/EventCard.vue';
import { ref } from 'vue';

const events = ref([
  { id: 1, name: 'Tomorrowland Experience', bild: '@/assets/tomorrowland.jpg', datum: 'Di, 05. Nov', ort: 'HTWG Konstanz', bewertung: 5 },
  { id: 2, name: 'Piñata & Cake', bild: '@/assets/event2.jpg', datum: 'Mi, 06. Nov', ort: 'HTWG Konstanz', bewertung: 4 },
  // Weitere Events ...
]);
</script>

<template>
  <div class="events-page">
    <!-- Header -->
    <Header title="AlleEvents" />

    <!-- Content -->
    <main class="events-content">
      <div class="events-container">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :name="event.name"
          :bild="event.bild"
          :datum="event.datum"
          :ort="event.ort"
          :bewertung="event.bewertung"
        />
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.events-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.events-content {
  flex: 1;
  padding: 20px;
  background-color: black;
  color: white;
}

.events-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
