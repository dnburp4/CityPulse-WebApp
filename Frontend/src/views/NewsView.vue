<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 
import NewsCard from '@/components/NewsCard.vue'; 
import axios from 'axios';



import { onMounted, ref } from 'vue';

// Define news items
const news = ref([]);

//read
onMounted(async () => {
  try {
    const response = await axios.get('/news'); 
    news.value = response.data; 
  } catch (error) {
    console.error('Fehler beim Laden der Events:', error);
  }
});

 

</script>

<template>
  <Header title="Alle News" />

  <div class="alle-news-view">

  <main class="news-container">
    <div class="news-list">
      <NewsCard
        v-for="article in news.slice().reverse()"
        :key="article"
        :newsTitle="article.name"
        :newsContent="article.description"
        :bild="article.bild"
      />
    </div>
  </main>

    </div>


  <Footer />
</template>

<style scoped>


.alle-news-view {
  background-color: #000; 
  color: white; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.news-container {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  padding: 20px;

}

.news-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}


.news-list {
  display: grid;
  grid-template-columns: 1fr; /* Auf kleinen Bildschirmen immer eine Karte pro Reihe */
  gap: 20px; /* Abstand zwischen den Karten */
}


@media (max-width: 768px) {
  .news-list {
    grid-template-columns: 1fr; /* 1 Spalte für Handy */
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .news-list {
    grid-template-columns: repeat(2, 1fr); /* Zwei Spalten Tablets */
  }
}

@media (min-width: 992px) {
  .news-list {
    grid-template-columns: repeat(3, 1fr); /* Drei Spalten im Desktop */
  }
}

</style>
