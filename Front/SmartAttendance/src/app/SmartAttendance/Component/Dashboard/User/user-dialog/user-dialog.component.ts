import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/SmartAttendance/Model/user';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent {
  newUser!: boolean;

  updateUsersList(event: boolean) {
    this.newUser = event;
  }
}
