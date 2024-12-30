<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 

</script>

<template>

  <div class="datenschutz-view">
    <Header title="Alle Events"/>

    <div class="datenschutz-container">
      <h1>Datenschutzerklärung</h1>

      <section>
        <h2>Einleitung</h2>
        <p>Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über den Umgang mit Ihren Daten.</p>
      </section>

      <section>
        <h2>Verantwortliche Stelle</h2>
        <p>Unternehmen XYZ<br />
          Musterstraße 1<br />
          12345 Musterstadt<br />
          E-Mail: datenschutz@unternehmen.xyz</p>
      </section>

      <section>
        <h2>Erhebung und Speicherung personenbezogener Daten</h2>
        <p>Wir erheben, speichern und verarbeiten personenbezogene Daten nur, soweit dies gesetzlich erlaubt ist oder Sie eingewilligt haben. Diese Daten umfassen beispielsweise:</p>
        <ul>
          <li>Vor- und Nachname</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>IP-Adresse</li>
        </ul>
      </section>

      <section>
        <h2>Zweck der Datenverarbeitung</h2>
        <p>Ihre Daten werden verwendet, um:</p>
        <ul>
          <li>Ihnen unsere Dienste bereitzustellen</li>
          <li>Anfragen zu beantworten</li>
          <li>Rechtliche Verpflichtungen einzuhalten</li>
        </ul>
      </section>

      <section>
        <h2>Ihre Rechte</h2>
        <p>Sie haben das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen</li>
          <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
        </ul>
      </section>

      <section>
        <h2>Datensicherheit</h2>
        <p>Wir verwenden technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen Manipulation, Verlust oder unbefugten Zugriff zu schützen.</p>
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