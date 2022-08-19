const mongoose = require("mongoose");

const Schema = mongoose.Schema;
 // Define collection and schema
let Student = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  cohort: {
    type: Number
  },
  phoneNumber: {
    type: Number
  }
}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', Student)
