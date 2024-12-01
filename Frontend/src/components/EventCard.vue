<template>
    <div class="event-card">
      
        <img :src="bild" alt="event image" />
  
      <!-- Details -->
      <div class="event-card-text">

        <h2>{{ name }}</h2>

        <img src="@/assets/calender.svg" alt="date" />
        <p>Datum: {{ datum }}</p>
        <img src="@/assets/location.svg" alt="location" />
        <i>Ort: {{ ort }}</i>

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
        id:String,
      name: String, 
      bild: String, 
      datum: String, 
      ort: String, 
      bewertung: Number, 
    },
  };
  </script>
  
  <style>
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
  
  .event-card-text img {
    width: 20px;
    height: 20px;
    float: left;
  }
  
  .event-card h2 {
    color: white;
    text-decoration: none;
  }
  
  .event-card h2:hover {
    text-decoration: underline;
    color: #ffd700;
  }
  
  .review-container img {
    width: 20px;
    height: 20px;
    align-items: center;
    margin-bottom: 20px;
  }
  </style>
  