import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, // Speichert die Benutzerinformationen
    userId: null, // Speichert die Benutzer-ID
    isSuperAdmin: null, // Gibt an ob der Benutzer ein SuperAdmin ist
  }),

  getters: {
    // Getter für reaktiven Zugriff auf die Benutzer-ID und den SuperAdmin-Status
    getUserId: (state) => state.userId,
    getIsSuperAdmin: (state) => state.isSuperAdmin,
  },

  actions: {
    // Methode zum Einloggen
    async signIn(email, password) {
      const loginInformation = {
        emailAddress: email,
        password: password,
      };
    
      try {
        const response = await axios.post("/login", loginInformation);
        this.user = response.data; // Speichert die Benutzerdaten
        this.userId = response.data.id; // Speichert die Benutzer-ID
        this.isSuperAdmin = response.data.isSuperAdmin; // Setzt den SuperAdmin-Status
        router.push("/"); // Weiterleitung zur Startseite nach erfolgreichem Login
      } catch (error) {
        console.error("Fehler-Response:", error.response); // Logge die komplette Fehlerantwort
        if (error.response) {
          const status = error.response.status;
          const message = error.response.data.message;
    
          if (status === 404) {
            throw new Error(message || "Diese E-Mail-Adresse existiert nicht.");
          } else if (status === 401) {
            throw new Error(message || "Das eingegebene Passwort ist falsch.");
          } else {
            throw new Error(message || "Unbekannter Fehler. Bitte versuchen Sie es erneut.");
          }
        } else {
          throw new Error("Netzwerk- oder Serverfehler. Bitte versuchen Sie es später erneut.");
        }
      }
    },    
    
    

    // Methode zum Registrieren
    async signUp(email, password, fullName, phoneNumber, address) {
      const registerInformation = {
        emailAddress: email,
        password: password,
        fullName: fullName,
        phoneNumber: phoneNumber,
        address: address,
      };

      try {
        const response = await axios.post("/user", registerInformation);
        this.user = response.data; // Speichert die Registrierungsdaten
        router.push("/login"); // Weiterleitung zur Login-Seite nach erfolgreicher Registrierung
      } catch (error) {
        console.error("Registrierung fehlgeschlagen:", error.response?.data || error.message);
      }
    },

    // Methode zum Laden der Benutzerdaten vom Server
    async loadUserData() {
      try {
        const response = await axios.get("/user"); // Holt die Benutzerdaten vom Server
        const user = response.data.find((user) => user.id === this.userId); // Sucht die Daten des aktuellen Benutzers
        if (user) {
          this.user = user;
          this.isSuperAdmin = user.isSuperAdmin; // Aktualisiert den SuperAdmin-Status
        }
      } catch (error) {
        console.error("Fehler beim Laden der Benutzerdaten:", error.response?.data || error.message);
      }
    },


    logout() {
      this.user = null;
  }
  },
});
