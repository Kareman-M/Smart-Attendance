import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './Layout/aside/aside.component';
import { MainComponent } from './Layout/main/main.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { InstructorCoursesComponent } from './SmartAttendance/Component/InstructorCourses/instructor-courses/instructor-courses.component';
import { MainPageComponent } from './SmartAttendance/Component/Dashboard/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentDialogComponent } from './SmartAttendance/Component/Dashboard/Department/department-dialog/department-dialog.component';
import { DepartmentListComponent } from './SmartAttendance/Component/Dashboard/Department/department-list/department-list.component';
import { AngularMaterialModule } from './Libraries/angular-material/angular-material.module';
import { AddDepartmentComponent } from './SmartAttendance/Component/Dashboard/Department/add-department/add-department.component';
import { CourseListComponent } from './SmartAttendance/Component/Dashboard/Course/course-list/course-list.component';
import { AddCourseComponent } from './SmartAttendance/Component/Dashboard/Course/add-course/add-course.component';
import { CourseDialogComponent } from './SmartAttendance/Component/Dashboard/Course/course-dialog/course-dialog.component';
import { CalenderComponent } from './SmartAttendance/Component/InstructorCourses/calender/calender.component';
import { AddNewCourseComponent } from './SmartAttendance/Component/InstructorCourses/add-new-course/add-new-course.component';
import { LecturesDialogComponent } from './SmartAttendance/Component/Lectures/lectures-dialog/lectures-dialog.component';
import { LoginComponent } from './Layout/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    MainComponent,
    NavbarComponent,
    InstructorCoursesComponent,
    MainPageComponent,
    DepartmentDialogComponent,
    DepartmentListComponent,
    AddDepartmentComponent,
    CourseListComponent,
    AddCourseComponent,
    CourseDialogComponent,
    CalenderComponent,
    AddNewCourseComponent,
    LecturesDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
