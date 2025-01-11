const { v4: uuidv4 } = require('uuid'); //nicht benutzt

module.exports = {
  create: async function (req, res) {
    try {
      const { eventName, ticketCount, totalPrice, buyerName, buyerAddress, buyerHouseNumber } = req.body;
      const userId = req.session.userId; 
      if (!userId) {
        return res.forbidden({ message: 'Benutzer nicht eingeloggt' });
      }
  
      const tickets = [];
      for (let i = 0; i < ticketCount; i++) {
        tickets.push({
          eventName,
          totalPrice,
          buyerName,
          buyerAddress,
          buyerHouseNumber,
          userId, 
        });
      }
  
      const createdTickets = await Ticketkauf.createEach(tickets).fetch();
      return res.json(createdTickets);
    } catch (error) {
      sails.log.error('Fehler beim Erstellen der Tickets:', error);
      return res.serverError({ message: 'Fehler beim Erstellen der Tickets' });
    }
  },
  
  
  

  find: async function (req, res) {
    try {
      const userId = req.session.userId; 
  
      if (!userId) {
        return res.forbidden({ message: 'Benutzer nicht eingeloggt' });
      }
  
      const tickets = await Ticketkauf.find({ userId });
      sails.log.debug('Gefundene Tickets für Benutzer:', tickets);
  
      return res.json(tickets);
    } catch (error) {
      sails.log.error('Fehler beim Abrufen der Tickets:', error);
      return res.serverError({ message: 'Fehler beim Abrufen der Tickets' });
    }},
  };
  
  
