module.exports = {

    create: async function (req, res) {
      sails.log.debug("Schribe News...");
      let params = req.allParams();
      await News.create(params);
      return res.ok();
    },
  
    find: async function (req, res) {
      sails.log.debug("List all news....");
      let news = await News.find();
      return res.json(news); 
    },
  
    destroy: async function (req, res) {
      sails.log.debug("Delete article....");
      await News.destroy({ id: req.params.id });
      res.ok();
    },
  
    update: async function (req, res) {
      sails.log.debug("Update article with ID:", req.params.id);
      sails.log.debug("Update data:", req.body);
  
      let updatedNews = await News.updateOne({ id: req.params.id }).set(req.body);
  
      sails.log.debug("Updated article:", updatedNews); 
  
      if (!updatedNews) {
        return res.notFound({ message: "News nicht gefunden" });
      }
  
      res.ok();
    },


      //count
      countNews: async function (req, res) {
        try {
          const count = await News.count(); // Anzahl der News zählen
          return res.json({ count }); // Anzahl als JSON zurückgeben
        } catch (error) {
          return res.serverError(error); // Fehlerbehandlung
        }
      },
    
    
  
  };