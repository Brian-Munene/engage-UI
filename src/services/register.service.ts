import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpHeaders, HttpClient, HttpHandler, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient,
    private httpCLientModule: HttpClientModule, private handler: HttpHandler) { }

  registerUser(obj) {
    // return this.httpClient.post(this.baseURL, obj, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // }).pipe(map(data => data));
    console.log(this.baseURL);
    return this.httpClient.post(this.baseURL + '/register', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}
