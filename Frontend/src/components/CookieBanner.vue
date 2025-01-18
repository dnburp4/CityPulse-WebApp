<template>
    <div v-if="!cookiesAccepted" class="cookie-banner">
      <p>
        Diese Website verwendet technische Cookies, um die bestmögliche Erfahrung zu bieten.
        <RouterLink to="/datenschutz">Datenschutzerklärung</RouterLink>.
      </p>
      <button @click="acceptCookies" class="cookie-button">Akzeptieren</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cookiesAccepted: false,
      };
    },
    mounted() {
      // Prüfen ob Cookies bereits akzeptiert wurden
      this.cookiesAccepted = localStorage.getItem("cookiesAccepted") === "true";
    },
    methods: {
      acceptCookies() {
        // Speichern der Zustimmung und ausblenden des Banners
        localStorage.setItem("cookiesAccepted", "true");
        this.cookiesAccepted = true;
      },
    },
  };
  </script>
  
  <style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%; 
  background-color: rgba(0, 0, 0, 0.9); 
  color: #fff;
  padding: 15px; 
  box-sizing: border-box; 
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5); 
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  align-items: center;
  z-index: 1000; 
  font-size: 0.95rem;
  line-height: 1.5;
}

.cookie-banner p {
  margin: 0;
  flex: 1; 
  text-align: left; 
  word-wrap: break-word; 
  overflow-wrap: break-word;
}

.cookie-banner a {
  color: #57164a; 
  text-decoration: underline;
  margin-left: 5px;
  transition: color 0.3s ease;
}

.cookie-banner a:hover {
  color: #9b478c; 
}

.cookie-button {
  background-color: #57164a;
  color: #fff;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.cookie-button:hover {
  background-color: #9b478c; 
}

/* Responsives Design */
@media (max-width: 768px) {
  .cookie-banner {
    flex-direction: column; 
    padding: 10px; 
    text-align: center;
  }

  .cookie-banner p {
    text-align: center; 
    margin-bottom: 10px; 
  }

  .cookie-button {
    width: 100%; 
    margin: 0; 
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .cookie-banner {
    padding: 15px 20px; 
  }

  .cookie-button {
    margin-top: 0; 
    margin-right: 10px; 
  }
}
</style>


