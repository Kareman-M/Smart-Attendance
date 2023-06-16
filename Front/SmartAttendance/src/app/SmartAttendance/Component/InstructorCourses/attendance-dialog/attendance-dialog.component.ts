import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { InstructorCourse } from 'src/app/SmartAttendance/Model/instructor-course';
import { InstructorCourseLecturesAttendance } from 'src/app/SmartAttendance/Model/instructor-course-lectures-attendance';
import { StudentCourseAttendanceService } from 'src/app/SmartAttendance/Service/student-course-attendance.service';

@Component({
  selector: 'app-attendance-dialog',
  templateUrl: './attendance-dialog.component.html',
  styleUrls: ['./attendance-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AttendanceDialogComponent implements OnInit{

  columnsToDisplay=['Title', 'Date', 'Attendance Grade','expand'];
  attendance:InstructorCourseLecturesAttendance[] = [];
  expandedElement!: InstructorCourseLecturesAttendance | null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InstructorCourse,
    private dialogRef: MatDialogRef<AttendanceDialogComponent>,
    private studentCourseAttendanceService:StudentCourseAttendanceService) {
  }

  ngOnInit() {
    this.getCourseLecturesAttendance();
  }

  getCourseLecturesAttendance(){
    this.studentCourseAttendanceService.getLecturesAttendance(this.data.id).subscribe(res=>{
      this.attendance = res;
    })
  }

}
