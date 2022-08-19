import { Injectable } from '@angular/core';
import { Student } from './models/studentModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap, of, BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private rest_api = "http://localhost:3000/students"
  private http_Header = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
  }
  constructor(private http:HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<any>(this.rest_api).pipe(
      map((response)=>{
        return response.data["students"]
      }),
      tap( retrievedStoreProducts => console.log(`retrievedStoreProducts = ${JSON.stringify(retrievedStoreProducts)}`)), //if retrieval is successful
      catchError(error => of([])), //if there is an error
    )
  }

  getStudentById(id: any):Observable<Student | any> {
    const thisUrl = `${this.rest_api}/${id}`; //the string interpolation is looking for exactly the localhost:3000 / (the id of the selected Student)
    return this.http.get<any>(thisUrl).pipe(
      // map((response)=>{
      //   return response.data["students"],
      //   console.log(response.data)
      // }),
      tap( thisStudent => console.log(`this Student = ${JSON.stringify(thisStudent)}`)), //if retrieval is successful
      catchError(error => of(new Student())), //if there is an error
    );
  }


  addStudent(studentInfo: Student): Observable<Student> {
    alert("Student " + studentInfo.name + " has been added");
    return this.http.post<Student>(`${this.rest_api}`, studentInfo, this.http_Header).pipe( // WE are sending a put request to the url and this put request accepts 3 arguments (the url), (the body or the fields we want to update in this case we are sending the fields for Student), (and the Http headers which specifies that the application is json and as such should be converted when the put requests executes to match this )
    tap(createdStudent => console.log(`createdStudent = ${JSON.stringify(createdStudent)}`)), //if retrieval is successful do this( create a variable and put the console to it)
    catchError(error => of(new Student())), //if there is an error (returns an empty movie object)
    );
  }

  updateStudent(id: any, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.rest_api}/${id}`, student, this.http_Header).pipe( // WE are sending a put request to the url and this put request accepts 3 arguments (the url), (the body or the fields we want to update in this case we are sending the fields for Student), (and the Http headers which specifies that the application is json and as such should be converted when the put requests executes to match this )
      tap(updatedStudent => console.log(`updatedStudent = ${JSON.stringify(updatedStudent)}`)), //if retrieval is successful do this( create a variable and put the console to it)
      catchError(error => of(new Student())), //if there is an error (returns an empty movie object)
    );
  }

  deleteStudent(id:any): Observable<Student> {
    // alert("The Student " + this.deleteStudent.name + " has been removed");
    return this.http.delete<Student>(`${this.rest_api}/${id}`, this.http_Header).pipe(
      tap( deletedStudent => console.log(`deletedStudent = ${JSON.stringify(deletedStudent)}`)), //if retrieval is successful
    ) ;
  }
}
