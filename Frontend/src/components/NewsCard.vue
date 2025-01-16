

<template>
  <div class="news-card">
    <img :src="bild" alt="news image" />
   

    <div class="news-card-text">
      <h2>{{ newsTitle }}</h2>
      <p>{{ newsContent }}</p>
    </div>



      </div>
</template>



<script setup>
defineProps({
  newsTitle: { 
    type: String, 
    required: true 
  }, 
  newsContent: {
    type: String, 
    required: true
  }, 
  bild: {
    type:String
  }
});
</script>

<style scoped>
.news-card {
  background-color: #3c8178;
  border-radius: 15px;
  text-align: center;
  overflow: hidden;
}

.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.news-card-text {
  padding: 30px;
  font-family: 'Rubik', sans-serif;
  text-align: left; /* Text linksbündig */
  line-height: 1.4; /* Zeilenhöhe für besseren Lesefluss */
  color: white;
}




</style>
