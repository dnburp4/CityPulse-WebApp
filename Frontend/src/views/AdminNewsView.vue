<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 
import NewsCardAdmin from '@/components/NewsCardAdmin.vue';
import axios from 'axios';


const startEdit = (article) => {
  editArticle.value = { ...article };
  window.scrollTo(0, 0)
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
  <Header title="News bearbeiten" />

  <div class="alle-news-view">



        <!-- Artikel von News erstellen -->
    <div class="forms-container" v-if="!editArticle">
      <h2>Neuen Artikel schreiben</h2>
      <form @submit.prevent="createArticle">
        <input v-model="newArticle.name" type="text" placeholder="Name" required />
        <textarea v-model="newArticle.description" placeholder="Beschreibung" id="big-content"rows="5" required></textarea>
        <input v-model="newArticle.bild" type="text" placeholder="Bild URL" />
        <button class="btn-post-art" type="submit">Erstellen</button>
      </form>

    </div>



    <!-- Update -->
    <div class="forms-container" v-if="editArticle">
      <h2>Artikel bearbeiten</h2>
      <form @submit.prevent="updateArticle">
        <input v-model="editArticle.name" type="text" placeholder="Titel des Artikels" required />
        <textarea v-model="editArticle.description" placeholder="Beschreibung" id="big-content"rows="5" required></textarea>
        <input v-model="editArticle.bild" type="text" placeholder="Bild-URL" />

        <button class="btn-white" type="submit">Speichern</button>
        <button class="btn-red" type="button" @click="editArticle = null">Abbrechen</button>
      </form>
    </div>


    <main class="news-container">
      <div class="news-list">
        <NewsCardAdmin
        v-for="article in news.slice().reverse()"
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

<style>


.alle-news-view {
  background-color: rgb(255, 255, 255); 
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
  flex-wrap: wrap; /* Für responsive Anzeige */
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.forms-container {
  background-color: #f5f5f5; 
  padding: 25px;
  border-radius: 12px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  max-width: 300px; 
  margin: 40px auto; 
  text-align: center; 
}

.forms-container h2{
  color: #000000;


}

.forms-container input,
.forms-container textarea {
  width: 85%; 
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ddd; 
  font-size: 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05); 
  transition: border-color 0.3s ease, box-shadow 0.3s ease; 
}

.forms-container input:focus,
.forms-container textarea:focus {
  border-color: #4caf50; 
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.4); 
  outline: none; 
}

#big-content {
  height: 200px; 
  resize: none; 
}

.btn-white {
  background-color: #ffffff; 
  color: #000000; 
  border: none; 
  font-weight: bold;
  padding: 12px 30px; 
  border-radius: 50px; 
  font-size: 1.2rem; 
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-family: "Rubik", sans-serif;
  margin: 10px;
  cursor: pointer;

}

.btn-red {
  background-color: #c43f3f;
  color: #000000;
  border: none;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
  transition: background-color 0.3s ease;
  margin: 10px;
  cursor: pointer;
}

.btn-red:hover {
  background-color: #732d91;
}

.btn-white:hover {
  background-color: #732d91; 
}


.btn-post-art {
  background-color: #8BC34A;
  color: #000000;
  border: none;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
  transition: background-color 0.3s ease;
  margin: 10px;
  cursor: pointer;
}


.btn-post-art:hover {
  background-color: #732d91; 
}


</style>