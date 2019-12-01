import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // simple service to perform http requests

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, params: any = {}) {
    return new Promise((resolve, reject) => {
      this.http
        .get(url, {params})
        .subscribe((res)=>{
          resolve(res);
        });
    })
  }

  post(url: string, body = null, params: any = {}) {
    return new Promise((resolve, reject) => {
      this.http
        .post(url, body, {params})
        .subscribe(res =>{
            resolve(res);
        }, error => {
          reject(error);
        });
    })
  }

}