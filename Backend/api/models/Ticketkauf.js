module.exports = {
  attributes: {
    eventName: { type: 'string', required: true },
    totalPrice: { type: 'number', required: true },
    buyerName: { type: 'string', required: true },
    buyerAddress: { type: 'string', required: true },
    buyerHouseNumber: { type: 'string', required: true },
    orderId: { type: 'string', required: true }, // Eindeutige Bestell-ID
  },
};
