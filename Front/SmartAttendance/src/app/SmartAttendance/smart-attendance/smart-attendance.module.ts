import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AngularMaterialModule } from 'src/app/Libraries/angular-material/angular-material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



import { SmartAttendanceRoutingModule } from './smart-attendance-routing.module';
import { AddCourseComponent } from '../Component/Dashboard/Course/add-course/add-course.component';
import { CourseDialogComponent } from '../Component/Dashboard/Course/course-dialog/course-dialog.component';
import { CourseListComponent } from '../Component/Dashboard/Course/course-list/course-list.component';
import { AddDepartmentComponent } from '../Component/Dashboard/Department/add-department/add-department.component';
import { DepartmentDialogComponent } from '../Component/Dashboard/Department/department-dialog/department-dialog.component';
import { DepartmentListComponent } from '../Component/Dashboard/Department/department-list/department-list.component';
import { AddUserComponent } from '../Component/Dashboard/User/add-user/add-user.component';
import { DeleteDialogComponent } from '../Component/Dashboard/User/delete-dialog/delete-dialog.component';
import { ResetPasswordDialogComponent } from '../Component/Dashboard/User/reset-password-dialog/reset-password-dialog.component';
import { UserDialogComponent } from '../Component/Dashboard/User/user-dialog/user-dialog.component';
import { UserListComponent } from '../Component/Dashboard/User/user-list/user-list.component';
import { CalenderEventComponent } from '../Component/InstructorCourses/Calender_/calender-event/calender-event.component';
import { CalenderComponent } from '../Component/InstructorCourses/Calender_/calender/calender.component';
import { AddNewCourseComponent } from '../Component/InstructorCourses/add-new-course/add-new-course.component';
import { AttendanceDialogComponent } from '../Component/InstructorCourses/attendance-dialog/attendance-dialog.component';
import { DeleteCoursDialogComponent } from '../Component/InstructorCourses/delete-cours-dialog/delete-cours-dialog.component';
import { DisplayLectureBarCodeComponent } from '../Component/InstructorCourses/display-lecture-bar-code/display-lecture-bar-code.component';
import { InstructorCoursesComponent } from '../Component/InstructorCourses/instructor-courses/instructor-courses.component';
import { LecturesDialogComponent } from '../Component/Lectures/lectures-dialog/lectures-dialog.component';


@NgModule({
  declarations: [
    InstructorCoursesComponent,
    DepartmentDialogComponent,
    DepartmentListComponent,
    AddDepartmentComponent,
    CourseListComponent,
    AddCourseComponent,
    CourseDialogComponent,
    CalenderComponent,
    AddNewCourseComponent,
    LecturesDialogComponent,
    LecturesDialogComponent,
    DisplayLectureBarCodeComponent,
    DeleteCoursDialogComponent,
    AttendanceDialogComponent,
    CalenderEventComponent,
    AddUserComponent,
    UserDialogComponent,
    UserListComponent,
    ResetPasswordDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    SmartAttendanceRoutingModule,
    // BrowserModule,
    // AppRoutingModule,
    // BrowserAnimationsModule,
    AngularMaterialModule,
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgxQRCodeModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class SmartAttendanceModule { }
