const { Schema, model, SchemaTypes } = require('mongoose');

const CartSchema = Schema({
   orders: [
      {
         food: {
            ref: 'Food',
            type: SchemaTypes.ObjectId,
            unique: true,
         },
         total: {
            type: Number,
            default: 0,
         },
         count: {
            type: Number,
         },
      },
   ],
   user: {
      ref: 'User',
      type: SchemaTypes.ObjectId,
      required: true,
   },
   isActive: Boolean,
});

const Cart = model('Food', CartSchema);

module.exports = Cart;
