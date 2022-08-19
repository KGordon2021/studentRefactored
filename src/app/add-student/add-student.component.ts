import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent: any;

  constructor(private fb: FormBuilder,
    private routes:Router,
    private studentsService: StudentService
    ) {
      this.addStudent = fb.group ({
        name: ['', Validators.required],
        email: ['', Validators.required],
        cohort: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        grade: ['', Validators.required],
        registrationFee: ['', Validators.required],
      })
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentsService.addStudent(this.addStudent.value).subscribe(
      ()=> {
    // alert("Student " + data.name + " has been added");
      this.routes.navigate(['/home'])
    })
  }

}
