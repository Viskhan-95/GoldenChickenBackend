const { Schema, model, SchemaTypes } = require('mongoose');

const CartSchema = Schema(
   {
      user: {
         ref: 'User',
         type: SchemaTypes.ObjectId,
         required: true,
      },
   },
   { timestamps: true },
);

const Cart = model('Cart', CartSchema);

module.exports = Cart;
