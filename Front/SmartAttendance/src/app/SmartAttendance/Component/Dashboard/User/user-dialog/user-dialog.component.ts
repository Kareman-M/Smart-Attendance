import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/SmartAttendance/Model/user';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent {
  @Output() updateDataSources: EventEmitter<string> = new EventEmitter();
  newUser!: User;

  updateUsersList(event: User) {
    this.newUser = event;
  }
}
