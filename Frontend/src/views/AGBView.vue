<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 

</script>

<template>

<div class="agb-view">
    <Header title="Allgemeine Geschäftsbedingungen (AGB)" />

    <div class="agb-container">
      

      <section>
        <h2>Einleitung</h2>
        <p>Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung unserer Dienstleistungen und Produkte. Bitte lesen Sie diese sorgfältig durch, bevor Sie unsere Angebote nutzen.</p>
      </section>

      <section>
        <h2>Vertragsgegenstand</h2>
        <p>Der Vertrag kommt zustande zwischen:</p>
        <p>Unternehmen XYZ<br />
          Musterstraße 1<br />
          12345 Musterstadt</p>
      </section>

      <section>
        <h2>Nutzungsbedingungen</h2>
        <p>Die Nutzung unserer Dienste setzt die Einhaltung der folgenden Regeln voraus:</p>
        <ul>
          <li>Die bereitgestellten Informationen dürfen nicht für illegale Zwecke verwendet werden.</li>
          <li>Alle Benutzer sind verpflichtet, ihre Zugangsdaten sicher aufzubewahren.</li>
        </ul>
      </section>

      <section>
        <h2>Zahlungsbedingungen</h2>
        <p>Die Bezahlung erfolgt gemäß den vereinbarten Zahlungsmodalitäten. Rechnungen sind innerhalb von 14 Tagen nach Erhalt zu begleichen.</p>
      </section>

      <section>
        <h2>Haftung</h2>
        <p>Wir haften nur für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten verursacht wurden. Eine Haftung für mittelbare Schäden ist ausgeschlossen.</p>
      </section>

      <section>
        <h2>Gerichtsstand</h2>
        <p>Gerichtsstand ist Musterstadt, soweit gesetzlich zulässig.</p>
      </section>
    </div>

    <Footer />
  </div>

</template>


<style scoped>

.agb-view {
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.agb-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.agb-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.agb-container h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.agb-container p {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
}

.agb-container ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 1.5rem;
}

.agb-container ul li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .agb-container {
    padding: 15px;
  }

  .agb-container h1 {
    font-size: 1.8rem;
  }

  .agb-container h2 {
    font-size: 1.4rem;
  }

  .agb-container p, .agb-container ul li {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .agb-container {
    padding: 10px;
  }

  .agb-container h1 {
    font-size: 1.5rem;
  }

  .agb-container h2 {
    font-size: 1.2rem;
  }

  .agb-container p, .agb-container ul li {
    font-size: 0.9rem;
  }
}
</style>