const { v4: uuidv4 } = require('uuid'); // Wird verwendet um eindeutige IDs der Tickets zu generieren

module.exports = {

  create: async function (req, res) {
    sails.log.debug("Erstelle neues Event...");
    
    let params = req.allParams();

    try {
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



    //find
    find: async function (req, res) {
      sails.log.debug("List all events....");
      let events = await Event.find();
      return res.json(events);
    },
  
  
    //destroy
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
    


    //update
    update: async function (req, res) {
      sails.log.debug("Update event with ID:", req.params.id);
      sails.log.debug("Update data:", req.body);
    
      let updatedEvent = await Event.updateOne({ id: req.params.id }).set(req.body); 
    
    const ticketUpdates = {};

    if (req.body.name) {
      ticketUpdates.event = req.body.name; 
    }
    if (req.body.datum) {
      ticketUpdates.datum = req.body.datum; 
    }

  
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

    
    findOne: async function (req, res) {
      sails.log.debug("Fetching single event...");
      try {
        const { id } = req.params; // Extrahiere die ID aus den URL-Parametern
        const event = await Event.findOne({ id }); // Suche das Event basierend auf der ID
    
        if (!event) {
          return res.notFound({ message: "Event not found" }); // Falls kein Event gefunden wird
        }
    
      // Pfad zum Bild ergänzen (falls notwendig)
      if (event.bild && !event.bild.startsWith('http')) {
      event.bild = `http://localhost:1337/uploads/${event.bild}`;
      }

        return res.json(event); // Event-Daten als JSON zurückgeben
      } catch (error) {
        sails.log.error("Error fetching event:", error); // Logge den Fehler
        return res.serverError({ message: "Error fetching event" });
      }
    },
    
    
    
    
  
    
  };
  