<template>
  <header class="app-header">
    <div class="header-container">
      <button @click="goBack" class="back-button">
        
      </button>
      <h1>{{ title }}</h1>
      <button class="search-button">
        
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Navigiert zur vorherigen Seite
    },
  },
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #57164a;
  color: white;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
}

.back-button,
.search-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

img {
  width: 24px;
  height: 24px;
}
</style>
