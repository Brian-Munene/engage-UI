import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { SurveyResponseServiceService } from '../../../services/survey-response-service.service';

@Component({
  templateUrl: 'survey-response-details.component.html'
})
export class SurveyResponseDetailsComponent implements OnInit {

  public_id: string;
  table_data = [];
  happiness = 0;
  sadness = 0;
  hate = 0;
  survey_name: string;
  survey: any;
  response_count = 0;
  
  state: Observable<Object>;

  constructor(private router: Router, 
              private surveyResponseService: SurveyResponseServiceService) { 
    this.survey = this.router.getCurrentNavigation()!.extras.state
    console.log(this.survey.data)
   
  }

  ngOnInit() {
    return this.surveyResponseService.getSingleResponse(this.survey.data).subscribe((response: any)=>{
      console.log(response);
      this.table_data = response.response_list;
      this.happiness = response.happiness;
      this.sadness = response.sadness;
      this.hate = response.hate;
      this.survey_name = response.survey_name;
      this.response_count = response.response_count;
    });
  }

  receiveMessage($event) {
    this.public_id = $event
  }
}
