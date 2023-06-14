import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorCoursesComponent } from './SmartAttendance/Component/InstructorCourses/instructor-courses/instructor-courses.component';
import { CalenderComponent } from './SmartAttendance/Component/InstructorCourses/calender/calender.component';
import { LoginComponent } from './Layout/login/login/login.component';

const routes: Routes = [
  // { path: '', component: MainPageComponent },
  { path: '', component: LoginComponent },
  { path: 'ins', component: InstructorCoursesComponent },
  { path: 'calender', component: CalenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
