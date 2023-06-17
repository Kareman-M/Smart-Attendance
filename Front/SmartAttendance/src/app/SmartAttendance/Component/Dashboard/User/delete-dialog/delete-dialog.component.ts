import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/SmartAttendance/Model/user';
import { UserService } from 'src/app/SmartAttendance/Service/user.service';
import { ResetPasswordDialogComponent } from '../reset-password-dialog/reset-password-dialog.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
    private userService:UserService,
    private snackbar:MatSnackBar) { }

    deleteUser(){
      this.userService.delete(this.data.userName).subscribe(res=>{
        this.snackbar.open(`${res.message}`,"dismiss",{duration:3000});
        if(res.isCompleted) this.dialogRef.id = 'success'
        this.dialogRef.close();
      })
    }
}
