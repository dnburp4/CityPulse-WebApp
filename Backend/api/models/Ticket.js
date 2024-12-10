/**
 * Ticket.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


//A ticket belongs to a single event

module.exports = {

  attributes: {

    id: { type: 'string', required: true, unique: true },
    event: {type: 'string', required: true},
    nameKunde: {type: 'string'}, 
    adresse: {type: 'string'}, 
    datum: {type: 'string'}, 
   

    forEvent: {
      model: 'Event'
    }

  }

};

