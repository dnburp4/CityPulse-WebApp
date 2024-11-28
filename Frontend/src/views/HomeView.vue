<script setup>

import EventCard from '@/components/EventCard.vue';


let events = [
  {
    "id": "01",
    "name": "Tomorrowland",
    "bild": "test",
    "datum": "test",
    "Typ": "test",
    "Preis": "10",
    "Bewertung": "test"
  },
  {
    "id": "01",
    "name": "Tomorrowland",
    "bild": "test",
    "datum": "test",
    "Typ": "test",
    "Preis": "10",
    "Bewertung": "test"
  }
]

</script>

<template>


 <!--schwarzer Hintergrund -->
 <main class="content">        
  <div class="events-container">

    <EventCard />


    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />

  </div>

</main>
    
  
</template>





<style>



/* Style von Veranstaltungen */
.content {
    background-color: black;
    color: white;
    padding: 20px;
    box-shadow: 0px -10px 20px rgba(0, 0, 0, 1); /* Schatten am oberen Rand für direkten Übergang */
}

.events-container {
    margin-top: 30px;
    display: grid;
    gap: 20px;
    padding: 20px;

}



/* Grid responsive */
@media (max-width: 768px) {
    .events-container {
        grid-template-columns: 1fr; /* 1 Spalte für Handy */
    }
}

@media (min-width: 768px) and (max-width: 992px) {
    .events-container {
        grid-template-columns: repeat(3, 1fr); /* Drei Spalten Tablets */
    }
}

@media (min-width: 992px) {
    .events-container {
        grid-template-columns: repeat(4, 1fr); /* Sech Spalten im Desktop */
    }
}


</style>