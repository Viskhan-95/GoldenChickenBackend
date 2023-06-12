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
      required: true,
   },
   category: {
      ref: 'Category',
      type: SchemaTypes.ObjectId,
      required: true,
   },
});

const Food = model('Food', FoodSchema);

module.exports = Food;
