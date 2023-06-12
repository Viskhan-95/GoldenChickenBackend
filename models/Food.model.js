const { Schema, model, SchemaTypes } = require('mongoose');

const FoodSchema = Schema({
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
      default: 1,
   },
   category: {
      ref: 'Category',
      type: SchemaTypes.ObjectId,
   },
});

const Food = model('Food', FoodSchema);

module.exports = Food;
