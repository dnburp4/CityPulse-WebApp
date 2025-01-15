module.exports = {

    attributes: {
  
     emailAddress: {type: 'string', required: true},
     bewertung: {
        type: 'number', 
        required: true,
        min: 0, 
        max: 5,
     },

     bewertungEventOf: {
        model: 'Event'
      }
  
    }
  
};