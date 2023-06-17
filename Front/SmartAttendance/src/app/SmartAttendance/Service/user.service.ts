import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { AddUser } from '../Model/add-user';
import { Observable } from 'rxjs';
import { Result } from '../Model/result';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private baseService: BaseService) { }

  login(user: { Username: string, Password: string }):Observable<Result> {
    return this.baseService.post(`${environment.BASE_URL}/api/Account/Login`, user);
  }

  add(user:AddUser){
    return this.baseService.post(`${environment.BASE_URL}/api/User/Add`,user);
  }

  getAll(){
    return this.baseService.get(`${environment.BASE_URL}/api/User/GetAll`);
  }

  resetPassowrd(password:string, username:string): Observable<Result>{
    return this.baseService.put(`${environment.BASE_URL}/api/User/ResetPassowrd/${username}/${password}`,null)
  }

  delete(username:string): Observable<Result>{
    return this.baseService.delete(`${environment.BASE_URL}/api/User/Remove/${username}`)
  }

  changePassowrdForFirstLogin(password:string, username:string): Observable<Result>{
    return this.baseService.put(`${environment.BASE_URL}/api/User/ChangePassowrdForFirstLogin/${username}/${password}`,null)
  }
}