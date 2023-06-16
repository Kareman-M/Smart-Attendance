import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseAttendanceService {

  constructor(private baseService:BaseService) { }

  getLecturesAttendance(instructorCourseId:number){
    return this.baseService.get(`${environment.BASE_URL}/api/StudentCourseAttendance/GetLecturesAttendance/${instructorCourseId}`)
  }
}
