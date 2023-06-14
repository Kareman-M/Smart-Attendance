import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private baseService: BaseService) { }
  login(user: { Username: string, Password: string }) {
    this.baseService.post(`${environment.BASE_URL}/api/Account/Login`, user);
  }
}