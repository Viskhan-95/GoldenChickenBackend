const { Schema, model } = require('mongoose');

const FoodSchema = Schema({
    name: {
        type: String,
        required: true,
     },
     image: {
        type: String,
        required: true,
     },
     price: {
        type: Number,
        required: true,
     },
     size: Number,
});

const Food = model('Food', FoodSchema);

module.exports = Food;