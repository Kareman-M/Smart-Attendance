import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructorCourse } from 'src/app/SmartAttendance/Model/instructor-course';
import { InstructorCourseService } from 'src/app/SmartAttendance/Service/instructor-course.service';
import { LecturesDialogComponent } from '../../Lectures/lectures-dialog/lectures-dialog.component';
import { DeleteCoursDialogComponent } from '../delete-cours-dialog/delete-cours-dialog.component';
import { AttendanceDialogComponent } from '../attendance-dialog/attendance-dialog.component';
type InstructorData = {data:InstructorCourse, color:string}
@Component({
  selector: 'app-instructor-courses',
  templateUrl: './instructor-courses.component.html',
  styleUrls: ['./instructor-courses.component.css']
})
export class InstructorCoursesComponent {

  instructorCourse:InstructorData[] =[];

  constructor(private instructorCourseService:InstructorCourseService, private matDialog:MatDialog) {}
  colors = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-muted'];

  ngOnInit(){
    this.getAll();
  }
  
  getAll(){
    this.instructorCourseService.getAll(1).subscribe(res=>{
      this.instructorCourse = [];
      res.value.forEach((element:InstructorCourse) => {
        this.instructorCourse.push({data:element,color:this.colors[Math.floor(Math.random() * 7)]})
      });;
    })
  }

  generateRandomColor() :string{
    return this.colors[Math.floor(Math.random() * 7)];
  }

  openLecturesDialog(item:InstructorCourse){
    this.matDialog.open(LecturesDialogComponent,{
      width:'60%',
      position:{
        top:'2%'
      },
      data:item
    })
  }

  openDeleteDialog(item:InstructorCourse){
   var dialog =  this.matDialog.open(DeleteCoursDialogComponent,{
      data:item
    })
    dialog.afterClosed().subscribe(res=>{
      if(dialog.id == 'success') this.getAll();
    })
  }


  openAttendanceDialog(item:InstructorCourse){
    var dialog =  this.matDialog.open(AttendanceDialogComponent,{
      data:item,
      width:'80%',
      position:{
        top:'2%'
      }
    })
    dialog.afterClosed().subscribe(res=>{
      if(dialog.id == 'success') this.getAll();
    })
  }
}
