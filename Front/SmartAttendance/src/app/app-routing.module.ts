import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './SmartAttendance/Component/Dashboard/main-page/main-page.component';
import { InstructorCoursesComponent } from './SmartAttendance/Component/InstructorCourses/instructor-courses/instructor-courses.component';
import { CalenderComponent } from './SmartAttendance/Component/InstructorCourses/Calender_/calender/calender.component';
import { DisplayLectureBarCodeComponent } from './SmartAttendance/Component/InstructorCourses/display-lecture-bar-code/display-lecture-bar-code.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'ins', component: InstructorCoursesComponent },
  { path: 'calender', component: CalenderComponent },
  {path:'lecture', component: DisplayLectureBarCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
