<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';

// Benutzer- und Eventanzahl
const userCount = ref(0);
const eventCount = ref(0);
const newsCount = ref(0);

const fetchUserCount = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/users/count');
    const data = await response.json();
    userCount.value = data.count;
  } catch (error) {
    console.error('Fehler beim Abrufen der Benutzeranzahl:', error);
  }
};

const fetchEventCount = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/events/count');
    const data = await response.json();
    eventCount.value = data.count;
  } catch (error) {
    console.error('Fehler beim Abrufen der Eventanzahl:', error);
  }
};

const fetchNewsCount = async () => {
  try {
    const response = await fetch('http://localhost:1337/api/news/count'); // API-Aufruf
    const data = await response.json();
    newsCount.value = data.count; // Newsanzahl speichern
  } catch (error) {
    console.error('Fehler beim Abrufen der Newsanzahl:', error);
  }
};

onMounted(() => {
  fetchUserCount();
  fetchEventCount();
  fetchNewsCount();
});



</script>

<template>
  <Header title="AdminCenter" />

  <main class="alle-news-view">
   
    <section class="info-section">
    
    <div class="info-box">
  <img class="icon-image" src="/src/assets/123.png" alt="Benutzer Icon" />
  <p><strong>{{ userCount }}</strong> User</p>
</div>


   
    <div class="info-box">
      <img class="icon-image" src="/src/assets/flagge.png" alt="Icon" />
      <p><strong>{{ eventCount }}</strong> Events</p>
    </div>

    
    <div class="info-box">
      <img class="icon-image" src="/src/assets/news.png" alt="Icon" />
      <p><strong>{{ newsCount }}</strong> News</p>
    </div>
  </section

    <!-- Buttons -->
    <section class="button-section">
      
      <RouterLink to="/adminUser" class="btn-custom">Users bearbeiten</RouterLink>
      <RouterLink to="/crud-test" class="btn-custom">Events bearbeiten</RouterLink>
      <RouterLink to="/AdminNews" class="btn-custom">News bearbeiten</RouterLink>
    </section>
  </main>

  <Footer />
</template>

<style scoped>

.alle-news-view {
  background-color: #000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}


.info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  gap: 15px;
}

.info-box {
  background-color: #444;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  width: 150px; 
  height: 150px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
}



.button-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
}

.btn-custom {
  background-color: #8A2BE2;
  color: #ffffff;
  padding: 15px 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 1.2rem;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  width: 100%;
  max-width: 350px;
  box-sizing: border-box;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-custom:hover {
  background-color: #5d1a97;
  transform: translateY(-5px);
}

/* Responsive Design */
@media (min-width: 768px) {
  .info-section {
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }

  .button-section {
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }

  .btn-custom {
    width: auto;
  }
}


.icon-image {
  width: 50px; /* Breite des Icons */
  height: 50px; /* Höhe des Icons */
  margin-bottom: 10px; /* Abstand zum Text */
}

</style>