const { Schema, SchemaTypes, model } = require('mongoose');

const UserSchema = Schema({
   cart: {
      ref: 'Cart',
      type: SchemaTypes.ObjectId,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   phone: {
      type: Number,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   role: {
      type: String,
      required: true,
      default: 'user',
   },
});

const User = model('User', UserSchema);

module.exports = User;
