const { Schema, model, SchemaTypes } = require('mongoose');

const CartSchema = Schema(
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
            price: {
               type: Number,
               required: true,
            }
         },
      ],
      user: {
         ref: 'User',
         type: SchemaTypes.ObjectId,
         required: true,
      },
      shipping: {
         type: String,
         default: 'самовывоз',
         required: true,
      },
      delivery_status: {
         type: String,
         default: 'в ожидании',
         required: true,
      },
      payment_status: {
         type: String,
         default: "не оплачен",
      },
   },
   { timestamps: true },
);

const Cart = model('Cart', CartSchema);

module.exports = Cart;
