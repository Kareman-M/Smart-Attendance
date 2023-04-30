import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { AddLucture } from '../Model/add-lucture';
import { Result } from '../Model/result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private baseService:BaseService) { }

  get(instructorCourseId:number){
    return this.baseService.get(`${environment.BASE_URL}/api/Lecture/Get/${instructorCourseId}`)
  }

  add(data:AddLucture):Observable<Result>{
    return this.baseService.post(`${environment.BASE_URL}/api/Lecture/Add/`,data)
  }

  delete(lectureId:number):Observable<Result>{
    return this.baseService.delete(`${environment.BASE_URL}/api/Lecture/Delete/${lectureId}`)
  }

  getAllInstructorLectures(instructorId:number){
    return this.baseService.get(`${environment.BASE_URL}/api/Lecture/GetAllInstructorLectures/${instructorId}`)
  }
}
