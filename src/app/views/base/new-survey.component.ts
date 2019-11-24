import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from '../../../services/survey.service';

@Component({
  templateUrl: 'new-survey.component.html'
})
export class NewSurveyComponent implements OnInit{

  @Input() newSurveyForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private surveyService: SurveyService,
              private router: Router) { }

  ngOnInit() {
    this.newSurveyForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'question0': [''],
      'question1': [''],
      'question2': [''],
      'question3': [''],
      'question4': [''],
      'question5': [''],
    });
  }

  get f() { return this.newSurveyForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.newSurveyForm.invalid) { alert('Please fill the form correctly')};

    const survey = {
      name: this.newSurveyForm.value.name,
      description: this.newSurveyForm.value.description,
      company_code: this.newSurveyForm.value.company_code,
      question0: this.newSurveyForm.value.question0,
      question1: this.newSurveyForm.value.question1,
      question2: this.newSurveyForm.value.question2,
      question3: this.newSurveyForm.value.question3,
      question4: this.newSurveyForm.value.question4,
      question5: this.newSurveyForm.value.question5
    }

    this.surveyService.createSurvey(survey).subscribe((response) => {
      alert(response['name'] + ' was created successfully ');
      this.router.navigate(['/base/home']);
    })

    console.log(survey);
  }

  onReset() {
    this.submitted = false;
    this.newSurveyForm.reset();
  }

}
