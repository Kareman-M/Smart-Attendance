import { Component, EventEmitter, Output } from '@angular/core';
import { CourseDTO } from 'src/app/SmartAttendance/Model/course-dto';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent {
  @Output() updateDataSources: EventEmitter<string> = new EventEmitter();
  newCourse!: CourseDTO;

  updateCoursesList(event: CourseDTO) {
    this.newCourse = event;
  }
}
