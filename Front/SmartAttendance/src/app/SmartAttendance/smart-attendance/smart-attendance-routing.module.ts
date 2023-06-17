import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorCoursesComponent } from '../Component/InstructorCourses/instructor-courses/instructor-courses.component';
import { CalenderComponent } from '../Component/InstructorCourses/Calender_/calender/calender.component';
import { DisplayLectureBarCodeComponent } from '../Component/InstructorCourses/display-lecture-bar-code/display-lecture-bar-code.component';
import { MainPageComponent } from '../Component/Dashboard/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'ins', component: InstructorCoursesComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'lecture', component: DisplayLectureBarCodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartAttendanceRoutingModule { }
