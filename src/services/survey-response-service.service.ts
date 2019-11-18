import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SurveyResponseServiceService {
  baseURl: string = environment.apiURL;

  constructor(private httpClient: HttpClient,
              private httpClientModule: HttpClientModule,
              private handler: HttpHandler) { }
  
  getResponses(){
    return this.httpClient.get(this.baseURl + '/view_all_responses',{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      })
    });
  }

  getSingleResponse(public_id){
    return this.httpClient.get(this.baseURl + `/view_single_survey_responses/${public_id}`, {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      })
    })
  }

}
