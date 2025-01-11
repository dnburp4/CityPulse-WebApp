const { v4: uuidv4 } = require('uuid'); // UUID-Generator

module.exports = {
  create: async function (req, res) {
    try {
      const { eventName, ticketCount, totalPrice, buyerName, buyerAddress, buyerHouseNumber } = req.body;

      sails.log.debug('Empfangene Daten:', req.body);

      // Generiere eine eindeutige orderId
      const orderId = uuidv4();

      // Tickets erstellen
      const tickets = [];
      for (let i = 0; i < ticketCount; i++) {
        tickets.push({
          eventName,
          totalPrice,
          buyerName,
          buyerAddress,
          buyerHouseNumber,
          orderId, // Eindeutige orderId zu jedem Ticket hinzufügen
        });
      }

      // Tickets speichern
      const createdTickets = await Ticketkauf.createEach(tickets).fetch();
      sails.log.debug('Erstellte Tickets:', createdTickets);

      return res.json({ orderId }); // Gebe die orderId zurück
    } catch (error) {
      sails.log.error('Fehler beim Erstellen der Tickets:', error);
      return res.serverError({ message: 'Fehler beim Erstellen der Tickets' });
    }
  },

  find: async function (req, res) {
    try {
      const { orderId } = req.query;

      if (!orderId) {
        return res.badRequest({ message: 'orderId ist erforderlich' });
      }

      const tickets = await Ticketkauf.find({ orderId });
      return res.json(tickets);
    } catch (error) {
      sails.log.error('Fehler beim Abrufen der Tickets:', error);
      return res.serverError({ message: 'Fehler beim Abrufen der Tickets' });
    }
  },
};
