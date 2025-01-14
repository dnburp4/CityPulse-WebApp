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
        v-for="article in news"
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
