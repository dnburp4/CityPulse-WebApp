<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 
import NewsCardAdmin from '@/components/NewsCardAdmin.vue';
import axios from 'axios';


const startEdit = (article) => {
  editArticle.value = { ...article };
};


const news = ref([]);
const newArticle = ref({
  name: '',
  description: '',
  bild: '',
});
const editArticle = ref(null);

// Read
const loadNews = async () => {
  try {
    const response = await axios.get('/news'); 
    news.value = response.data; 
  } catch (error) {
    console.error('Fehler beim Laden der Nachrichten:', error);
  }
};

// Create
const createArticle = async () => {
  try {
    await axios.post('/news', newArticle.value);
    alert('Artikel erfolgreich erstellt');
    loadNews(); 
    newArticle.value = {
      name: '',
      description: '',
      bild: '',
    };
  } catch (error) {
    console.error('Fehler beim Erstellen des Artikels:', error);
  }
}; 

// Delete 
const deleteArticle = async (id) => {
  try {
    await axios.delete(`/news/${id}`);
    alert('Artikel erfolgreich gelöscht');
    loadNews(); 
  } catch (error) {
    console.error('Fehler beim Löschen des Artikels:', error);
  }
};

// Update
const updateArticle = async () => {
  if (!editArticle.value) return;
  try {
    await axios.put(`/news/${editArticle.value.id}`, editArticle.value);
    alert('Artikel erfolgreich aktualisiert');
    loadNews(); 
    editArticle.value = null; 
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Artikels:', error);
  }
};

onMounted(loadNews);
</script>

<template>
  <Header title="Welcome Administrator!" />

  <div class="alle-news-view">
    <!-- Artikel von News erstellen -->
    <div class="forms-container">
      <h2>Neuen Artikel erstellen</h2>
      <form @submit.prevent="createArticle">
        <input v-model="newArticle.name" type="text" placeholder="Name" required />
        <input v-model="newArticle.description" type="text" placeholder="Beschreibung" required />
        <input v-model="newArticle.bild" type="text" placeholder="Bild URL" />
        <button type="submit">Erstellen</button>
      </form>
    </div>

    <!-- Update -->
    <section v-if="editArticle">
      <h2>Artikel bearbeiten</h2>
      <form @submit.prevent="updateArticle">
        <input v-model="editArticle.name" type="text" placeholder="Titel des Artikels" required />
        <input v-model="editArticle.description" type="text" placeholder="Inhalt" required />
        <input v-model="editArticle.bild" type="text" placeholder="Bild-URL" />
        <button type="submit">Speichern</button>
        <button type="button" @click="editArticle = null">Abbrechen</button>
      </form>
    </section>

    <main class="news-container">
      <div class="news-list">
        <NewsCardAdmin
          v-for="article in news"
          :key="article.id"
          :newsTitle="article.name"
          :newsContent="article.description"
          :bild="article.bild"
          :functionDelete="() => deleteArticle(article.id)"
          :functionEdit="() => startEdit(article)"
        />
      </div>
    </main>
  </div>

  <Footer />
</template>

<style scoped>
.alle-news-view {
  background-color: #000; 
  color: white; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.news-container {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  padding: 20px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.forms-container {
  display: block;
  justify-content: center;
  padding: 20px;
}
</style>