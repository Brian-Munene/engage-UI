import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SurveyResponseDetailsComponent } from './survey-response-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'survey-response-details',
        component: SurveyResponseDetailsComponent,
        data: {
          title: 'Survey Response Details'
        }
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
