import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddInstructorCourse } from 'src/app/SmartAttendance/Model/add-instructor-course';
import { Course } from 'src/app/SmartAttendance/Model/course';
import { Department } from 'src/app/SmartAttendance/Model/department';
import { DepartmentService } from 'src/app/SmartAttendance/Service/department.service';
import { InstructorCourseService } from 'src/app/SmartAttendance/Service/instructor-course.service';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent {

  departments: Department[] = [];
  courses: Course[] = [];
  formGroup!: FormGroup;
  addlecturesOn: boolean = false;
  @Output() public updateData: EventEmitter<boolean> = new EventEmitter();
  
  ngOnInit() {
    this.getDepartments();
    this.declareFormIntites();
  }

  constructor(
    private departmentService: DepartmentService,
    private instructorCourseService: InstructorCourseService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  getDepartments() {
    this.departmentService.getAll().subscribe(res => {
      this.departments = res.value;
      this.departments.forEach(dept => {
        this.courses.push(...dept.courses)
      })
    });
  }

  submit() {
    var obj: AddInstructorCourse = {
      instructorId: 1,
      totalAttendanceGrade: this.formGroup.get('TotalAttendanceGrade')?.value,
      courseId: this.formGroup.get('CourseId')?.value,
      term: this.formGroup.get('Term')?.value
    }
    this.instructorCourseService.add(obj).subscribe(res => {
      this.snackBar.open(res.message, "", { duration: 2000 });
      if (res.isCompleted) {
        this.formGroup.reset();
        this.updateData.emit(true);
      }
    })
  }



  declareFormIntites() {
    this.formGroup = this.formBuilder.group({
      CourseId: new FormControl('', [Validators.required]),
      DepartmentId: new FormControl('', [Validators.required]),
      TotalAttendanceGrade: new FormControl('', [Validators.required]),
      Term: new FormControl('', [Validators.required]),
    });
  }


}
