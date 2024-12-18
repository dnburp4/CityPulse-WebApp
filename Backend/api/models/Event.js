
//A event has many tickets

module.exports = {
    attributes: {
      id: { type: 'string', required: true, unique: true },
      name: { type: 'string', required: true },
      availableTickets: {type: 'number'}, 
      bild: { type: 'string' },
      datum: { type: 'string' },
      typ: { type: 'string' },
      preis: { type: 'number' },
      bewertung: { type: 'number', defaultsTo: 0 },
      ort: { type: 'string' },
      video: { type: 'string' },
      

      //Add a reference to tickets
      tickets: {
        collection: 'Ticket', 
        via: 'forEvent'
      }

    },


    // beforeDestroy: async function(criteria, proceed) {
    //   sails.log.debug("Cascade deleting tickets for Event ID:", criteria.where.id);
  
    //   // Lösche zugehörige Tickets
    //   await Ticket.destroy({ forEvent: criteria.where.id });
  
    //   return proceed();
    // }





  };
  