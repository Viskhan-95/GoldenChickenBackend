const { Schema, model, SchemaTypes } = require('mongoose');

const CartSchema = Schema({
   food: {
      ref: 'Food',
      type: SchemaTypes.ObjectId,
   },
   price: {
      type: Number,
      required: true,
   },
   total: {
      type: Number,
      required: true,
   },
   count: {
      type: Number,
      required: true,
   },
});

const Cart = model('Food', CartSchema);

module.exports = Cart;
