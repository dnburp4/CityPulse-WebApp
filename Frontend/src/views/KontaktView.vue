<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 


</script>




<template>
  <div class="kontakt-view">

    <Header title="Kontakt" />

    <main class="kontakt-container">
      <h1>Kontakt</h1>
      <p>Haben Sie Fragen oder benötigen Sie Hilfe? Kontaktieren Sie uns!</p>
      
      <div class="kontakt-form">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Ihr Name" />
          </div>

          <div class="form-group">
            <label for="email">E-Mail</label>
            <input type="email" id="email" placeholder="Ihre E-Mail-Adresse" />
          </div>

          <div class="form-group">
            <label for="message">Nachricht</label>
            <textarea id="message" rows="5" placeholder="Ihre Nachricht"></textarea>
          </div>

          <button type="submit">Absenden</button>
        </form>
      </div>





      <div class="map-container">
        
        <div class="contact-header">
    <div class="phone-header">
      <img src="/src/assets/telephone.png" alt="Telefon-Symbol" class="phone-icon" />
      <span class="phone-text">+49 123 456 789</span>
    </div>
    <div class="location-header">
      <img src="/src/assets/location.png" alt="Standort-Symbol" class="location-icon" />
      <span class="location-text">Alfred-Wachtel-Straße 8, 78462 Konstanz</span>
    </div>
  </div>

  <p></p>
        <div class="map">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.911438654756!2d9.170347676486456!3d47.66247297909496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa4d8ddc3b72b%3A0x9a8faec42d7c7c11!2sHTWG%20Konstanz!5e0!3m2!1sen!2sde!4v1691255574625!5m2!1sen!2sde"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.kontakt-view {
background-color: #f4f4f4;
color: #333;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
}

.kontakt-container {
padding: 20px;
max-width: 800px;
margin: 0 auto;
text-align: center;

}

.kontakt-container h1 {
font-size: 2rem;
margin-bottom: 1rem;
}

.kontakt-container p {
margin-bottom: 2rem;
font-size: 1.1rem;
}

.kontakt-form {
background: white;
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
margin-bottom: 2rem;
}

.form-group {
margin-bottom: 15px;
text-align: left;
}

.form-group label {
display: block;
margin-bottom: 5px;
font-weight: bold;
}

.form-group input,
.form-group textarea {
width: 100%;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
box-sizing: border-box;
}

button {
padding: 10px 20px;
background-color: #57164a;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
}

button:hover {
background-color: #7d2d6b;
}

.map-container {
margin-top: 2rem;
text-align: center;
}

.map-container h2 {
font-size: 1.5rem;
margin-bottom: 1rem;
}

.map {
border-radius: 8px;
overflow: hidden;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.location-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.map-container h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.phone-header, .location-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.phone-icon, .location-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  color: #0a0a0a;
}

.phone-text, .location-text {
  font-size: 1.2rem;
  font-weight: bold;
}


</style>