/**
 * TicketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



    module.exports = {

        create: async function (req, res) {
          sails.log.debug("Creating Ticket...");
          let params = req.allParams();
          await Ticket.create(params);
          return res.ok();
        },
      
        find: async function (req, res) {
          sails.log.debug("List all tickets....");
          let tickets = await Ticket.find();
          return res.json(tickets);
        },
      
        destroy: async function (req, res) {
          sails.log.debug("Delete ticket....");
          await Ticket.destroy({ id: req.params.id });
          res.ok();
        },
      
        update: async function (req, res) {
          sails.log.debug("Update ticket with ID:", req.params.id);
          sails.log.debug("Update data:", req.body);
      
          let updatedTicket = await Ticket.updateOne({ id: req.params.id }).set(req.body);
      
          sails.log.debug("Updated ticket:", updatedTicket);
      
          if (!updatedTicket) {
            return res.notFound({ message: "Ticket nicht gefunden" });
          }
      
          res.ok();
        },
      
      };
  

