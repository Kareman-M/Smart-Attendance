import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department } from 'src/app/SmartAttendance/Model/department';
import { DepartmentService } from 'src/app/SmartAttendance/Service/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  @Output() updateDepartmentsList: EventEmitter<Department> = new EventEmitter();
  @ViewChild('dept') public department!: ElementRef;

  constructor(private departmentService: DepartmentService, private snackBar: MatSnackBar) {
  }

  addDepartment(name: string) {
    this.departmentService.add(name).subscribe(res => {
      this.snackBar.open(res.message, "", { duration: 3000 });
      this.department.nativeElement.value = null;
      this.updateDepartmentsList.emit(res.value);
    });
  }
}
