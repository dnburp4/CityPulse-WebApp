import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router"; // Import the router

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, // Benutzerinformationen speichern
    userId: null, // Benutzer-ID speichern
    isSuperAdmin: null, 
  }),

  actions: {
    // Login-Methode
    async signIn(email, password) {
      const loginInformation = {
        emailAddress: email,
        password: password,
      };

      try {
        const response = await axios.post("/login", loginInformation);
        this.user = response.data; // Speichert die gesamten Benutzerdaten
        this.userId = response.data.id; // Speichert nur die Benutzer-ID
        router.push("/"); // Weiterleitung nach erfolgreichem Login
      } catch (error) {
        console.error("Login fehlgeschlagen:", error);
      }
    },
    async signUp(email, password, fullName) {
      let registerInformation = {
        emailAddress: email,
        password: password,
        fullName: fullName,
      };
    
      try {
        const response = await axios.post("/user", registerInformation);
        this.user = response.data; // Speichere die Daten des Benutzers
        router.push("/restricted"); // Weiterleitung nach erfolgreichem Sign-Up
      } catch (error) {
        console.error("Sign-Up fehlgeschlagen:", error.response?.data || error.message);
      }
    
    },

    // Methode zum Laden der Benutzerdaten, wenn nötig
    async loadUserData() {
      try {
        const response = await axios.get("/user"); // Hole alle Benutzerdaten vom Server
        // Hier kannst du sicherstellen, dass nur der Benutzer mit der gespeicherten ID geladen wird
        this.user = response.data.find(user => user.id === this.userId); 
      } catch (error) {
        console.error("Fehler beim Laden der Benutzerdaten:", error);
      }
    },

    // Methode zum Abrufen nur der Benutzer-ID
    getUserId() {
      return this.userId; // Gibt die gespeicherte Benutzer-ID zurück
    }, 

    getIsSuperAdmin() {
      return this.isSuperAdmin; // Gibt an, ob der User ein Admin ist oder nicht
    }


  },
});
