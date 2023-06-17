import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/SmartAttendance/Model/user';
import { UserService } from 'src/app/SmartAttendance/Service/user.service';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.css']
})
export class ResetPasswordDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
    private userService:UserService,
    private snackbar:MatSnackBar) { }

    reset(pass:string){
      this.userService.resetPassowrd(pass, this.data.userName).subscribe(res=>{
        this.snackbar.open(`${res.message}`,"dismiss",{duration:3000});
        this.dialogRef.close();
      })
    }
}
