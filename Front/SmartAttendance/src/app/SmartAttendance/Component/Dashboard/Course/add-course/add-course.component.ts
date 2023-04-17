import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseDTO } from 'src/app/SmartAttendance/Model/course-dto';
import { Department } from 'src/app/SmartAttendance/Model/department';
import { CourseService } from 'src/app/SmartAttendance/Service/course.service';
import { DepartmentService } from 'src/app/SmartAttendance/Service/department.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  departments: Department[] = [];
  @ViewChild('course') public course!: ElementRef;
  @ViewChild('dept') public dept!: MatSelect;
  @Output() updateCoursesList: EventEmitter<CourseDTO> = new EventEmitter();

  constructor(private departmentService: DepartmentService, private courseService: CourseService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getDepartment();
  }



  getDepartment() {
    this.departmentService.getAll().subscribe(res => {
      this.departments = res.value;
    })
  }

  addCourse(course: string, deptId: string,) {
    this.courseService.add({ courseName: course, departmentId: parseInt(deptId) }).subscribe(res => {
      this.snackBar.open(res.message, "", { duration: 3000 });
      if (res.isCompleted) {
        this.course.nativeElement.value = null;
        this.dept._elementRef.nativeElement.value = '0';
        (res.value as CourseDTO).departmentName = this.departments.find(x => x.id == parseInt(deptId))?.name ?? "";
        this.updateCoursesList.emit(res.value);
      }
    })
  }
}
