import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/SmartAttendance/Service/user.service';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent {


  constructor(private userService:UserService,private route: Router){}

  changePassowrdForFirstLogin(password:string){
    this.userService.changePassowrdForFirstLogin(password,localStorage.getItem('userName')??'').subscribe(res=>{
      if(res.isCompleted){
        this.route.navigate([''])
      }
    })
  }
}
