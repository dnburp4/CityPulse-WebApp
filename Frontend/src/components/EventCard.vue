<template>
  <div class="event-card">
    <img :src="bild" alt="event image" />
    
    <!-- Details -->
    <div class="event-card-text">
      <h2>
        <RouterLink :to="`/event/${id}`" class="event-link">{{ name }}</RouterLink>
      </h2>

      <div class="event-details">
        <div class="event-detail">
          <img src="@/assets/calender.svg" alt="date" class="icon" />
          <p>Datum: {{ datum }}</p>
        </div>
        <div class="event-detail">
          <img src="@/assets/location.svg" alt="location" class="icon" />
          <i>Ort: {{ ort }}</i>
        </div>
      </div>
    </div>

    <!-- Bewertung -->
    <div class="review-container">
      <img
        v-for="n in Array(bewertung).fill(0)"
        :key="n"
        src="@/assets/star-fill.svg"
        alt="reviews"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    bild: String,
    datum: String,
    ort: String,
    bewertung: Number,
  },
};
</script>

<style scoped>
.event-card {
  background-color: #57164a;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
}

.event-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.event-card-text {
  padding: 30px;
  font-family: 'Rubik', sans-serif;
}

.event-card h2 {
  margin: 0 0 10px;
}

.event-card .event-link {
  color: white;
  text-decoration: none;
}

.event-card .event-link:hover {
  text-decoration: underline;
  color: #ffd700;
}

.event-details {
  display: flex;
  flex-direction: column;
  align-items: center; /* Zentriert die Inhalte horizontal */
  gap: 10px;
  margin-top: 15px;
}

.event-detail {
  display: flex;
  align-items: center;
  gap: 10px;
}

.event-detail p,
.event-detail i {
  color: white;
  text-align: center; /* Text wird horizontal in der Mitte ausgerichtet */
  margin: 0; /* Entfernt Abstände */
}

.event-detail .icon {
  width: 20px;
  height: 20px;
}

.review-container {
  margin-top: 20px;
}

.review-container img {
  width: 20px;
  height: 20px;
  align-items: center;
  margin-bottom: 20px;
}
</style>
