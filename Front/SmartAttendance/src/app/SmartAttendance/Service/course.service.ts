import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Result } from '../Model/result';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCourse } from '../Model/add-course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private baseService: BaseService) { }

  getAll(): Observable<Result> {
    return this.baseService.get(`${environment.BASE_URL}/api/Course/GetAll`)
  }

  add(data: AddCourse): Observable<Result> {
    return this.baseService.post(`${environment.BASE_URL}/api/Course/Add`, data)
  }

  delete(id: number): Observable<Result> {
    return this.baseService.delete(`${environment.BASE_URL}/api/Course/Delete/${id}`)
  }
}
