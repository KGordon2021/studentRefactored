const express = require('express');
const Student =  require('../models/studentModel')


// exports.checkDataPosted = (req, res, next) => {
//   if(req.body.name == "" || req.body.email == "") {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Please provide required information'
//     })
//   } next ();
// }

//Get All Students
exports.getAllStudents = async (req, res) =>{
  try{
    const students = await Student.find();
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
          students
        }
    });
}catch(err){
    res.status(404).json({
        status: 'fail',
        message: err
    })
}
}


exports.createAdvanceStudent = async (req, res) =>{
  try {
    const newStudent =  await Student.create(req.body);
          res.status(201).json({
            status: 'Success',
            data: {
              student: newStudent
            }
          });
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }

}

exports.getStudentById = async (req, res) =>{
  try {
    const student = await Student.findById(req.params.id);
      res.status(200).json(
        //{
      //     status: 'success',
      //     data: {
            student
          // }
      //}
      );
    }catch(err){
      res.status(404).json({
        status: 'fail',
        message: err
    });
    }
}

exports.updateStudentById = async (req, res) =>{
  try{
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(
      {
      status: 'success',
      data:{
        student
      }
    });
  } catch (err) {
   res.status(404).json({
      status: 'fail',
      message: err
    });
  }
}

exports.deleteStudent = async (req, res) =>{
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      message: 'Successfully deleted entry'
    });
   } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
   }
}
