import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SurveyService } from '../../../services/survey.service';
import { from } from 'rxjs';
import {SurveyComponent} from './survey.component';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
 
  surveys = [];
  // survey;
  public_id: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private surveyService: SurveyService, private router:Router) { }

  ngOnInit() {
    this.getSurveys()
  }
  getSurveys() {
    return this.surveyService.getSurveys().subscribe((data: any[])=>{
      //console.log(data);
      this.surveys = data;
    });
  }

  sendMessage(survey) {
    //console.log(survey)
    this.router.navigateByUrl('/base/survey', {state: {surv:survey.public_id}});
    //this.public_id = survey.public_id;
  }

}
