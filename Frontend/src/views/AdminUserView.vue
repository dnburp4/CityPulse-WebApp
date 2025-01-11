<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '@/components/Header.vue';

 // Read


 const users = ref([]);

const loadUsers = async () => {
  try {
    const response = await axios.get('/user'); 
    users.value = response.data; 
  } catch (error) {
    console.error('Fehler beim Laden der Nachrichten:', error);
  }
};
    
    const editUser = (user) => {
      console.log("User löschen:", user);
    };
    
    const deleteUser = (user) => {
      console.log("User löschen:", user);
    };

    onMounted(loadUsers);

</script>



<template>

  <Header title="Users"/>




  <table class="user-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Adresse</th>
        <th>Handy-Nummer</th>
        <th>Rolle</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ user.fullName }}</td>
        <td>{{ user.emailAddress }}</td>
        <td>{{ user.address }}</td>
        <td> {{ user.phoneNumber }}</td>
        <td>{{ user.isSuperAdmin? "Admin" : "User" }}</td>
        <td>
          <button @click="editUser(user)">Bearbeiten</button>
          <button @click="deleteUser(user)">Löschen</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>



<style>
.user-table {
  width: 100%;
  border-collapse: collapse;
}
.user-table th, .user-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
.user-table th {
  background-color: #f4f4f4;
}
</style>
