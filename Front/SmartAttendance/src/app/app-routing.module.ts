import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './SmartAttendance/Component/Dashboard/main-page/main-page.component';
import { InstructorCoursesComponent } from './SmartAttendance/Component/InstructorCourses/instructor-courses/instructor-courses.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'ins', component: InstructorCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
