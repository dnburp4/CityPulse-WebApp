<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 

</script>

<template>

<div class="impressum-view">
    <Header title="Impressum"/>

    <div class="impressum-container">
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Unternehmen XYZ<br />
          Musterstraße 1<br />
          12345 Musterstadt</p>
      </section>

      <section>
        <h2>Vertreten durch:</h2>
        <p>Max Mustermann</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>Telefon: 01234 56789<br />
          E-Mail: info@unternehmen.xyz</p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE123456789</p>
      </section>

      <section>
        <h2>Haftungsausschluss</h2>
        <h3>Haftung für Inhalte</h3>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>

        <h3>Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
      </section>
    </div>

    <Footer />
  </div>

</template>


<style scoped>

.impressum-view {
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.impressum-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left; 
}


.impressum-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.impressum-container h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.impressum-container p {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
}

.impressum-container h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .impressum-container {
    padding: 15px;
  }

  .impressum-container h1 {
    font-size: 1.8rem;
  }

  .impressum-container h2 {
    font-size: 1.4rem;
  }

  .impressum-container h3 {
    font-size: 1.2rem;
  }

  .impressum-container p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .impressum-container {
    padding: 10px;
  }

  .impressum-container h1 {
    font-size: 1.5rem;
  }

  .impressum-container h2 {
    font-size: 1.2rem;
  }

  .impressum-container h3 {
    font-size: 1rem;
  }

  .impressum-container p {
    font-size: 0.9rem;
  }
}
</style>
