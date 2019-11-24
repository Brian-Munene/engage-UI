import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {HttpHeaders, HttpClient, HttpHandler, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient,
    private httpCLientModule: HttpClientModule, private handler: HttpHandler) { }

    loginUser(obj): Observable<any> {
      return this.httpClient.post(this.baseURL + '/login', obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      });
    } 

    getUser(){
      return this.httpClient.get(this.baseURL + '/single_user',{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        })
      });
    }
    
    logout(){
      return this.httpClient.post(this.baseURL + '/logout', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      });
    }
    companies(){
      return this.httpClient.get(this.baseURL + '/companies', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        })
      });
    }
    joinCompany(obj): Observable<any> {
      return this.httpClient.post(this.baseURL + '/join_company', obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        })
      });
    }
}
