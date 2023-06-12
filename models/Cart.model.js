const { Schema, model, SchemaTypes } = require('mongoose');

const CartSchema = Schema({
   food: {
      ref: 'Food',
      type: SchemaTypes.ObjectId,
      required: true,
      unique: true,
   },
   user: {
      ref: 'User',
      type: SchemaTypes.ObjectId,
      required: true,
   },
   total: {
      type: Number,
      default: 0,
      required: true,
   },
   count: {
      type: Number,
      required: true,
   },
});

const Cart = model('Food', CartSchema);

module.exports = Cart;
