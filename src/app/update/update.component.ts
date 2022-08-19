import { Student } from './../models/studentModel';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../student.service';
import { KeyValuePipe, Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateStudent: any;
  id: any;

  constructor(private fb: FormBuilder,
              private routes:Router,
              private studentsService: StudentService,
              private url: ActivatedRoute)
     {
    this.updateStudent = fb.group ({
      name: ['', Validators.required],
      email: ['', Validators.required],
      cohort: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      grade: ['', Validators.required],
      registrationFee: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.viewSelectedStudent();

  }

  viewSelectedStudent() {
    this.id = this.url.snapshot.params['id'];
    this.studentsService.getStudentById(this.id).subscribe((data) =>{
      this.updateStudent.patchValue(data);
    })
  }

  onSubmit() {
    this.id = this.url.snapshot.params['id'];
    this.studentsService.updateStudent(this.id, this.updateStudent.value).subscribe((data:any)=> {
      // console.log(data);
      this.routes.navigate(['/home'])
    })
    console.log(this.updateStudent.value)
  }


}
