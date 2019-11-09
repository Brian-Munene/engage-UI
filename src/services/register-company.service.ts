import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
import { HttpHeaders, HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterCompanyService {
  baseURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient,
              private httpClientModule: HttpClientModule,
              private handler: HttpHandler) { }
  
  registerCompany(obj) {
    return this.httpClient.post(this.baseURL + '/register_company', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      })
    });
  }
}
