const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  lastName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  age: {
    type: Number,
  },
  discription: {
    type: String,
  },
  instagram: {
    type: String
  },
  telefram: {
    type: String
  },
  sinf: {
    type: String
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("jasur", userSchema);