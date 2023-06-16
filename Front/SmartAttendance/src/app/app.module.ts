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
import { CalenderComponent } from './SmartAttendance/Component/InstructorCourses/Calender_/calender/calender.component';
import { AddNewCourseComponent } from './SmartAttendance/Component/InstructorCourses/add-new-course/add-new-course.component';
import { LecturesDialogComponent } from './SmartAttendance/Component/Lectures/lectures-dialog/lectures-dialog.component';
import { DisplayLectureBarCodeComponent } from './SmartAttendance/Component/InstructorCourses/display-lecture-bar-code/display-lecture-bar-code.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { DeleteCoursDialogComponent } from './SmartAttendance/Component/InstructorCourses/delete-cours-dialog/delete-cours-dialog.component';
import { AttendanceDialogComponent } from './SmartAttendance/Component/InstructorCourses/attendance-dialog/attendance-dialog.component';
import { CalenderEventComponent } from './SmartAttendance/Component/InstructorCourses/Calender_/calender-event/calender-event.component';
import { AddUserComponent } from './SmartAttendance/Component/Dashboard/User/add-user/add-user.component';
import { UserDialogComponent } from './SmartAttendance/Component/Dashboard/User/user-dialog/user-dialog.component';
import { UserListComponent } from './SmartAttendance/Component/Dashboard/User/user-list/user-list.component';

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
    DisplayLectureBarCodeComponent,
    DeleteCoursDialogComponent,
    AttendanceDialogComponent,
    CalenderEventComponent,
    AddUserComponent,
    UserDialogComponent,
    UserListComponent
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
    NgxQRCodeModule,
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
