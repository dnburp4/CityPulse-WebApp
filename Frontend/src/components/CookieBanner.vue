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
  width: 100%; /* Der Banner soll immer die volle Breite des Bildschirms einnehmen */
  background-color: rgba(0, 0, 0, 0.9); /* Dunkler Hintergrund mit Transparenz */
  color: #fff;
  padding: 15px; /* Verhindert, dass Elemente an den Rand stoßen */
  box-sizing: border-box; /* Padding wird in die Breite einberechnet */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5); /* Schatteneffekt */
  display: flex;
  flex-wrap: wrap; /* Ermöglicht Zeilenumbruch bei kleinen Bildschirmen */
  justify-content: space-between;
  align-items: center;
  z-index: 1000; /* Immer im Vordergrund */
  font-size: 0.95rem;
  line-height: 1.5;
}

.cookie-banner p {
  margin: 0;
  flex: 1; /* Passt sich an den verfügbaren Platz an */
  text-align: left; /* Text linksbündig für größere Bildschirme */
  word-wrap: break-word; /* Bricht lange Wörter, damit sie nicht über den Bildschirm hinausgehen */
  overflow-wrap: break-word;
}

.cookie-banner a {
  color: #57164a; /* Linkfarbe */
  text-decoration: underline;
  margin-left: 5px;
  transition: color 0.3s ease;
}

.cookie-banner a:hover {
  color: #9b478c; /* Hellerer Ton beim Hover */
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
  background-color: #9b478c; /* Hellerer Ton beim Hover */
}

/* Responsives Design */
@media (max-width: 768px) {
  .cookie-banner {
    flex-direction: column; /* Inhalte untereinander anordnen */
    padding: 10px; /* Kleinere Abstände für mobile Geräte */
    text-align: center;
  }

  .cookie-banner p {
    text-align: center; /* Zentrierter Text */
    margin-bottom: 10px; /* Abstand unterhalb des Textes */
  }

  .cookie-button {
    width: 100%; /* Der Button nimmt die gesamte Breite ein */
    margin: 0; /* Kein zusätzlicher Abstand */
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .cookie-banner {
    padding: 15px 20px; /* Angemessene Abstände auf mittleren Bildschirmen */
  }

  .cookie-button {
    margin-top: 0; /* Kein vertikaler Abstand */
    margin-right: 10px; /* Leichter Abstand nach rechts */
  }
}
</style>


