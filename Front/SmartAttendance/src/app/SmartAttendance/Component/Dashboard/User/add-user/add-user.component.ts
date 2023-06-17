import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddUser } from 'src/app/SmartAttendance/Model/add-user';
import { UserService } from 'src/app/SmartAttendance/Service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  @Output() updateUsersList: EventEmitter<boolean> = new EventEmitter();
  logForm!:FormGroup;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.declareForIntites();
  }

  addUser() {
    var obj:AddUser = {
      Name : this.logForm.get('Name')?.value,
      Password : this.logForm.get('Password')?.value,
      Role : this.logForm.get('Role')?.value,
      UserName : this.logForm.get('UserName')?.value,
    }
    this.userService.add(obj).subscribe(res => {
      this.snackBar.open(res.message, "", { duration: 3000 });
      this.updateUsersList.emit(true);
      this.logForm.reset();
    });
  }

  declareForIntites() {
    this.logForm = this.formBuilder.group({
      Name:new FormControl('',[Validators.required]),
      UserName:new FormControl('',[Validators.required]),
      Password:new FormControl('',[Validators.required, Validators.pattern('')]),
      Role:new FormControl('',[Validators.required]),
    })
  }
}
