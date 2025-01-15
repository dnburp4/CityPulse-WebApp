<script setup>

defineProps({
  nameUser: { 
    type: String, 
    required: true 
  }, 
  emailUser: {
    type: String, 
    required: true
  }, 
  handynummer: {
    type: String, 
    required: false
  }, 
  adresse: {
    type: String, 
    required: false
  }, 
  isSuperAdmin: {
      type: Boolean, 
      required: true
  },
  functionDelete: {
    type: Function, 
    required: true
  },
  functionEdit: {
    type: Function, 
    required: true
  }
});

</script>

<template>

    <div class="info-box-user">

      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>

      <p class="user-name">Name: {{ nameUser }}</p>
      <p class="user-email">Email: {{ emailUser }}</p>
      <p class="user-email">Handy-Nummer: {{ handynummer }}</p>
      <p class="user-email">Adresse: {{ adresse || "Nicht verfügbar" }}</p>
      <p>{{ isSuperAdmin? "Admin" : "User" }}</p>

    <button @click="functionDelete">Löschen</button>
    <button @click="functionEdit">Bearbeiten</button>

    </div>

</template>

<style scoped>

.info-box-user {
  background-color: #6c3483;
  color: rgb(255, 255, 255);
  padding: 50px 10px 100px;
  border-radius: 12px;
  font-size: 18px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px; 
  position: relative;
}

.info-box p {
  margin: 15px 0;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  font-size: 18px;
}


.btn-user-edit {
  background-color: #ffffff; 
  color: #000000; 
  border: none; 
  font-weight: bold;
  padding: 12px 30px; 
  border-radius: 50px; 
  font-size: 1.2rem; 
  text-decoration: none;
  position: relative;
  position: relative;
  top: 30px; 
  font-family: "Rubik", sans-serif;
  transition: background-color 0.3s ease;
}

.btn-user-delete {
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}


.btn-user-edit
.btn-user-delete {
  background-color: #732d91; 
}

</style>