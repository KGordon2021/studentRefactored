const express = require('express');
const router = express.Router();
const studentController = require('./../controllers/studentController');
const { getAllStudents,
        createAdvanceStudent,
        checkDataPosted
        // checkStudentID
      } = require('./../controllers/studentController');

// router.param('id', checkStudentID);


router
    .route('/')
    .get(getAllStudents)
    .post(createAdvanceStudent)
    // .post(checkDataPosted)
router
    .route('/:id')
    .get(studentController.getStudentById)
    // .patch(studentController.updateStudent)
    .put(studentController.updateStudentById)
    .delete(studentController.deleteStudent);

module.exports = router;
