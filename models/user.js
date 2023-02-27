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
    require: true

  },
  group: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("forMT", userSchema);