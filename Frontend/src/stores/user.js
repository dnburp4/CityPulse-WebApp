import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router"; // Import the router

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async signIn(email, password) {
      const loginInformation = {
        emailAddress: email,
        password: password,
      };

      try {
        const response = await axios.post("/login", loginInformation);
        this.user = response;
        router.push("/");
      } catch (error) {
        console.error("Login failed:", error);
      }
    },


    



  },
});
