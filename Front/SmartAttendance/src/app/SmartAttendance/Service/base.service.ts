import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // token: any = localStorage.getItem("jwt");
  header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'userId': localStorage.getItem('userId')?.toString() ?? "",
  });
  // new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': `Bearer ${this.token}`,
  // })

  constructor(private httpClient: HttpClient, private router: Router,) { }

  get(url: string, params?: any): Observable<any> {
    if (params) {
      return this.httpClient.get(url, { headers: this.header, params })

    }
    return this.httpClient.get(url, { headers: this.header })
  }

  post(url: string, data: any): Observable<any> {
    return this.httpClient.post(url, data, { headers: this.header })
  }

  put(url: string, data: any): Observable<any> {
    return this.httpClient.put(url, data, { headers: this.header })
  }

  delete(url: string): Observable<any> {
    console.log(this.header)
    return this.httpClient.delete(url, { headers: this.header })
  }
  patch(url: string): Observable<any> {
    return this.patch(url);
  }

}
