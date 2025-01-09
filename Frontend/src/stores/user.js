import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, // Speichert die Benutzerinformationen
    userId: null, // Speichert die Benutzer-ID
    isSuperAdmin: null, // Gibt an, ob der Benutzer ein SuperAdmin ist
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
        console.error("Anmeldung fehlgeschlagen:", error.response?.data || error.message);
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
  },
});
