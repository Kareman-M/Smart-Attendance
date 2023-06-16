import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InstructorCourse } from 'src/app/SmartAttendance/Model/instructor-course';
import { InstructorCourseService } from 'src/app/SmartAttendance/Service/instructor-course.service';

@Component({
  selector: 'app-delete-cours-dialog',
  templateUrl: './delete-cours-dialog.component.html',
  styleUrls: ['./delete-cours-dialog.component.css']
})
export class DeleteCoursDialogComponent {

  constructor(private instructorCourseService:InstructorCourseService,
    @Inject(MAT_DIALOG_DATA) public data: InstructorCourse,
    private dialogRef:MatDialogRef<DeleteCoursDialogComponent>) {}


  delete(){
    this.instructorCourseService.delete(this.data.id).subscribe(res=>{
      if(res.isCompleted){
        this.dialogRef.id = 'success';
        this.dialogRef.close();
      }
    })
  }
}
