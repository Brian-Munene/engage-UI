import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyResponseDetailsComponent } from './survey-response-details.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyResponseDetailsComponent,
    data: {
      title: 'survey-responses-details'
    },
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyResponseRoutingModule {}
