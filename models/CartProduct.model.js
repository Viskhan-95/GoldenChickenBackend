const { Schema, model, SchemaTypes } = require('mongoose');

const CartProductSchema = Schema(
   {
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
      cart: {
         ref: 'Cart',
         type: SchemaTypes.ObjectId,
         required: true,
      },
      shipping: {
         type: String,
      },
      delivery_status: {
         type: String,
         default: 'pending',
      },
      payment_status: {
         type: String,
      },
   },
   { timestamps: true },
);

const CartProduct = model('CartProduct', CartProductSchema);

module.exports = CartProduct;
