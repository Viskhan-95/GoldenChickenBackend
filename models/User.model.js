const { Schema, SchemaTypes, model } = require('mongoose');

const UserSchema = Schema({
   cart: {
      ref: 'Cart',
      type: SchemaTypes.ObjectId,
      required: true,
   },
   role: {
      type: String,
      required: true,
      default: 'user',
   },
   phone: {
      type: Number,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
});

const User = model('User', UserSchema);

module.exports = User;
