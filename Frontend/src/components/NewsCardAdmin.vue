
<template>
    <div class="news-card">
      <img :src="bild" alt="news image" />
      
      <div class="news-card-text">
        <h2>{{ newsTitle }}</h2>
        <p>{{ newsContent }}</p>
      </div>
  
      <button @click="functionDelete">Löschen</button>
      <button @click="functionEdit">Bearbeiten</button>
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
    background-color: #8e5e7f;
    border-radius: 50px;
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
    
  }
  
  .news-card-text h2 {
    color: white;
    text-decoration: none;
  }
  
  .news-card-text h2:hover {
    text-decoration: underline;
    color: #ffd700;
  }
  </style>
  