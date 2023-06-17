const { Schema, model, SchemaTypes } = require('mongoose');

const CartSchema = Schema({
   products: [
      {
         product: {
            ref: 'Product',
            type: SchemaTypes.ObjectId,
            unique: true,
         },
         quantity: {
            type: Number,
            default: 1,
         },
      },
   ],
   user: {
      ref: 'User',
      type: SchemaTypes.ObjectId,
      required: true,
   },
   shipping: {
      type: String,
      required: true,
   },
   delivery_status: {
      type: String,
      default: 'pending',
   },
   payment_status: {
      type: String,
      required: true,
   },
});

const Cart = model('Food', CartSchema);

module.exports = Cart;
