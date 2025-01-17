<template>
  <footer class="footer">
    <div class="social-media">
      <a href="https://www.facebook.com" target="_blank">
        <img src="@/assets/facebook.svg" alt="Facebook" />
      </a>
      <a href="https://www.twitter.com" target="_blank" class="twitter-link">
        <img src="@/assets/twitter-x.svg" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img src="@/assets/instagram.svg" alt="Instagram" />
      </a>
    </div>
    <div class="footer-links">
      <RouterLink to="/AGB">AGB |</RouterLink>
      <RouterLink to="/Impressum" class="center">Impressum |</RouterLink>
      <RouterLink to="/Datenschutz">Datenschutz</RouterLink>
    </div>
    <div class="copyright">
      &copy; 2025 CityPulse
    </div>
    <div class="project-notice">
      Dieses Projekt wurde im Rahmen eines Hochschulprojekts erstellt und dient ausschließlich zu Lernzwecken.
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-left: 10px; 
  
}

.footer-links .center {
  text-align: center;

 
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.footer-links a:hover {
  text-decoration: underline;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
  
}

.social-media img {
  width: 24px;
  height: 24px;
}

.copyright {
  font-size: 0.9rem;
  color: #ffffff;
  padding-top: 15px; 
}

.project-notice {
  margin-top: 10px;
  font-size: 0.8rem;
  color: #cccccc;
}
</style>