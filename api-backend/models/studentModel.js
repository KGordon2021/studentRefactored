const mongoose = require('mongoose');
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, 'A student name must be specified'],
    default: ''
  },
  email: {
    type: String,
    // required: [true, 'An email address must be specified'],
    unique: [true, 'This email address has already been taken. Please try again']
  },
  cohort: {
    type: String,
    default: 2,
  },
  phoneNumber: {
    type: String,
    required: [true, 'A user must provide a contact number'], // we are doing validation here it returns a meaningful message
  },
  grade: {
    type: String,
    required: true,
  },
  registrationFee:{
    type: Number,
    default: 5000,
  }
});


const Student = mongoose.model('Student', studentsSchema);//we normally make the name of teh model the same as the variable we create  it like we would any other variable in quotes in the name of the model and and beside it is the name of the schema we are referring to in this case it is the student schema

//testing for the model is working

// const newStudent = new Student({ //newStudent is the name of the variable and new Student is how we create a new instance of the Student model
//   name: 'Gabigale Gilbert',
//   email: 'GabiGils@gmail.com',
//   cohort:'2',
//   phoneNumber: '876-862-9904',
//   grade: '87',
//   registrationFee: 4000
// })

// newStudent.save().then ( (doc) => {  //we are saving a new document in the database thus we use the .save method which returns a promise which allows us to use the them method
//   console.log(doc);
// }).catch(err => {
//   console.log('Error: ', err)
// });

module.exports = Student
