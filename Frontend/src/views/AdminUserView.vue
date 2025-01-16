<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'; 
import UserCard from '@/components/UserCard.vue';

 const startEdit = (user) => {
  editUser.value = { ...user };
  window.scrollTo(0, 0)
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
    loadUsers(); 
    editUser.value = null; 
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Users:', error);
  }
};

    onMounted(loadUsers);

</script>



<template>
  <Header title="User Verwaltung" />






<!-- Artikel von News erstellen -->
<div class="forms-container">


<section v-if="!editUser">
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

    <button class="btn-post-user" type="submit">Erstellen</button>
  </form>

</section>




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

    <button class="btn-white" type="submit" >Speichern</button>
    <button class="btn-red" type="button" @click="editUser = null">Abbrechen</button>
  </form>
</section>

</div> <!-- forms-container -->


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


.users-view {
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
  gap: 10px;
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
  width: 90%; 
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ddd; 
  font-size: 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05); 
  transition: border-color 0.3s ease, box-shadow 0.3s ease; 
}


.forms-container input:focus {
  border-color: #4caf50; 
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.4); 
  outline: none; 
}

/* Container für das Label und die Checkbox zentrieren */
.forms-container label {
  display: flex;
  align-items: center; /* Vertikal zentrieren */
  justify-content: center; /* Horizontal zentrieren */
  margin: 15px; /* Mehr Abstand zum restlichen Inhalt */
  cursor: pointer; /* Mache das Label klickbar */
  text-align: center; /* Text innerhalb des Labels zentrieren */
}

/* Checkbox Styling */
.forms-container label input {
  width: 20px; /* Größere Checkbox */
  height: 20px;
  margin: 10px; /* Abstand zwischen der Checkbox und dem Text */
  cursor: pointer; /* Mache die Checkbox klickbar */
  transition: background-color 0.3s ease;
}

/* Hover-Effekt auf die Checkbox */
.forms-container label:hover input {
  background-color: #4caf50;
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


.btn-post-user {
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


.btn-post-user:hover {
  background-color: #732d91; 
}



</style>
