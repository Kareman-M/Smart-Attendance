import { Component, EventEmitter, Output } from '@angular/core';
import { Department } from 'src/app/SmartAttendance/Model/department';

@Component({
  selector: 'app-department-dialog',
  templateUrl: './department-dialog.component.html',
  styleUrls: ['./department-dialog.component.css']
})
export class DepartmentDialogComponent {

  @Output() updateDataSources: EventEmitter<string> = new EventEmitter();
  newDepartment!: Department;

  updateDepartmentsList(event: Department) {
    this.newDepartment = event;
  }
}
