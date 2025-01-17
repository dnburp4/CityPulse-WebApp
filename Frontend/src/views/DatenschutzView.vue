<script setup>
import Header from '@/components/Header.vue'; 
import Footer from '@/components/Footer.vue'; 

</script>

<template>

  <div class="datenschutz-view">
    <Header title="Datenschutz"/>

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

      <section>
        <h2>Cookies</h2>
        <p>Unsere Webseite verwendet nur technisch notwendige Cookies</p>
      </section>


    </div>







    <Footer />
  </div>
</template>



<style scoped>

.datenschutz-view {
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.datenschutz-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.datenschutz-container h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.datenschutz-container h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.datenschutz-container p {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
}

.datenschutz-container ul {
  margin-left: 20px;
}

.datenschutz-container ul li {
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .datenschutz-container {
    padding: 15px;
  }

  .datenschutz-container h1 {
    font-size: 1.8rem;
  }

  .datenschutz-container h2 {
    font-size: 1.4rem;
  }

  .datenschutz-container p {
    font-size: 0.95rem;
  }

  .datenschutz-container ul li {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .datenschutz-container {
    padding: 10px;
  }

  .datenschutz-container h1 {
    font-size: 1.5rem;
  }

  .datenschutz-container h2 {
    font-size: 1.2rem;
  }

  .datenschutz-container p {
    font-size: 0.9rem;
  }

  .datenschutz-container ul li {
    font-size: 0.9rem;
  }
}
</style>
