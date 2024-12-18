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
</style>