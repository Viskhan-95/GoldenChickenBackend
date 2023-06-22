const { Schema, model, SchemaTypes } = require('mongoose');

const OrderSchema = Schema(
   {
      products: [
         {
            product: {
               ref: 'Product',
               type: SchemaTypes.ObjectId,
               unique: true,
               required: true,
            },
            quantity: {
               type: Number,
               default: 1,
               required: true,
            },
         },
      ],
      cart: {
         ref: 'Cart',
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
         required: true,
      },
      payment_status: {
         type: String,
         required: true,
      },
   },
   { timestamps: true },
);

const Order = model('Order', OrderSchema);

module.exports = Order;
