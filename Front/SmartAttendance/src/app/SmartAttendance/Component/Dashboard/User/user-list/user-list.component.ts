import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/SmartAttendance/Model/user';
import { UserService } from 'src/app/SmartAttendance/Service/user.service';
import { ResetPasswordDialogComponent } from '../reset-password-dialog/reset-password-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input() newUser !: boolean;

  users: User[] = [];
  displayedColumns = ['Name', 'UserName','Role','CreatedAt','Active','sympol'];

  constructor(private userService:UserService, private matDialog:MatDialog) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.getAllUsers();
  }


  getAllUsers() {
    this.userService.getAll().subscribe(res=>{
      this.users = res;
    })
  }

  openResetPassowrdDialog(element:User){
    this.matDialog.open(ResetPasswordDialogComponent,{
      data:element
    })
  }

  openDeleteDialog(element:User){
   var dialogRef =  this.matDialog.open(DeleteDialogComponent,{
      data:element
    });
    dialogRef.afterClosed().subscribe(res=>{
      if(dialogRef.id == 'success') this.getAllUsers();
    })
  }
}
