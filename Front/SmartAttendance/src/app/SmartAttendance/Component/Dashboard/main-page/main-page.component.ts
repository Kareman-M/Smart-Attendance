import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentDialogComponent } from '../department-dialog/department-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private matDialog: MatDialog) { }

  openDepartmentsDialog() {
    this.matDialog.open(DepartmentDialogComponent, {
      width: '70%',
      position: {
        top: '2%'
      }
    })
  }
}
