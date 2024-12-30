<template>
  <footer class="footer">
    <div class="footer-links">
      <a href="AGB">AGB</a>
      <a href="Impressum">Impressum</a>
      <a href="Datenschutz">Datenschutz</a>

    </div>
    <div class="social-media">
      <a href="https://www.facebook.com" target="_blank">
        <img src="@/assets/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <img src="@/assets/twitter-x.svg" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img src="@/assets/instagram.svg" alt="Instagram" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
  font-size: 1rem;
}

.footer-links a:hover {
  text-decoration: underline;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-media img {
  width: 24px;
  height: 24px;
}
</style>
