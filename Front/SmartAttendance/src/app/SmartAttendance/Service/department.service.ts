import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { Result } from '../Model/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private baseService: BaseService) { }

  getAll(): Observable<Result> {
    return this.baseService.get(`${environment.BASE_URL}/api/Department/GetAll`)
  }

  add(departmentName: string): Observable<Result> {
    return this.baseService.post(`${environment.BASE_URL}/api/Department/Add?departmentName=${departmentName}`, departmentName)
  }

  delete(id: number): Observable<Result> {
    return this.baseService.delete(`${environment.BASE_URL}/api/Department/Delete/${id}`)
  }

}
