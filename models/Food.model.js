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
     size: Number,
     category: {
      ref: 'Category',
      type: SchemaTypes.ObjectId
     }
});

const Food = model('Food', FoodSchema);

module.exports = Food;