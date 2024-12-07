
  module.exports = {

    find: async function (req, res) {
      sails.log.debug("List all events....");
      let events = await Event.find();
      return res.json(events);
    },
  
  
    create: async function (req, res) {
      sails.log.debug("Erstelle neues Event...");
      
      let params = req.allParams();
    
     await Event.create(params);
    
      return res.ok();
    },


    destroy: async function (req, res) {
      sails.log.debug("Delete category....");
      await Event.destroy({ id: req.params.id });
      res.ok();
    },





    update: async function (req, res) {
      sails.log.debug("Update event with ID:", req.params.id);
      sails.log.debug("Update data:", req.body);
    
      let updatedEvent = await Event.updateOne({ id: req.params.id }).set(req.body); 
    
      sails.log.debug("Updated event:", updatedEvent);
    
      if (!updatedEvent) {
        return res.notFound({ message: "Event nicht gefunden" }); 
      }
    
      res.ok(); 
    },
    
    


    
    
    
    
  
    
  };
  