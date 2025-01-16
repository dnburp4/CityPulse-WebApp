
<template>
    <div class="news-card">
      <img :src="bild" alt="news image" />
      
      <div class="news-card-text">
        <h2>{{ newsTitle }}</h2>
        <p>{{ newsContent }}</p>
      </div>
  

      <div class="button-container-news">
      <button @click="functionEdit" class="btn-white-bearbeiten-news">Bearbeiten</button>
      <button @click="functionDelete" class="btn-delete-news">Löschen</button>
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
      type: String
    }, 
    functionDelete: {
      type: Function, 
      required: true
    },
    functionEdit: {
      type: Function, 
      required: true
    }
  });
  </script>
  
  <style scoped>
  .news-card {
    background-color: #3c8178;
    border-radius: 15px;
    text-align: center;
    overflow: hidden;
    align-items: center;
  
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
  color: white;
  text-align: left; /* Text linksbündig */
  line-height: 1.4; /* Zeilenhöhe für besseren Lesefluss */
}
  
  .news-card-text h2 {
    color: white;
    text-decoration: none;
  }


  .button-container-news {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
}

.btn-white-bearbeiten-news,
.btn-delete-news {
  margin: 5px 0; 
}


  .btn-white-bearbeiten-news {
  background-color: #ffffff; 
  color: #000000; 
  border: none; 
  font-weight: bold;
  padding: 12px 30px; 
  border-radius: 50px; 
  font-size: 1.2rem; 
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-family: "Rubik", sans-serif;
  margin: 10px;
  cursor: pointer;
}

.btn-delete-news {
  background-color: #ff0000;
  color: #000000;
  border: none;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
  transition: background-color 0.3s ease;
  margin: 10px;
  cursor: pointer;

}

.btn-delete-news:hover {
  background-color: #732d91;
}

.btn-white-bearbeiten-news:hover {
  background-color: #732d91; 
}
  
  </style>
  