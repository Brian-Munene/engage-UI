import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from '../../../services/survey.service';
import {Router, NavigationStart} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  templateUrl: 'survey.component.html'
})
export class SurveyComponent implements OnInit {

  public_id: string;
  survey: any;
  formDetails;
  state: Observable<Object>;
  submitted = false;

  @Input() surveyResponseForm: FormGroup;

  constructor(private surveyService: SurveyService, 
              private router:Router,
              private fb: FormBuilder) {
    this.survey = this.router.getCurrentNavigation()!.extras.state
    // console.log(this.survey.surv)
   }

  async ngOnInit(){
    this.surveyResponseForm = this.fb.group({
      'q0': [''],
      'q1': [''],
      'q2': [''],
      'q3': [''],
      'q4': [''],
      'q5': ['']
    });
    return this.surveyService.singleSurvey(this.survey.surv).subscribe((data: any)=>{
      // console.log(data);
      this.formDetails = data;
      // console.log(this.formDetails);
    });
   
  }

  onSubmit() {
    this.submitted = true;
    const surveyResponse = {
      response: this.surveyResponseForm.value.q0,
      response1: this.surveyResponseForm.value.q1,
      response2: this.surveyResponseForm.value.q2,
      response3: this.surveyResponseForm.value.q3,
      response4: this.surveyResponseForm.value.q4,
      response5: this.surveyResponseForm.value.q5,
    }
    this.surveyService.surveyResponse(surveyResponse, this.formDetails.public_id).subscribe((response) => {
      window.alert('Your response has been save successfully');
      this.router.navigate(['/base/home']);
    });
    //console.log(surveyResponse);
  }

  receiveMessage($event) {
    this.public_id = $event
  }

  onReset() {
    this.submitted = false;
    this.surveyResponseForm.reset();
  }

}
