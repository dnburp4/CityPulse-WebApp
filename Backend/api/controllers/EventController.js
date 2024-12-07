let events = [
    
  //Beispiele im Backend
  {
      id: "01",
      name: "Tomorrowland",
      bild: "src/assets/images/tomorrowland.jpg",
      datum: "01.12.2024",
      typ: "Konzert",
      preis: "100",
      bewertung: 4,
      ort: "Konstanz",
    },
    {
      id: "02",
      name: "Theater",
      bild: "src/assets/images/theater.jpg",
      datum: "03.12.2024",
      typ: "Theater",
      preis: "10",
      bewertung: 2,
      ort: "HTWG",
    },

    {
        id: "03",
        name: "Theater",
        bild: "src/assets/images/theater.jpg",
        datum: "03.12.2024",
        typ: "Theater",
        preis: "10",
        bewertung: 2,
        ort: "HTWG",
      },

     

  ];
  
  module.exports = {

    //read
    
    find: async function (req, res) {
      sails.log.debug("List all events....");
      let events = await events.find();
      return res.json(events);
    },
  
  
/*
    //create ohne datenbank verbindung - speichern in lokalem array
    create: async function (req, res) {
     const { id, name, bild, datum, typ, preis, bewertung, ort } = req.body;
  
      const newEvent = {
        id: id || Date.now().toString(), // Generiere eine ID falls keine angegeben wurde
        name,
        bild,
        datum,
        typ,
        preis,
        bewertung,
        ort,
      };
      events.push(newEvent); 
    return res.json(newEvent); 
    },
    */

    

    //create -nicht möglich brauchen lokales array nutzen
    
    create: async function (req, res) {
      sails.log.debug("Erstelle neues Event...");
      
      let params = req.allParams();
    
     await Event.create(params);
    
      return res.ok();
    },
    
    

  
    //update
    
    update: async function (req, res) {
      const { id } = req.params; // ID des Events aus der URL
     const updatedData = req.body; // Neue Daten aus der Anfrage
  
      let event = events.find((e) => e.id === id); // Finde das Event anhand der ID
  
     if (!event) {
        return res.status(404).json({ message: "Event nicht gefunden" });
    }
  
       //Aktualisiere die Event-Daten
     Object.assign(event, updatedData);
      return res.json({ message: "Event aktualisiert", event });
    },

    



    //update

    /*
    update: async function (req, res) {
      sails.log.debug("Aktualisiere Event...");
     const { id } = req.params;
      const updatedData = req.body;
     const updatedEvent = await Event.updateOne({ id }).set(updatedData);
     return res.json(updatedEvent);
      },

      */
  


    //delete
    destroy: async function (req, res) {
      const { id } = req.params; // ID des Events aus der URL
      const index = events.findIndex((e) => e.id === id); // Finde den Index des Events
  
      if (index === -1) {
        return res.status(404).json({ message: "Event nicht gefunden" });
      }
  
      // Entferne das Event aus der Liste
      events.splice(index, 1);
      return res.json({ message: `Event mit ID ${id} wurde gelöscht` });
    },
  };
  