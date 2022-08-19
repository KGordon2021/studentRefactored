import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/studentModel';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students:any;
  constructor(private service: StudentService,
    private routes: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    return this.service.getStudents().subscribe ( res => {
      this.students = res
      console.log(this.students)
    })
  }

  goBack() {
    this.location.back();
  }

  remove(student: any): void {
    this.service.deleteStudent(student._id).subscribe (
      (res) => {
        alert(student.name + " has been removed from Students List");
        this.students = this.students.filter((u:any) => u!== student)
        this.routes.navigate(['categories'])
      })
  }
}
