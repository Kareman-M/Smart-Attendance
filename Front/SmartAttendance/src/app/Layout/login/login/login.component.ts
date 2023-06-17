import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Encrypt } from 'src/app/Security/encrypt';
import { User } from 'src/app/SmartAttendance/Model/user';
import { UserService } from 'src/app/SmartAttendance/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm!: FormGroup;
  private encrypt = new Encrypt();
  
  constructor(
    private formBuilder: FormBuilder, 
    private userService:UserService, 
    private snackBar:MatSnackBar, 
    private router:Router) { }

  ngOnInit() {
    this.declareFormIntiites();
  }

  login() {
    var obj = {
      Username:this.loginForm.get('username')?.value,
      Password:this.loginForm.get('password')?.value
    }
    this.userService.login(obj).subscribe(res=>{
      if(!res.isCompleted){
        this.snackBar.open(`${res.message}`,"dismiss");
        return;
      }

      let user = res.value as User;
      localStorage.setItem('userId',user.id.toString());
      localStorage.setItem('userName',user.userName);
      localStorage.setItem('name',user.name);
      localStorage.setItem('role',user.role);
      if(user.firstLogin){
        this.router.navigate(['/firstlogin'])
        return;
      }
      else{
        this.router.navigate([''])
      }
    })
  }

  declareFormIntiites() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }
}
