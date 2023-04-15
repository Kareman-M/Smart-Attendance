import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './Layout/aside/aside.component';
import { MainComponent } from './Layout/main/main.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { InstructorCoursesComponent } from './SmartAttendance/Component/InstructorCourses/instructor-courses/instructor-courses.component';
import { MainPageComponent } from './SmartAttendance/Component/Dashboard/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentDialogComponent } from './SmartAttendance/Component/Dashboard/department-dialog/department-dialog.component';
import { DepartmentListComponent } from './SmartAttendance/Component/Dashboard/department-list/department-list.component';
import { AngularMaterialModule } from './Libraries/angular-material/angular-material.module';
import { AddDepartmentComponent } from './SmartAttendance/Component/Dashboard/add-department/add-department.component';

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
    AddDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
