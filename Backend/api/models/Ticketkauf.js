module.exports = {
  attributes: {
    id: { type: 'string', required: true, unique: true },
    eventName: { type: 'string', required: true },
    totalPrice: { type: 'number', required: true },
    buyerName: { type: 'string', required: true },
    buyerAddress: { type: 'string', required: true },
    buyerHouseNumber: { type: 'string', required: true },

    
    userId: {
      model: 'user', 
      required: true,
    },
    forEventId: {
      model: 'event', 
      required: true,
    },


  },
};
