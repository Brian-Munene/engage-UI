import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
import { HttpHeaders, HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  baseURL: string = environment.apiURL;

  constructor(private httpClient: HttpClient,
              private httpClientModule: HttpClientModule,
              private handler: HttpHandler) { }
  
  createSurvey(obj) {
    return this.httpClient.post(this.baseURL + '/create_survey', obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      })
    });
  }

  getSurveys() {
    return this.httpClient.get(this.baseURL + '/surveys', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      })
    });
  }

  singleSurvey(public_id) {
    
    console.log(public_id);
    console.log(typeof(public_id));

    //console.log(public_id.surv);
    return this.httpClient.get(this.baseURL + `/survey/${public_id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      })
    });
  }

  surveyResponse(obj, public_id) {
    return this.httpClient.post(this.baseURL + `/create_response/${public_id}`, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      })
    });
  }
}
