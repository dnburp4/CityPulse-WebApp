<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 

</script>

<template>

<div class="agb-view">
    <Header title="Allgemeine Geschäftsbedingungen (AGB)" />

    <div class="agb-container">
      <h1>Allgemeine Geschäftsbedingungen</h1>

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

.kontakt-view {
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.kontakt-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.kontakt-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.kontakt-container p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.kontakt-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #57164a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #7d2d6b;
}

</style>