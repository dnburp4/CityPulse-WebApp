const { v4: uuidv4 } = require('uuid'); // Wird verwendet, um eindeutige IDs der Tickets zu generieren

module.exports = {

  create: async function (req, res) {
    sails.log.debug("Erstelle neues Event...");
    
    let params = req.allParams();

    try {
      // Neues Event erstellen
      const newEvent = await Event.create(params).fetch();

      // Tickets für die Veranstaltung erstellen. Man erstellet die Anzahl der Verfügbaren Tickets 
      // nach dem Attribut availableTickets
      const tickets = [];
      for (let i = 0; i < newEvent.availableTickets; i++) {
        tickets.push({
          id: uuidv4(), // Generierung von einem eindeutigen ID
          event: newEvent.name,
          datum: newEvent.datum, 
          nameKunde: '',
          adresse: '',
          forEvent: newEvent.id
        });
      }
      await Ticket.createEach(tickets);

    
      return res.json(newEvent);
    } catch (err) {
      sails.log.error("Error creating event and tickets:", err);
      return res.serverError(err);
    }
  },

    find: async function (req, res) {
      sails.log.debug("List all events....");
      let events = await Event.find();
      return res.json(events);
    },
  
  
    // create: async function (req, res) {
    //   sails.log.debug("Erstelle neues Event...");
      
    //   let params = req.allParams();
    
    //  await Event.create(params);
    
    //   return res.ok();
    // },


    // destroy: async function (req, res) {
    //   sails.log.debug("Delete category....");
    //   await Event.destroy({ id: req.params.id });
    //   await Ticket.destroy({forEvent: req.params.id })
    //   res.ok();
    // },



    destroy: async function (req, res) {
      sails.log.debug("Delete category....");
      
      try {
                
        await Ticket.destroy({ forEvent: req.params.id });
        await Event.destroy({ id: req.params.id });
        res.ok();
      } catch (err) {
        sails.log.error("Fehler beim Löschen von Event und Tickets:", err);
        res.serverError("Fehler beim Löschen des Events oder der Tickets.");
      }
    }, 
    


    update: async function (req, res) {
      sails.log.debug("Update event with ID:", req.params.id);
      sails.log.debug("Update data:", req.body);
    
      let updatedEvent = await Event.updateOne({ id: req.params.id }).set(req.body); 
    
    //  Tickets aktualisieren, falls relevante Felder vorhanden sind
    const ticketUpdates = {};

    if (req.body.name) {
      ticketUpdates.event = req.body.name; // Aktualisiert das Name-Feld in den Tickets
    }
    if (req.body.datum) {
      ticketUpdates.datum = req.body.datum; // Aktualisiert das Datum-Feld in den Tickets
    }

    // Falls relevante Ticket-Felder vorhanden sind, aktualisiere die Tickets
    if (Object.keys(ticketUpdates).length > 0) {
      await Ticket.update({ forEvent: req.params.id }).set(ticketUpdates);
      sails.log.debug("Tickets were updated...")
    }

    
      sails.log.debug("Updated event:", updatedEvent);
    
      if (!updatedEvent) {
        return res.notFound({ message: "Event nicht gefunden" }); 
      }
    
      res.ok(); 
    },
    
    

    filter: async function (req, res) {
      sails.log.debug("...");
  
      const { name, typ } = req.query; 
      // Query-Parameter kann ich im Browser testen mit ... ?name=Tomorrowland&typ=Konzert)
      //können wir auch testen mit Postman - Software Vorlesung
  
      let query = {};
  
      // Filter nach Name
      if (name) {
        query.name = { contains: name }; 
      }
      // Filter nach Typ
      if (typ) {
        query.typ = typ; 
      }
      // Abfrage in der Datenbank
      let events = await Event.find(query);
      return res.json(events); 
    },

    
    
    
    
  
    
  };
  