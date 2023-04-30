import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddLucture } from 'src/app/SmartAttendance/Model/add-lucture';
import { InstructorCourse } from 'src/app/SmartAttendance/Model/instructor-course';
import { LectureService } from 'src/app/SmartAttendance/Service/lecture.service';

@Component({
  selector: 'app-lectures-dialog',
  templateUrl: './lectures-dialog.component.html',
  styleUrls: ['./lectures-dialog.component.css']
})
export class LecturesDialogComponent {

  allLectures: AddLucture[] = [];
  formGroup!:FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: InstructorCourse,
    private lectureService: LectureService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getLectures();
    this.declareFormIntites();
  }

  addlecture() {
    var obj: AddLucture = {
      instructorCourseId: this.item.id,
      date:  new Date(this.formGroup.get('date')?.value).toISOString(),
      title: this.formGroup.get('title')?.value,
      barCode: '',
      attendanceGrade: this.formGroup.get('grade')?.value,
    }
    this.lectureService.add(obj).subscribe(res => {
      if(res.isCompleted){
        this.getLectures();
        this.formGroup.reset();
      }
      this.snackBar.open(res.message,"",{duration:2000})
    })
  }

  getLectures() {
    this.lectureService.get(this.item.id).subscribe(res => {
      if (res && res.length) {
        console.log(res)
        this.allLectures = res;
      }
    })
  }


  deleteLecture(item: AddLucture) {

    var index = this.allLectures.indexOf(item);
    if (index > -1) {
      this.lectureService.delete(item.id ?? 0).subscribe(res => {
        if (res.isCompleted) {
        console.log(res)
       this.getLectures();
       console.log(this.allLectures)
      }
      this.snackBar.open(res.message,"",{duration:2000})
    });
  }
  }

  canAddTheGrade(){

  }

  declareFormIntites(){
    this.formGroup = this.formBuilder.group({
      title:new FormControl('',[Validators.required]),
      grade:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
    })
  }
}
