import { Component } from '@angular/core';
import { InstructorCourse } from 'src/app/SmartAttendance/Model/instructor-course';
import { InstructorCourseService } from 'src/app/SmartAttendance/Service/instructor-course.service';

@Component({
  selector: 'app-instructor-courses',
  templateUrl: './instructor-courses.component.html',
  styleUrls: ['./instructor-courses.component.css']
})
export class InstructorCoursesComponent {

  instructorCourse:InstructorCourse[] =[];

  constructor(private instructorCourseService:InstructorCourseService) {}
  colors = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-muted'];

  ngOnInit(){
    this.getAll();
  }
  
  getAll(){
    this.instructorCourseService.getAll(1).subscribe(res=>{
      this.instructorCourse = res.value;
      console.log(res)
    })
  }
  generateRandomColor() :string{
    return this.colors[Math.floor(Math.random() * 7)];
  }
}
