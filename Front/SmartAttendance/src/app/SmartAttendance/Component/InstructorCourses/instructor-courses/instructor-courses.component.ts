import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructorCourse } from 'src/app/SmartAttendance/Model/instructor-course';
import { InstructorCourseService } from 'src/app/SmartAttendance/Service/instructor-course.service';
import { LecturesDialogComponent } from '../../Lectures/lectures-dialog/lectures-dialog.component';
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
      console.log(res)
      res.value.forEach((element:InstructorCourse) => {
        this.instructorCourse.push({data:element,color:this.colors[Math.floor(Math.random() * 7)]})
      });;
      console.log(res)
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

  delete(item:InstructorCourse){
    this.instructorCourseService.delete(item.id).subscribe(res=>{
      if(res.isCompleted){
        this.getAll();

      }
    })
  }
}
