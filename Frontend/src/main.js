
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';
import App from './App.vue'
import router from './router'

if (!import.meta.env.PROD) {
    console.log("--> Development Mode");
    axios.defaults.baseURL = "http://localhost:1337";
  } else {
    console.log("--> Production Mode");
    axios.defaults.baseURL = "/";
  }

// axios.defaults.baseURL = "http://localhost:1337";
axios.defaults.withCredentials = true;

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
