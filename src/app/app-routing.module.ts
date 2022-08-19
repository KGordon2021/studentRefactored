import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'add', component: AddStudentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'update/:id', component: UpdateComponent},
  { path: "", redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
