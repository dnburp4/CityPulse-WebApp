<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'; 
import UserCard from '@/components/UserCard.vue';

 const startEdit = (user) => {
  editUser.value = { ...user };
};

const users = ref([]);

 
const newUser = ref({
  emailAddress: '',
  password: '',
  fullName: '',
  phoneNumber: '',
  address: '',
  isSuperAdmin: false,
});

const editUser = ref(null);


const loadUsers = async () => {
  try {
    const response = await axios.get('/user'); 
    users.value = response.data; 
  } catch (error) {
    console.error('Fehler beim Userladen:', error);
  }
};



// Create
const createUser = async () => {
  try {
    await axios.post('/user', newUser.value);
    alert('Neues User erfolgreich erstellt');
    loadUsers(); 
    newUser.value = {
      emailAddress: '',
      password: '',
      fullName: '',
      phoneNumber: '',
      address: '',
      isSuperAdmin: false,
    };
  } catch (error) {
    console.error('Fehler beim Erstellen des Users:', error);
  }
}; 


// Delete 
const deleteUser = async (id) => {
  try {
    await axios.delete(`/user/${id}`);
    alert('User erfolgreich gelöscht');
    loadUsers(); 
  } catch (error) {
    console.error('Fehler beim Löschen des Users:', error);
  }
};

// Update
const updateUser = async () => {
  if (!editUser.value) return;
  try {
    await axios.put(`/user/${editUser.value.id}`, editUser.value);
    alert('User erfolgreich aktualisiert');
    loadUser(); 
    editUser.value = null; 
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Users:', error);
  }
};

    onMounted(loadUsers);

</script>



<template>
  <Header title="Welcome Administrator!" />



<!-- Artikel von News erstellen -->
<div class="forms-container">
  <h2>Neuen Benutzer erstellen</h2>
  <form @submit.prevent="createUser">
    <input v-model="newUser.emailAddress" type="email" placeholder="Email" required />
    <input v-model="newUser.password" type="password" placeholder="Passwort" required />
    <input v-model="newUser.fullName" type="text" placeholder="Vollständiger Name" required />
    <input v-model="newUser.phoneNumber" type="text" placeholder="Telefonnummer" />
    <input v-model="newUser.address" type="text" placeholder="Adresse" />
    
    <!-- Checkbox für Admin-Status -->
    <label>
      <input type="checkbox" v-model="newUser.isSuperAdmin" />
      Super Admin
    </label>

    <button type="submit">Erstellen</button>
  </form>
</div>


<!-- Edit User -->
<section v-if="editUser">
  <h2>Benutzer bearbeiten</h2>
  <form @submit.prevent="updateUser">
    <input v-model="editUser.emailAddress" type="email" placeholder="E-Mail-Adresse" required />
    <input v-model="editUser.fullName" type="text" placeholder="Name des Benutzers" required />
    <input v-model="editUser.phoneNumber" type="text" placeholder="Telefonnummer" />
    <input v-model="editUser.address" type="text" placeholder="Adresse" />
    
    <!-- Checkbox für Admin-Status -->
    <label>
      <input type="checkbox" v-model="editUser.isSuperAdmin" />
      Super Admin
    </label>

    <button type="submit">Speichern</button>
    <button type="button" @click="editUser = null">Abbrechen</button>
  </form>
</section>



    <main class="users-container">
      <div class="user-list">
        <UserCard
          v-for="user in users"
          :key="user.id"
          :nameUser="user.fullName"
          :emailUser="user.emailAddress"
          :handynummer="user.phoneNumber"
          :adresse="user.address"
          :isSuperAdmin="user.isSuperAdmin"
          :functionDelete="() => deleteUser(user.id)"
          :functionEdit="() => startEdit(user)"
        />
      </div>
    </main>
  

  <Footer />
</template>



<style>


.alle-news-view {
  background-color: #000; 
  color: white; 
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-container {
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  padding: 20px;
}

.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}


</style>
