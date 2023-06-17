import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Layout/login/login/login.component';
import { AuthGuardService } from './SmartAttendance/Service/auth-guard.service';
import { FirstLoginComponent } from './Layout/login/first-login/first-login.component';
import { MainComponent } from './Layout/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, loadChildren: () => import('./SmartAttendance/smart-attendance/smart-attendance.module').then(m => m.SmartAttendanceModule), canActivate: [AuthGuardService] },
  { path: 'firstlogin', component: FirstLoginComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
