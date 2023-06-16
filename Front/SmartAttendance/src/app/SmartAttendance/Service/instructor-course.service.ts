import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AddInstructorCourse } from '../Model/add-instructor-course';
import { environment } from 'src/environments/environment';
import { Result } from '../Model/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorCourseService {

  constructor(private baseService:BaseService) { }

  add(data:AddInstructorCourse):Observable<Result>{
    return this.baseService.post(`${environment.BASE_URL}/api/InstructorCourse/Add`,data)
  }

  getAll(instructorId:number):Observable<Result>{
    return this.baseService.get(`${environment.BASE_URL}/api/InstructorCourse/GetAll/${instructorId}`)
  }

  delete(instructorcourseId:number):Observable<Result>{
    return this.baseService.delete(`${environment.BASE_URL}/api/InstructorCourse/Delete/${instructorcourseId}`)
  }
}
