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
      console.log(this.baseURL);
      return this.httpClient.post(this.baseURL + '/login', obj, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      });
    } 
}
