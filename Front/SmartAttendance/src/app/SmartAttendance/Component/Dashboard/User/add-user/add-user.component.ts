import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/SmartAttendance/Model/user';
import { UserService } from 'src/app/SmartAttendance/Service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @Output() updateUsersList: EventEmitter<User> = new EventEmitter();
  @ViewChild('user') public user!: ElementRef;

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
  }

  addUser() {
    // this.departmentService.add(name).subscribe(res => {
    //   this.snackBar.open(res.message, "", { duration: 3000 });
    //   this.department.nativeElement.value = null;
    //   this.updateUsersList.emit(res.value);
    // });
  }
}
