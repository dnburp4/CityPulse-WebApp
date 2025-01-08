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
    const response = await axios.get('http://localhost:1337/news'); 
    news.value = response.data; 
  } catch (error) {
    console.error('Fehler beim Laden der Events:', error);
  }
});

  // {
  //   newsTitle: "Cultural Extravaganza at the Annual Arts Festival",
  //   newsContent: "The Annual Arts Festival showcased a vibrant mix of music, dance, and theater, celebrating diverse cultures from around the world.", 
  //   bild: "/src/assets/images/job.jpg"

  // },
  // {
  //   newsTitle: "Diwali Celebrations Light Up the City",
  //   newsContent: "This year's Diwali festival was marked by spectacular fireworks, traditional sweets, and colorful rangoli decorations, bringing joy to the community.", 
  //   bild: "/src/assets/images/job.jpg"

  // },
  // {
  //   newsTitle: "Oktoberfest: A Celebration of Bavarian Traditions",
  //   newsContent: "Oktoberfest attracted thousands of visitors who enjoyed traditional German beer, food, and folk music in a lively atmosphere.", 
  //   bild: "/src/assets/images/job.jpg"

  // },
  // {
  //   newsTitle: "Carnival Parade Brings Color and Joy",
  //   newsContent: "The annual Carnival parade featured elaborate costumes, vibrant floats, and energetic performances, drawing crowds from all over the city.",
  //   bild: "/src/assets/images/job.jpg"

  // },
  // {
  //   newsTitle: "New Year's Eve Party at the Grand Plaza",
  //   newsContent: "The Grand Plaza hosted a spectacular New Year's Eve party with live music, dancing, and a breathtaking fireworks display to ring in the new year.", 
  //   bild: "/src/assets/images/job.jpg"
  // }




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
