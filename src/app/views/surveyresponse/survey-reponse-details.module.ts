import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SurveyResponseDetailsComponent } from './survey-response-details.component';
import { SurveyResponseRoutingModule } from './survey-reponse-details-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
 

@NgModule({
  imports: [
    FormsModule,
    //SurveyResponseRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ 
   // SurveyResponseDetailsComponent,
     
  ]
})
export class SurveyResponseDetailsModule { }
