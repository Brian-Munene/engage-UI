import { Component, OnInit } from '@angular/core';
import { SurveyResponseServiceService } from '../../../services/survey-response-service.service';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  happiness = 0;
  hate = 0;
  sadness = 0;
  response_count = 0;
  survey_count = 0;
  users_count = 0;
  surveys = [];
  constructor(private surveyResPonseService: SurveyResponseServiceService){}

  async ngOnInit() {
    return this.surveyResPonseService.getResponses().subscribe((data:any)=>{
      console.log(data)
      this.happiness = data.happiness;
      this.hate = data.hate;
      this.sadness = data.sadness;
      this.response_count = data.responses_count
      this.survey_count = data.survey_count
      this.users_count = data.users_count
      this.surveys = data.surveys_list

    })
    }
  }
