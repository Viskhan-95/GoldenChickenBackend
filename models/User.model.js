const { Schema, SchemaTypes, model } = require('mongoose');

const UserSchema = Schema(
   {
      name: {
         type: String,
         required: true,
         minlength: 5,
         maxlength: 60,
      },
      password: {
         type: String,
         required: true,
         minlength: 6,
         maxlength: 12,
      },
      phone: {
         type: Number,
         required: true,
      },
      isAdmin: {
         type: Boolean,
         required: true,
      },
   },
   { timestamps: true },
);

const User = model('User', UserSchema);

module.exports = User;
