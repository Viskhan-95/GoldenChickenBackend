const { Schema, model, SchemaTypes } = require('mongoose');

const ProductSchema = Schema({
   category: {
      ref: 'Category',
      type: SchemaTypes.ObjectId,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   urlImage: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   size: {
      type: Number,
      required: true,
   },
});

const Product = model('Product', ProductSchema);

module.exports = Product;
