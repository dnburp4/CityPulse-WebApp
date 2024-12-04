module.exports = {
    attributes: {
      id: { type: 'string', required: true, unique: true },
      name: { type: 'string', required: true },
      bild: { type: 'string' },
      datum: { type: 'string' },
      typ: { type: 'string' },
      preis: { type: 'number' },
      bewertung: { type: 'number', defaultsTo: 0 },
      ort: { type: 'string' },
    },
  };
  